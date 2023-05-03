import React, { useEffect, useState } from "react";
import "./Users.scss";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import filter from "../../images/filter.png";

type Props = {};

const Users = (props: Props) => {
  const [users, setUsers] = useState([])
  
  const fetchUserData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div style={{ background: "inherit" }}>
      Users
      <div className="info">
        <div className="info-container">
          <img src={icon4} alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src={icon1} alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src={icon2} alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src={icon3} alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
      </div>

      <div className="App">
      <table>
        <thead>
          <th>Organization <img src={filter}/></th>
          <th>Username <img src={filter}/></th>
          <th>Email <img src={filter}/></th>
          <th>Phone Number <img src={filter}/></th>
          <th>Date Joined <img src={filter}/></th>
          <th>Status <img src={filter}/></th>
          <th>  ''</th>
        </thead>
          {
            users.map((curUser)=> {
              const {orgName,userName,email,phoneNumber,createdAt,lastActiveDate} = curUser;

              return(
                 <tr>
                <td>{orgName}</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{createdAt}</td>
                <td></td>
              </tr>
              )
             
            })
          }

            <tr>
              <td>adsd</td>
              <td>sdsdd</td>
              <td>sddsds</td>
              <td>sddsds</td>
              <td>sddsds</td>
              <td>sddsds</td>
              <td>sddsds</td>
            </tr>
            
        
      </table>
    </div>

      
    </div>
  );
};

export default Users;
