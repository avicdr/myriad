import React from "react";
import Instagram from '../../../components/Static/Instagram.png';
import twitter from '../../../components/Static/TwitterLogo.png';

function ContactAdmin() {
  return (
    <div>
      <div>
        <div className="cont">
          <h6>Home / Contact Admin / Contact</h6>
                                                                                         
      <div className="d-flex justify-content-between"> 
      <h2 className="status">
            Contact
          </h2>
         <div className="p-3 d-flex justify-content-end">
          <a href="/instagram/contactadmin/contact"><img src={Instagram} className="px-2" /></a>
          <a href="/twitter/contactadmin/contact"><img src={twitter} className="px-2" /></a>
         </div>
        </div>

          
          <div className="formContainer">
            <h5 className="bold">Please share your feedback or contact system admin if you have any queries</h5>
            <div className="addGroupForm mt-1">
              <div className="formFlex">
                <label htmlFor="subject" className="formLabel">Subject*</label>
                <input type="text" className="inputBox" required/>
              </div>
            </div>
            <div className="textAreaFlex mt-1">
              <label htmlFor="details" className="formLabel">Details/Feedback*</label>
              <textarea
                name="details"
                id="details"
                cols="30"
                rows="10"
            required></textarea>
            </div>
            <button className="facebookbtnColoured mt-3 mb-1">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactAdmin;
