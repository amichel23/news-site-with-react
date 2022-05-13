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

const Science = () => {
    return (
        <div>
            <Card
            key={article[0].id}
            img={article[0].imgURL}
            section={article[0].section}
            title={article[0].title}
            article={article[0].article}
             /> 
        </div>
    )
}

export default Science;