import React, { useEffect, useState } from "react";
import "./Users.scss";

type Props = {};

const Users = (props: Props) => {
  const [users, setUsers] = useState([])
  
  const fetchUserData = () => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then(response => {

        console.log(response);
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
          <img src="" alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src="" alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src="" alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
        <div className="info-container">
          <img src="" alt="user" />
          <p>users</p>
          <p>amount of users</p>
        </div>
      </div>

      
    </div>
  );
};

export default Users;
