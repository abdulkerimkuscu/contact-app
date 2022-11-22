import {useState , useEffect} from 'react'
import Lists from './Lists'
import Form from './Form'
function Contacts() {
    const [contacts, setContacts] = useState([{
        fullName: "maho",
        phoneNum: 3424
    },
    {
        fullName: "xalo",
        phoneNum: 24124
    }
]);

    useEffect(() => {
        
    }, [contacts])
    
  return (
    <div id='container'>
        <h1>Telefon Rehberi</h1>
    <Lists contacts = {contacts}/>
    <Form addContact = {setContacts} contacts = {contacts} />
    </div>
   
  )
}

export default Contacts