import Card from "./Card"
import './CardSection.css'
import igure from '../assets/igure.png'
import igure2 from '../assets/igure2.png'
import igure3 from '../assets/igure3.png'
import igure4  from '../assets/igure4.png'

const CardSection=()=>{
    return (
      <section className="cardSection">
        <h3>WOMEN’S FASHION</h3>
        <p>Shop our new arrivals from established brands</p>
        <div className="cardsContainer">
          <div className="Card">
            <img src={igure} alt="igure" />
            <Card
              title="IGURE"
              description="GREEN MUSCLE FIT POLO SHIRT"
              oldCardPrice="$229.00"
              newCardPrice="$129.00"
            />
          </div>
          <div className="Card">
            <img src={igure2} alt="igure" />
            <Card
              title="IGURE"
              description="GREEN MUSCLE FIT POLO SHIRT"
              oldCardPrice="$229.00"
              newCardPrice="$129.00"
            />
          </div>

          <div className="Card">
            <img src={igure3} alt="igure" />
            <Card
              title="IGURE"
              description="GREEN MUSCLE FIT POLO SHIRT"
              oldCardPrice="$229.00"
              newCardPrice="$129.00"
            />
          </div>
       <div className="Card">
            <img src={igure4} alt="igure" />
            <Card
              title="IGURE"
              description="GREEN MUSCLE FIT POLO SHIRT"
              oldCardPrice="$229.00"
              newCardPrice="$129.00"
            />
          </div>
        </div>
      </section>
    );
}
export default CardSection