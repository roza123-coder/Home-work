import './Card.css'

const Card=({title, description, oldCardPrice, newCardPrice})=>{
    return (<div>
        <p className="cardTitle">{title}</p>
        <h4 className="cardDescription">{description}</h4>
        <span className="oldCardPrice">{oldCardPrice}  </span>
        <span className='newCardPrice'>{newCardPrice}</span>
    </div>)
}
export default Card