// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// function Submit(e)
// {
//   const [itemName, setitemName] = useState("");
//   const [itemCategory,setitemCategory] = useState("");
//   const [description,setdescription] = useState("");
//   const [contactName,setcontactName] = useState("");
//   const [contactEmail,setcontactEmail] = useState("");
//   const [itemDate,setitemDate] = useState("");
//   const [itemLocation,setitemLocation] = useState("");
//   const [itemTime,setitemTime] = useState("");
//   const [phoneNumber,setphoneNumber] = useState("");
// }
function App() {

    const [itemName, setitemName] = useState("");
    const [itemCategory,setitemCategory] = useState("");
    const [description,setdescription] = useState("");
    const [contactName,setcontactName] = useState("");
    const [contactEmail,setcontactEmail] = useState("");
    const [itemDate,setitemDate] = useState("");
    const [itemLocation,setitemLocation] = useState("");
    const [itemTime,setitemTime] = useState("");
    const [phoneNumber,setphoneNumber] = useState("");

    return (
    <div>
      <div className = "main">  
        <div className="form-container">
          <h2>LOST ITEM FORM</h2>
          <form id="lost-item-form">

            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="item-name" name="item-name" required value={itemName} onChange={e => setitemName(e.target.value)}/>
      
            <label htmlFor="item-category"  >Item Category:</label>
            
            <select id="item-category " name="item-category" required style={{ width: '95%' }} value={itemCategory} onChange={e => setitemCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="Electronics">Electronics(Phone/Laptop/Tablet/Earphone)</option>
              <option value="Clothing">Clothing(Cap/Others)</option>
              <option value="Jewelry">Jewelry(Ring/Necklace)</option>
              <option value="Books">Books(Notebooks/Textbooks/Others)</option>
              <option value="Other">Personal Belongings(Bag/Bottle/Wallet/Keys/Specs/Watch/Others)</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="item-location">Location:</label>
            <input type="text" id="item-location text-color" name="item-location" required value={itemLocation} onChange={e => setitemLocation(e.target.value)}/>
            
      
            <label htmlFor="item-date">Date:</label>
            <input type="date" id="item-date text-color" name="item-date" required value={itemDate} onChange={e => setitemDate(e.target.value)}/>
            
            <label htmlFor="item-time">Time:</label>
            <input type="time" id="item-time" name="item-time" required value={itemTime} onChange={e => setitemTime(e.target.value)}/>
            
            <label htmlFor="description">Description:</label>
            <textarea id="description"  name="description" rows="5" required style={{ width: '95%' }} value={description} onChange={e => setdescription(e.target.value)}></textarea> 
      
            <h2>YOUR INFORMATION</h2>
      
            <label htmlFor="contact-name">Your Name:</label>
            <input type="text" id="contact-name" name="contact-name" required value={contactName} onChange={e => setcontactName(e.target.value)}/>
      
            <label htmlFor="phone-number">Your Phone Number:</label>
            <input type="number" id="phone-number" name="phone-number" required value={phoneNumber} onChange={e => setphoneNumber(e.target.value)}/>
      
            <label htmlFor="contact-email">Your Email:</label>
            <input type="email" id="contact-email" name="contact-email" required value={contactEmail} onChange={e => setcontactEmail(e.target.value)}/>
            <div className = "sub">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div> 
      </div>  
    </div>  

  

  
);
}


export default App;
   