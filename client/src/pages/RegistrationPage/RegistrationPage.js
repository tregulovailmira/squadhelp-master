import React from 'react';
import Logo from '../../components/Logo';
import RegistrationForm
  from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articles from './articles.json'

const RegistrationPage = (props) => {
  props.clearError();

  const changeRoute = () => {
    props.history.replace('/');
  };

  const renderFaqArticles = (articles)=>{
   return articles.map((article, index) => 
      <React.Fragment key={index}>
        <div className={ styles.headerArticle }>
          {article.header}
        </div>
        <div className={ styles.article } dangerouslySetInnerHTML={{ __html: article.body }}/>
      </React.Fragment>
      )
  }

  return (
    <div className={ styles.signUpPage }>

      <div className={ styles.signUpContainer }>
        <div className={ styles.headerSignUpPage }>
          <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` }/>
          <div className={ styles.linkLoginContainer }>
            <Link to='/login'
                  style={ {textDecoration: 'none'} }><span>Login</span></Link>
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
        <div className={ styles.articlesMainContainer }>
          <div className={ styles.ColumnContainer }>
            {renderFaqArticles(articles[0])}
          </div>

          <div className={ styles.ColumnContainer }>
            {renderFaqArticles(articles[1])}
          </div>
        </div>
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