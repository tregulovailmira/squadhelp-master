import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { authActionLogin } from '../../actions/actionCreator';
import Schems from '../../validators/validationSchems';
import customValidator from '../../validators/validator';
import FormInput from '../FormInput/FormInput';
import styles from './LoginForm.module.sass';

const LoginForm = (props) => {

  const dispatch = useDispatch();
  const { isFetching } = useSelector(state => state.auth);

  const loginRequest = bindActionCreators(authActionLogin, dispatch);

  const { handleSubmit, submitting } = props;

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
    <>
    <div className={ styles.loginForm }>
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
    </>
  );
}

export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.LoginSchem),
})(LoginForm);