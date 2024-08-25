import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:khalillamharchi20@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:khalillamharchi20@gmail.com">khalillamharchi20@gmail.com</a>
        </div>
        <div>
        <a href="tel:+212667032005"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+212667032005">(+212) 667032005</a>
        </div>  
      </div>
      
    </Container>
  )
}