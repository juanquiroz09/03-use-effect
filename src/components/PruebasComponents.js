import React, {useEffect, useState} from 'react'

const PruebasComponents = () => {
//Estados  
const [user, setUser] = useState("Juan");
const [date, setDate] = useState("01-01-1998");
const [cont, setCont] = useState(0);

const modUser = (e) => {
    setUser(e.target.value);
}
const changeDate = e => {
  setDate(Date.now());
}

//Use Effect
//Solo se ejecuta una vez
useEffect(()=>{
  console.log("has cargado el componente")
},[]);
//Se ejecuta solo si cambio usuario
useEffect(()=>{
  setCont(cont + 1);
  console.log("has modificado el usuario " + cont)
},[user]);
  return (
    <div>
        <h1>UseEffect</h1>
        <strong className={cont >= 10 ? 'label label-green' : 'label'}>{user}</strong>
        <strong>{date}</strong>
        <p>
          <input type="text" onChange={modUser} placeholder="Cambia el Nombre"/>
        </p>
        <button onClick={changeDate}>Cambiar Fecha</button>

    </div>
  )
}

export default PruebasComponents