import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionLogin, clearAuth } from '../../actions/actionCreator';
import styles from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';

const LoginForm = (props) => {

  const dispatch = useDispatch();
  const { error, isFetching } = useSelector(state => state.auth);

  const authClear = bindActionCreators(clearAuth, dispatch);
  const loginRequest = bindActionCreators(authActionLogin, dispatch);

  const { handleSubmit, submitting } = props;

  useEffect(() => {
    return () => {
      authClear();
    };
  });

  const onSubmit = (values) => {
    loginRequest(values);
  };

  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <div className={ styles.loginForm }>
      { error && <Error data={ error.data } status={ error.status }
                        clearError={ authClear }/> }
      <form onSubmit={ handleSubmit(onSubmit) }>
        <Field
          name='email'
          classes={ formInputClasses }
          component={ FormInput }
          type='text'
          label='Email Address'
        />
        <Field
          name='password'
          classes={ formInputClasses }
          component={ FormInput }
          type='password'
          label='password'
        />
        <button type='submit' disabled={ submitting }
                className={ styles.submitContainer }>
          <span className={ styles.inscription }>{ isFetching
            ? 'Submitting...'
            : 'LOGIN' }</span>
        </button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.LoginSchem),
})(LoginForm);