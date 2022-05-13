import article from "../article-info";

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
        <img className='images' src={props.img} alt='section-screenshot'></img>
        <p className="item-1" >{props.section}</p>
        <h2>{props.title}</h2>
        <p>{props.article}</p>
      </div>
    )
  }

const Arts = () => {
    return (
        <div>
            <Card
            key={article[3].id}
            img={article[3].imgURL}
            section={article[3].section}
            title={article[3].title}
            article={article[3].article}
             /> 
        </div>
    )
}

export default Arts;