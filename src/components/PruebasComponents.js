import React, {useEffect, useState} from 'react'

const PruebasComponents = () => {
const [user, setUser] = useState("Juan");
const [date, setDate] = useState("01-01-1998");
const modUser = (e) => {
    setUser(e.target.value);
}
const changeDate = e => {
  setDate(Date.now());
}
//Solo se ejecuta una vez
useEffect(()=>{
  console.log("has cargado el componente")
},[]);
//Se ejecuta solo si cambio usuario
useEffect(()=>{
  console.log("has modificado el usuario")
},[user]);
  return (
    <div>
        <h1>UseEffect</h1>
        <strong className='label label-green'>{user}</strong>
        <strong>{date}</strong>
        <p>
          <input type="text" onChange={modUser} placeholder="Cambia el Nombre"/>
        </p>
        <button onClick={changeDate}>Cambiar Fecha</button>

    </div>
  )
}

export default PruebasComponents