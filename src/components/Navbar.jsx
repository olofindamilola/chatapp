import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Amila Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Dami</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar