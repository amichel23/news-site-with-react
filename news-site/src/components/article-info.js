import breakdance from './images/break-dancer.jpg'
import jellyfish from './images/jellyfish.jpg'
import snowboarder from './images/snowboarder.jpg'
import frenchtoast from './images/french-toast.jpg'
import weightlifter from './images/weight-lifter.jpg'
import skull from './images/skull.jpg'


const article = [
    {
        id: 0,
        imgURL:`${jellyfish}`,
        section: 'SCIENCE',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
    {
        id: 1,
        imgURL:`${frenchtoast}`,
        section: 'FOOD',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
    {
        id: 2,
        imgURL:`${weightlifter}`,
        section: 'SPORTS',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
    {
        id: 3,
        imgURL:`${skull}`,
        section: 'SCIENCE',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
    {
        id: 4,
        imgURL:`${breakdance}`,
        section: 'ARTS',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
    {
        id: 5,
        imgURL:`${snowboarder}`,
        section: 'SPORTS',
        title: "Lorem ipsum dolor sit amet.",
        article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."

    },
];

export default article;



// <img src={props.img} alt='section-image'></img>
//         <p>{props.section}</p>
//         <h2>{props.title}</h2>
//         <p>{props.article}</p>