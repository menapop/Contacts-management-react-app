import useSetState from '../CustomHooks/UseSetState.js';
import {useNavigate, useParams} from 'react-router-dom'; 
import { useEffect } from 'react';
import { APIENDPOINT } from '../APIENDPOINT.js';
const EditContact = (props) => {

 const navigate = useNavigate();
 const initialState = {
    id:'',
    name:'',
    email:'',
  }
 const [state,setState] = useSetState (initialState);
 const {id } = useParams();

 const Update = (e) => {
   e.preventDefault();
   if (state.name === "" || state.email === "") {
     alert("ALl the fields are mandatory!");
     return;
   }
   console.log(state)
   props.editContactHandler(state);
   navigate('/') ;
 };
 
  const handleChange = (event) =>{
   setState ({[event.target.name] : event.target.value}) ;
  }

  useEffect(()=>{
    fetch(`${APIENDPOINT}contacts/${id}`)
    .then(r=>r.json())
    .then (data=>setState(data))
  },[])

   return (
       <div className="ui main">
         <h2>Edit Contact</h2>
         <form className="ui form" onSubmit={Update} >
           <div className="field">
             <label>Name</label>
             <input
               type="text"
               name="name"
               placeholder="Name"
               value={state.name}
               onChange={handleChange}
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
           <button className="ui button blue">Edit</button>
         </form>
       </div>
   );
}

export default EditContact ;