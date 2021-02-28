import React from 'react';
import Logo from '../../components/Logo';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articles from './articles.json'
import Faq from '../../components/Faq';

const RegistrationPage = (props) => {
  props.clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

  const faqStyles = {
    articlesMainContainer:styles.articlesMainContainer,
    ColumnContainer: styles.ColumnContainer,
    headerArticle: styles.headerArticle,
    article: styles.article
  };

  return (
    <div className={ styles.signUpPage }>

      <div className={ styles.signUpContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` }/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/login' style={ {textDecoration: 'none'} }><span>Login</span></Link>
          </div>
        </div>
        <div className={ styles.headerFormContainer }>
          <h2>
            CREATE AN ACCOUNT
          </h2>
          <h4>
            We always keep your name and email address private.
          </h4>
        </div>
        <RegistrationForm changeRoute={ changeRoute }/>
      </div>

      <div className={ styles.footer }>
        <Faq articles={articles} stylesClasses={faqStyles}/>
      </div>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearErrorSignUpAndLogin()),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);