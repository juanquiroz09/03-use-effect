import React, { useState, useEffect } from "react";

function AjaxComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  //petición sin async y await
  const getUsersFetch = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then(
        (response_final) => {
          setUsers(response_final.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  //petición con async y await
  const getUsersFetchAW = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrors(error.message);
      }
    }, 2000);
  };

  useEffect(() => {
    //getUsersFetch();
    getUsersFetchAW();
  }, []);


if (errors !== "") {
  return(
    <div className="errors">
      {errors}

    </div>
  );
  //condicional con return cuando esta crgando los datos
}else if (loading === true) {
    return (
    <div className="loading">
      Cargando datos...
      </div>
      );
  } else if(loading == false && errors === ""){
    //return principal cuando todo a ido bien
    return (
      <div>
        <h1>Listado de Usuarios</h1>
        <ol>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <img src={user.avatar} width="40"></img>&nbsp;{user.first_name}
                &nbsp;{user.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
export default AjaxComponent;
