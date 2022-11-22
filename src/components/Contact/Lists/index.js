import {useState} from 'react'
import {} from "./style.css"
function Lists({contacts}) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes( filterText.toLowerCase())
        )
    })
    
  return (
    <div>
        <input value={filterText} placeholder="Filtrele" onChange={(e)=> setFilterText(e.target.value)}  />


       <ul className='list'>
        {filtered.map((contact, i)=>
            <li key={i} >
                <span>{contact.fullName}</span>
                <span>{contact.phoneNum}</span>
            </li>
        )}
       </ul>
        <p> Rehberdeki Toplam Kişi ({filtered.length})</p>
    </div>
  )
}

export default Lists