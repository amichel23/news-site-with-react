import react from "react";
import robot from './images/robot.jpg'

const headingStyle = {
    background: `url(${robot}) center/cover`
}

const Header = () => {
    return (
        <div style={{background: `url(${robot}) center/cover`, height: "40vh"}}>
            <p className="item-7">Technology</p>
                    
                    <h1 ><a className="heading" >An Article About Technology</a></h1> 
                    <p className="abstract"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad. </p>
                    <button className="btn" >Learn More</button>
        </div>
    )
}
export default Header;