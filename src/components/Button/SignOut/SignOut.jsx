import React from 'react'
import "./Style/SignOut.css"
function SignOut({text, Icon}) {
  return (
    <div className='SignOUt'>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
  
}

export default SignOut