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
        <p className="item-2" >{props.section}</p>
        <h2>{props.title}</h2>
        <p>{props.article}</p>
      </div>
    )
  }

const Food = () => {
    return (
        <div>
            <Card
            key={article[1].id}
            img={article[1].imgURL}
            section={article[1].section}
            title={article[1].title}
            article={article[1].article}
             /> 
        </div>
    )
}

export default Food;