import React from "react";

function User(){
    const users = [
        {id: 1, firstName: "Duane", lastName: "Watson"},
        {id: 2, firstName: "Duane", lastName: "Johnson"}
    ]
    const userHeadings = users.map(user =>{
        return <h3 key={user.id}>{user.firstName} {user.lastName}</h3>;
    })
    return userHeadings
}
export default User;
