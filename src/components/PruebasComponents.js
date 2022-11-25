import React, {useState} from 'react'

const PruebasComponents = () => {
const [user, setUser] = useState("Juan");
const modUser = (e) => {
    setUser(e.target.value);
}
  return (
    <div>
        <h1>UseEffect</h1>
        <strong className='label label-green'>{user}</strong>
        <form>
          <input type="text" onChange={modUser} placeholder="Cambia el Nombre"/>
        </form>

    </div>
  )
}

export default PruebasComponents