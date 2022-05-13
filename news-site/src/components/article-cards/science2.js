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
        <p className="item-3" >{props.section}</p>
        <h2>{props.title}</h2>
        <p>{props.article}</p>
      </div>
    )
  }

const Science2 = () => {
    return (
        <div>
            <Card
            key={article[5].id}
            img={article[5].imgURL}
            section={article[5].section}
            title={article[5].title}
            article={article[5].article}
             /> 
        </div>
    )
}

export default Science2;