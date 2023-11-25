import React from 'react'
import phto from "../Static/messi.jpeg"
import "../../static/globals.css"

export default function Table() {
  return (
    <div className='bg-white mt-1 mb-4 border-circle'>
    <div class="pt-1 table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"> <input type="checkbox"  value="Bike"/></th>
          <th scope="col">Photo</th>
          <th scope="col" className='text-justify'>UserName|Name</th>
          <th scope="col">ProfileLink</th>
          <th scope="col">Joining Date</th>
          <th scope="col">Location</th>
          <th scope="col">Verified</th>
          <th scope="col">Follower</th>
          <th scope="col">Following</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><input type="checkbox"  value="Bike"/></th>
          <td><img src={phto} width="45px" height="45px"/></td>
          <td> <div className="d-flex">
            <div className="leftName ml-1 mr-1">@janedoe</div>
            <div>Jane Den Doe</div>
          </div>
          <div>
            Thank You #ViratKohli for giving <br/>us Mohammad Siraj 🙏🏻
          </div>
          </td>
          <td>
            <a href='https://twitter.com/SaraAhmad0077/status/1639867677429596161'>
                https://twitter.com/SaraAhmad0077/status/1639867677429596161</a>
                </td>
          <td>28/03/2023</td>
          <td>India</td>
          <td>No</td>
          <td>2678</td>
          <td>40</td>
         
        </tr>
        <tr>
          <th scope="row"><input type="checkbox"  value="Bike"/></th>
          <td><img src={phto} width="45px" height="45px"/></td>
          <td> <div className="d-flex">
            <div className="leftName ml-1 mr-1">@janedoe</div>
            <div>Jane Den Doe</div>
          </div>
          <div>
            Thank You #ViratKohli for giving <br/>us Mohammad Siraj 🙏🏻
          </div>
          </td>
          <td>
            <a href='https://twitter.com/SaraAhmad0077/status/1639867677429596161'>
                https://twitter.com/SaraAhmad0077/status/1639867677429596161</a>
                </td>
          <td>28/03/2023</td>
          <td>India</td>
          <td>No</td>
          <td>2678</td>
          <td>40</td>
       
        </tr>
        <tr>
          <th scope="row">
            <input type="checkbox"  value="Bike"/>
            </th>
          <td><img src={phto} width="45px" height="45px"/></td>
          <td> <div className="d-flex">
            <div className="leftName ml-1 mr-1">@janedoe</div>
            <div>Jane Den Doe</div>
          </div>
          <div>
            Thank You #ViratKohli for giving <br/>us Mohammad Siraj 🙏🏻
          </div>
          </td>
          <td>
            <a href='https://twitter.com/SaraAhmad0077/status/1639867677429596161'>
                https://twitter.com/SaraAhmad0077/status/1639867677429596161</a>
                </td>
          <td>28/03/2023</td>
          <td>India</td>
          <td>No</td>
          <td>2678</td>
          <td>40</td>
         
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  )
}
