import {useState} from 'react'

function Form({addContact, contacts}) {

    const [form, setForm] = useState({fullName : "", phoneNum: ""})
    const onChangeInput = (e) =>{
        setForm({...form,[ e.target.name]: e.target.value});
    }
    const onSubmit = (e) =>{
        
        e.preventDefault();
        if(form.fullName === "" || form.phoneNum === ""){
            return false;
        }
        addContact([...contacts,form])
        
        setForm({fullName: "", phoneNum: "" })
    };
    
    
  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name="fullName" placeholder='İsim' onChange={onChangeInput} value= {form.fullName} />
        </div>
        <div>
        <input name="phoneNum" placeholder='Numara' onChange={onChangeInput} value= {form.phoneNum}/>
        </div>
        <div className='btn'>
        <button >Ekle</button> 
        <button>Sil</button>
        </div>
    </form>
  )
}

export default Form