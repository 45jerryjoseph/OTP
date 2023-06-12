import React, { useContext, useEffect, useState } from 'react'
import './dashboard.scss'
import { AuthContext } from './context/AuthContext ';
import axios from 'axios';
const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const {FirstName,LastName, Email } = user
    const [users, setUsers] = useState([])
    // console.log(users[0].FirstName);
    useEffect(()=>{
        const getList = async () => {
            try {
                const res = await axios.get(`/users/`);
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }

        getList();
    },[users])
    return (
        <>
            <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h1 style={{color: "blueviolet"}}>{Email}</h1>
                    <h2>Welcome <p style={{color:"red"}}>{FirstName}  {LastName} </p> this has been a successfull Login.</h2>
                    <h3>Here is your Dashboard</h3>
                </div>
                <h1>You can also associate with:</h1>
                <div className="panel-body">
                    <table className="table-latitude ">
                        {/* <caption>Employee Information</caption> */}
                        <thead>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>E-mail</td>
                        </thead>
                        <tbody >
                            {/* {users.map((user, i) => {
                                <tr key={i}>
                                    <th>{user.FirstName}</th>
                                    <td>{user.LastName}</td>
                                    <td>{user.Email}</td>
                                </tr>
                            })}; */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
</>
  )
}

export default Dashboard