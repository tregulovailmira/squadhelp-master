import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActionRegister } from '../../actions/actionCreator';
import { Field, reduxForm } from 'redux-form';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import styles from './RegistrationForm.module.sass';

const RegistrationForm = (props) => {

  const dispatch = useDispatch();

  const register = bindActionCreators(authActionRegister, dispatch);

  const { handleSubmit, submitting } = props;

  const onSubmit = (values) => {
    register({
      firstName: values.firstName,
      lastName: values.lastName,
      displayName: values.displayName,
      email: values.email,
      password: values.password,
      role: values.role,
    });
  };

  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid,
  };

  return (
    <div className={ styles.signUpFormContainer }>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className={ styles.row }>
          <Field
            name='firstName'
            classes={ formInputClasses }
            component={ FormInput }
            type='text'
            label='First name'
          />
          <Field
            name='lastName'
            classes={ formInputClasses }
            component={ FormInput }
            type='text'
            label='Last name'
          />
        </div>
        <div className={ styles.row }>
          <Field
            name='displayName'
            classes={ formInputClasses }
            component={ FormInput }
            type='text'
            label='Display Name'
          />
          <Field
            name='email'
            classes={ formInputClasses }
            component={ FormInput }
            type='text'
            label='Email Address'
          />
        </div>
        <div className={ styles.row }>
          <Field
            name='password'
            classes={ formInputClasses }
            component={ FormInput }
            type='password'
            label='Password'
          />
          <Field
            name='confirmPassword'
            classes={ formInputClasses }
            component={ FormInput }
            type='password'
            label='Password confirmation'
          />
        </div>
        <div className={ styles.choseRoleContainer }>
          <Field name='role' type='radio' value={ CONSTANTS.CUSTOMER }
                  strRole='Join As a Buyer'
                  infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                  component={ RoleInput } id={ CONSTANTS.CUSTOMER }/>
          <Field name='role' type='radio' value={ CONSTANTS.CREATOR }
                  strRole='Join As a Creative'
                  infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                  component={ RoleInput } id={ CONSTANTS.CREATOR }/>
        </div>
        <div className={ styles.termsOfService }>
          <Field
            name='agreeOfTerms'
            classes={{
              container: styles.termsOfService,
              warning: styles.fieldWarning,
            }}
            id='termsOfService'
            component={ AgreeTermOfServiceInput }
            type='checkbox'
          />

        </div>
        <button type='submit' disabled={ submitting }
                className={ styles.submitContainer }>
          <span className={ styles.inscription }>Create Account</span>
        </button>
      </form>
    </div>
  );
}

const initialValues = {
  role: CONSTANTS.CUSTOMER,
};

export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.RegistrationSchem),
  initialValues: initialValues
})(RegistrationForm);