import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth, clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo';
import Error from '../../components/Error/Error';
import CONSTANTS from '../../constants';
import styles from './LoginPage.module.sass';

const LoginPage = (props) => {

  const dispatch = useDispatch();

  const authClear = bindActionCreators(clearAuth, dispatch);
  const clearError = bindActionCreators(clearErrorSignUpAndLogin, dispatch);

  const { error } = useSelector(state => state.auth);

  useEffect(() => {
    return () => {
      clearError();
    };
  },[]);

  const changeRoute = () => {
    props.history.replace('/');
  };

  return (
    <div className={ styles.mainContainer }>
      <div className={ styles.loginContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` } alt="logo"/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/registration' style={ {textDecoration: 'none'} }>
              <span>Signup</span>
            </Link>
          </div>
        </div>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        { error && <Error data={ error.data } status={ error.status } clearError={ authClear }/> }
        <div className={ styles.loginFormContainer }>
          <LoginForm changeRoute={ changeRoute }/>
        </div>
      </div>
    </div>
  );

};

export default LoginPage;