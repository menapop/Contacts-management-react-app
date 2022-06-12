 import useSetState from '../CustomHooks/UseSetState.js';
 import {useNavigate} from 'react-router-dom'; 
 const AddContact = (props) => {
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    props.addContactHandler(state);
  
    setState({ name: "", email: "" });
    
      navigate('/') ;

  
   
  };
  
  const initialState = {
        name:'',
        email:'',
      }

   const [state,setState] = useSetState (initialState)
   
   const handleChange = (event) =>{
    setState ({[event.target.name] : event.target.value}) ;
   }
 
    return (
        <div className="ui main">
          <h2>Add Contact</h2>
          <form className="ui form" onSubmit={add} >
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={ handleChange}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={ handleChange}
              />
            </div>
            <button className="ui button blue">Add</button>
          </form>
        </div>
    );
}

export default AddContact ;