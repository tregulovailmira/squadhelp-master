import React from 'react';

export default function Faq(props) {

    const {articles, stylesClasses:{articlesMainContainer, ColumnContainer, headerArticle, article}} = props;

    const renderFaqArticles = (articles)=>{
        return articles.map((a, index) => 
            <React.Fragment key={index}>
                <div className={ headerArticle }>
                {a.header}
                </div>
                <div className={ article } dangerouslySetInnerHTML={{ __html: a.body }}/>
            </React.Fragment>
        )
  }
    
    return (
        <div className={articlesMainContainer}>

            <div className={ColumnContainer}>
                {renderFaqArticles(articles[0])}
            </div>
            <div className={ColumnContainer}>
                {renderFaqArticles(articles[1])}
            </div>
        </div>
        )
}
