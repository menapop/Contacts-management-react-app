import Header  from './Components/Header';
import './App.css';
import { v4 as uuid} from 'uuid';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import ContactList from './Components/ContactList';
import AddContact from './Components/AddContact' ;
import { useEffect, useState } from 'react';
import EditContact from './Components/EditContact';
function App() {

  const addContactHandler =  (contact) =>{
     fetch('http://localhost:3006/contacts',{
      method:'POST',
      body: JSON.stringify({
        id: uuid(),
        name: contact.name,
        email: contact.email
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setContacts([...contacts, data]);
    });
    
  }
  const editContactHandler =  (contact) =>{
    fetch('http://localhost:3006/contacts/'+ contact.id,{
     method:'PUT',
     body: JSON.stringify({
       id: contact.id,
       name: contact.name,
       email: contact.email
   }),
   headers: {
     "Content-type": "application/json; charset=UTF-8"
 }
   })
   .then(r=>r.json())
   .then(data=>{
    const { id } = data ;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...data } : contact;
      })
    );
   });
   
 }

 const removeContactHandler =  (id) => {
  fetch('http://localhost:3006/contacts/'+id,{
    method:'DELETE',
     headers: {
    "Content-type": "application/json; charset=UTF-8"
}
  })
  .then(r=>r.json())
  .then(d=>{
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
      });
    setContacts(newContactList);
  })
};
  const [contacts, setContacts] = useState([]);
  

  const getContacts = () => {
    fetch('http://localhost:3006/contacts')
    .then(r=>r.json())
    .then(data=>{
      setContacts(data)
    })
  }


  useEffect(()=>{
    getContacts() ;
  },[])


  return (
    <div className="ui container">
      <Header />
      
        <BrowserRouter>
        <Routes>
           <Route path="/"  element={<ContactList  contacts = {contacts}  deleteHandler={removeContactHandler}/>} />
           <Route path="/addContact"   element={<AddContact  addContactHandler={addContactHandler} />} />
           <Route path="/editContact/:id"   element={<EditContact  editContactHandler={editContactHandler} />} />
        </Routes>
       </BrowserRouter>
       
         
     
    </div>
  );
}

export default App;
