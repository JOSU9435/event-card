import { Link } from "react-router-dom";

const EventCard = () => {

    const title = 'Dummy event'
    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni ipsam placeat quos ipsa enim voluptas impedit eius quis quae!';
    
    return (  
        <div>
            <div id="card">
                <div id="eventImage">
                    <img src="/poster.png" alt="" />
                </div>
                <div id = "eventInfo">
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div id = "cardActions">
                    <Link className = "link" to = "/event/id">Learn More</Link>
                    <Link className = "link" to = "/login" >Join/Register</Link>
                </div>
            </div>
        </div>
    );
}
 
export default EventCard;