import './Card.css';
import { Link } from "react-router-dom";
function Card({title, description, link}) {
  return (
    <div className='card'>
    <h2 className='card-title'>{title} </h2>
    <p className='card-description'>{description}</p>
    <a className='card-link' href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
    </div>
  );
}

export default Card;
