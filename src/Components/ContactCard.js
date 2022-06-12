
import {Link} from 'react-router-dom'
import user from '../images/user.jpg' ;

const ContactCard = (props) => {
  const {id ,name ,email} = props.contact ;
  return (
    <div className="item">
    <img className="ui avatar image" src={user} alt="user" />
    <div className="content">
      <p>
        <div className="header">{name}</div>
        <div>{email}</div>
      </p>
    </div>
    <i
      className="trash alternate outline icon"
      style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
      onClick={() => props.deleteHandler(id)}
    ></i>
    <Link to={`/editContact/${id}`}>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px" }}
      ></i>
    </Link>
  </div>
  )
}

export default ContactCard ; 