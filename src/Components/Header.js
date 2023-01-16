import React from 'react'
import '../Css/Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='HeaderGroup'>
            <a href='#'><img src={require('../Images/slack.png')} width='30'></img></a>
            <a href='#'>Option1</a>
            <a href='#'>Option2</a>
            <a href='#'>Option3</a>
            <a href='#'><button>Button</button></a>
        </div>
    </div>
  )
}

export default Header