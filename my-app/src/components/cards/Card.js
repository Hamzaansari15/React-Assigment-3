import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
import { FaRegHeart } from "react-icons/fa";
const Cards = (props) => {
    return(
        <div>
           <div className='main_card'>
            <div className='card'>
              <div className='card_image'>
                <img src={props.image}/>
              </div>
                <p className='featured'>Featured</p>
              <div className= 'card_title card_featured'>
               <div className='card_text'><div className='title'><p>{props.title} </p><i><FaRegHeart /></i></div>
               <h5><b>{props.price}</b></h5></div>
               <p className='address'>PCEHS,Karachi</p>
              </div>
            </div>
           </div>
        </div>
    )
}
export default Cards;