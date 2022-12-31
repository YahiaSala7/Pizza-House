import React, { useState }  from 'react'
import './table.css'
import '../../general.css'
function TableForm() {
const [name,setName]=useState({name:"",email:""})
    return (
    <div className='table' id='Table'>
<div className="container">
<form>
    <div className='row-one'>
        <input 
        type="text" 
        placeholder='Enter Your Name*'
        required
        value={name.name} 
        onChange={e =>setName({...name,name:e.target.value})} />
    </div>
    <div className='row-one'>
        <input 
        type="email" 
        placeholder='Enter Your Email*'
        required
        value={name.email} 
        onChange={e =>setName({...name,email:e.target.value})} />
    </div>
    <div className='row-one'>
        <select name="Service">
                <option value="Dine-in" selected>Dine-in</option>
                <option value="Order">Order</option>
                <option value="Event Catering">Event Catering</option>
        </select>
    </div>
    <div className='message'>
        <textarea placeholder='Write Your What You Want,And If it Order Please Type Your Addresse'></textarea>
    </div>
    <div className='submit'>
        <input 
        type="submit" 
        placeholder=''
        required
        value="Send Message "
           />
        <p>
        Please reserve your table at least 1 day in advance.
        </p>
    </div>
</form>
</div>

    </div>
  )
}

export default TableForm