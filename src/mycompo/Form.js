import React, { useState, useEffect } from "react";

function Form() {

 
  const [user ,setuser]=useState({
    firstName:"",email:"",phone:"",lastName:"",descrip:"",started:"",ended:"",username:""
  })
   const [data,setData] = useState([]);
   const [checkedBoxes, setCheckedBoxes] = useState([]);
  useEffect(()=> localStorage.removeItem("users"),[])
console.log(data)
  const handleSubmit = (event) => {
    event.preventDefault();
user.checkBoxValue = checkedBoxes;
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    setData(users);
    localStorage.setItem("users", JSON.stringify(users));
    
  if (checkedBoxes.length >= 2) {
    
      console.log('Form submitted with selected checkboxes:', checkedBoxes);
      setuser({firstName:"",email:"",phone:"",lastName:"",descrip:"",started:"",ended:"",username:""
    })
      setCheckedBoxes([]);
    } else {
      alert('Please select at least 2 checkboxes');
    }};
  

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckedBoxes((prevState) => [...prevState, name]);
    } else {
      setCheckedBoxes((prevState) => prevState.filter((box) => box !== name));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
    <div   className="col-md-6" >
    <form onSubmit={handleSubmit} >
      <div >
          <h1>
            Fill Your Details
          </h1>
        <label htmlFor="firstName">First Name :</label>
        <input className="mt-2"
          type="text"
          id="firstName"
          value={user.firstName}
          onChange={(event) => setuser({...user, firstName: event.target.value})}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input className="mt-2"
          type="text"
          id="lastName"
          value={user.lastName}
          onChange={(event) => setuser({...user, lastName:event.target.value})}
        />
      </div>
      <div>
        <label htmlFor="username">User Name :</label>
        <input className="mt-2"
          type="text"
          id="username"
          value={user.username}
          onChange={(event) => setuser({...user, username: event.target.value.toLowerCase().replace(/\s/g, "").replace(/[^\w\s]/gi, "")})}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone No :</label>
        <input className="mt-2"
          type="tel"
          id="phone"
          value={user.phone}
          onChange={(event) => setuser({...user,phone:event.target.value})}
          pattern="[0-9]{10,}"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input className="mt-2"
          type="email"
          id="email"
          value={user.email}
          onChange={(event) => setuser({...user,email:event.target.value})}
          required
        />
      </div>
      
       <h4>Select Your Skills (minimum 2 feild required)</h4> 
      <label>
        <input type="checkbox"  name="HTML" checked={checkedBoxes.includes('HTML')} onChange={handleCheckboxChange} />
       HTML
      </label>
      <br />
      <label>
        <input type="checkbox" name="CSS" checked={checkedBoxes.includes('CSS')} onChange={handleCheckboxChange} />
        CSS
      </label>
      <br />
      <label>
        <input type="checkbox" name="REACT JS" checked={checkedBoxes.includes('REACT JS')} onChange={handleCheckboxChange} />
        REACT JS
      </label>
      <br />
      <label>
        <input type="checkbox" name="JQUERY" checked={checkedBoxes.includes('JQUERY')} onChange={handleCheckboxChange} />
        JQUERY
      </label>
      <br />
      <label>
        <input type="checkbox" name="JAVASCRIPT" checked={checkedBoxes.includes('JAVASCRIPT')} onChange={handleCheckboxChange} />
        JAVASCRIPT
      </label>
      <br />
      <label>
        <input type="checkbox" name="TYPESCRIPT" checked={checkedBoxes.includes('TYPESCRIPT')} onChange={handleCheckboxChange} />
        TYPESCRIPT
      </label>
    
      <br />
     
      <div className='mt-3'>
        <label htmlFor="">Experience : </label>
        <span>From</span>
          <input required type="date" name="" id="" value={user.started}  onChange={(event) => setuser({...user,started:event.target.value})}/>
          <span> to </span> 
          <input required type="date" name="" id=""  value={user.ended}  onChange={(event) => setuser({...user,ended:event.target.value})}/>
      </div>
      <div className='mt-3'>
        <label htmlFor="" >Description</label>
        <textarea name="" value={user.descrip} required id="" cols="30" rows="5"  onChange={(event) => setuser({...user,descrip:event.target.value})}></textarea>

      </div>
         <button type="submit">Submit</button>
        
        
    </form>
    </div>
    <div className="col-md-6"  >
     <table className="table table-dark table-bordered border-light word-wrap pt-3">
     <tr>
         <td>
             firstName
         </td>
         <td>
             lastName
         </td>
         <td>
         username
         </td>
         <td>
         phone
         </td>
         <td>
         email
         </td>
         <td>
         checkbox
         </td>
         <td>
         description
         </td>
     </tr>
     {data.map((user)=>{
      return <tr>
         <td>
            {user.firstName}
         </td>
         <td>
            {user.lastName}
         </td>
         <td>
         {user.username}
         </td>
         <td>
         {user.phone}
         </td>
         <td>
         {user.email}
         </td>
         <td>
         {user.checkBoxValue.map((item)=> item)}
         </td>
         <td>
         {user.descrip}
         </td>
     </tr>
})}
    </table>
    </div>
 </div>
</div>
  );
}

export default Form;