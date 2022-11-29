import React, { useEffect } from 'react'

const AvisoComponent = () => {
    useEffect(()=>{
        //cuando el componente se monta
        alert("El componente Aviso Component está montado");
        //cuando el componente se desmonta
        return () => {
            alert("Componente desmontado");
        };

    },[]);//Se ejecuta una vez porque le paso el array vacío
  return (
    <div>
        <h3>Saludos Juan ¿Que tal estas?</h3>
        <button onClick={e=>{alert("Bienvenido")}}>Mostrar Alerta</button>
    </div>
  )
}

export default AvisoComponent