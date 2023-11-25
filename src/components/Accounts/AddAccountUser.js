// import React, { useState } from "react";

// function AddAccountUser() {

//   const location = useLocation();
//   const { state } = location;

//   const [Name, setName] = useState("");
//   const [Email, setEmail] = useState("");
//   const [userPassword, setPassword] = useState("");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [groupId, setGroupId] = useState("");
//   const [userName, setUserName] = useState("");
//   const [groupName, setGroupName] = useState("");
 

  


//   return (
//     <div>
//       <div className="addGroupForm mt-1 normal-form">
//         <div className="formFlex mr-2 w-100 g-10 ">
//           <label htmlFor="groupName" className="formLabel">
//             Group{" "}
//           </label>
//           <select
//             name="region"
//             id="groupNameUser"
//             className="dropDown w-100"
//             onChange={handleGroupChange}
//           ></select>
//           <label htmlFor="name" className="formLabel">
//             Name
//           </label>
//           <input
//             type="text"
//             className="inputBox"
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <label htmlFor="userName" className="formLabel">
//             Username
//           </label>
//           <input
//             type="text"
//             className="inputBox"
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//           />
//           <label htmlFor="mail" className="formLabel">
//             Email
//           </label>
//           <input
//             type="text"
//             className="inputBox"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           <label htmlFor="password" className="formLabel">
//             Password
//           </label>
//           <input
//             type="text"
//             id="password"
//             className="inputBox"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           <label htmlFor="mobileNumber" className="formLabel">
//             Mobile Number
//           </label>
//           <input
//             type="text"
//             className="inputBox"
//             onChange={(e) => {
//               setMobileNumber(e.target.value);
//             }}
//           />
//           <button
//             className="btnColoured mt-2 mb-1 w-250"
//             onClick={handleUserSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddAccountUser;
import React, { useState } from "react";
import { postUserData } from "../../utils/functions";
import { useLocation } from "react-router";
import { errorPopup, successPopup, warningPopup, infoPopup } from "../../utils/popupMsg";
import { patchWithToken, postWithToken } from "../../utils/request";

function AddAccountUser() {
  const location = useLocation();
  const { state } = location;

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [groupId, setGroupId] = useState("64364fa16aeca819e2cc11f7");
  const [userName, setUserName] = useState("");
  const [groupName, setGroupName] = useState("Lucknow");
  const [account_type , setaccount_type] = useState("user")

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try { 
      const data = { Name, Email, userPassword, mobileNumber, groupId, userName, groupName , account_type};
      const response = await postWithToken( "accounts",data
      ); // Call the postUserData function from the utils/functions.js file
      console.log(response); // Log the response to the console for testing purposes
      successPopup("User added successfully!"); // Display a success message to the user
    } catch (error) {
      console.log(error); // Log any errors to the console for debugging purposes
      errorPopup("Error adding user!"); // Display an error message to the user
    }
  };


    const handleGroupChange = async (e) => {
      const groupId = e.target.value;
      const groupName = e.target.options[e.target.selectedIndex].text;
    
      try {
        // Make an HTTP request to the API to retrieve the group ID
        const response = await fetch(`groups/${groupId}`);
        const data = await response.json();
    
        // Update the state with the retrieved group ID
        setGroupId(data.groupId);
        setGroupName(groupName);
      } catch (error) {
        console.log(error);
        warningPopup("Error retrieving group ID!");
      }
    };


  return (
    <div>
      <div className="addGroupForm mt-1 normal-form">
        <div className="formFlex mr-2 w-100 g-10 ">
          <label htmlFor="groupName" className="formLabel">
            Group{" "}
          </label>
          <select
            name="region"
            id="groupNameUser"
            className="dropDown w-100"
            onChange={handleGroupChange}
          ></select>
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="userName" className="formLabel">
            Username
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label htmlFor="mail" className="formLabel">
            Email
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" className="formLabel">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="inputBox"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="mobileNumber" className="formLabel">
            Mobile Number
          </label>
          <input
            type="text"
            className="inputBox"
            onChange={(e) => {
              setMobileNumber(e.target.value);
            }}
          />
          
            
          <button
            className="btnColoured mt-2 mb-1 w-250"
            onClick={handleUserSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
  );
}

 export default AddAccountUser;