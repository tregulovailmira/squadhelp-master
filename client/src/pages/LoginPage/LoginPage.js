import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth, clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import LoginForm from '../../components/LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader';
import Error from '../../components/Error/Error';
import styles from './LoginPage.module.sass';

const LoginPage = (props) => {

  const dispatch = useDispatch();

  const authClear = bindActionCreators(clearAuth, dispatch);
  const clearError = bindActionCreators(clearErrorSignUpAndLogin, dispatch);

  const { error } = useSelector(state => state.auth);

  const { history: { location }} = props;
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
      <AuthHeader location={location}/>
      <div className={ styles.loginContainer }>
        <h2>LOGIN TO YOUR ACCOUNT</h2>
        { error && <Error data={ error.data } status={ error.status } clearError={ authClear }/> }
        <LoginForm changeRoute={ changeRoute }/>
      </div>
    </div>
  );

};

export default LoginPage;