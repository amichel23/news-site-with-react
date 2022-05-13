import article from './article-info';
import Science from './article-cards/science';
import Food from './article-cards/food';
import Sports from './article-cards/sports';
import Arts from './article-cards/arts';
import Sports2 from './article-cards/sports2';
import Science2 from './article-cards/science2';

// function createCard(article) {
//     return(
//         <Card 
//             key={article.id}
//             img={article.imgURL}
//             section={article.section}
//             title={article.title}
//             article ={article.article}
//         />
//     )
// }

// function Card(props) {
//     return(
//       <div className="card">
//         <img className='images' src={props.img} alt='section-screenshot'></img>
//         <p className="item-1" >{props.section}</p>
//         <h2>{props.title}</h2>
//         <p>{props.article}</p>
//       </div>
//     )
//   }


  const Section = () => {
      return(
          <div>
            {/* {article.map(createCard)} */}
            <Science />
            <Food />
            <Sports />
            <Arts />
            <Sports2 />
            <Science2 />

          </div>
      )
  }

  export default Section ;