import react from "react";
import article from './article-info';

function createCard(article) {
    return(
        <Card 
            key={article.id}
            img={article.imgURL}
            section={article.section}
            title={article.title}
            article ={article.article}
        />
    )
}

function Card(props) {
    return(
      <div className="card">
        <img className='images' src={props.img} alt='section-image'></img>
        <p className="item-1" >{props.section}</p>
        <h2>{props.title}</h2>
        <p>{props.article}</p>
      </div>
    )
  }


  const Section = () => {
      return(
          <div>
            {article.map(createCard)}
          </div>
      )
  }

  export default Section;