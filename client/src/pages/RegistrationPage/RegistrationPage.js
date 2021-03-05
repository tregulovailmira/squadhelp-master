import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearErrorSignUpAndLogin, clearAuth } from '../../actions/actionCreator';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import AuthHeader from '../../components/AuthHeader';
import Faq from '../../components/Faq';
import Error from '../../components/Error/Error';
import articles from './articles.json'
import styles from './RegistrationPage.module.sass';

const RegistrationPage = (props) => {

  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const authClear = bindActionCreators(clearAuth, dispatch);
  const clearError = bindActionCreators(clearErrorSignUpAndLogin, dispatch)

  useEffect(() => {
    clearError();
  }, []);

  const changeRoute = () => {
    props.history.replace('/');
  };

  const { history: { location }} = props;

  const faqStyles = {
    articlesMainContainer:styles.articlesMainContainer,
    ColumnContainer: styles.ColumnContainer,
    headerArticle: styles.headerArticle,
    article: styles.article
  };

  return (
    <div className={ styles.signUpPage }>
      <AuthHeader location={location}/>
      <div className={ styles.signUpContainer }>
        <h2>
          CREATE AN ACCOUNT
        </h2>
        <h4>
          We always keep your name and email address private.
        </h4>
        { error && <Error data={ error.data } status={ error.status } clearError={ authClear }/> }
        <RegistrationForm changeRoute={ changeRoute }/>
      </div>
      
      <div className={ styles.footer }>
        <Faq articles={articles} stylesClasses={faqStyles}/>
      </div>

    </div>
  );
};

export default RegistrationPage;