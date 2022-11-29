import React, { useState, useEffect } from 'react'

function AjaxComponent() {
  const [users, setUsers] = useState([]);

  const getUsersFetch = () => {
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then( 
        response_final => {
          setUsers(response_final.data)
        },
        error => {
          console.log(error);
        }
           )
  };

useEffect(()=>{
 getUsersFetch();
},[]);
  return (
    <div>
      <h1>Listado de Usuarios</h1>
      <ol>
        {
          users.map(user => {
            return <li key={user.id}>{user.first_name}&nbsp;{user.last_name}</li>
          })
        }
      </ol>
    </div>
  )
}

export default AjaxComponent