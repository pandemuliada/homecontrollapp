import React, { useState } from 'react'

const Muliada = () => {
  const [name, setName] = useState('Pande Muliada')
  const [facebookLink, setFacebookLink] = useState('https://www.facebook.com/pande.muliada')
  const [githubLink, setGithubLink] = useState('https://github.com/pandemuliada')

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  }

  return (<div style={containerStyle}>
    <div>
      <h1>Hello, I'm <span style={{color: '#00D2D3'}}>{name}</span></h1>
      <p>I wanna be a professional developer</p>
      <p>This is my facebook link <a target="_blank" href={facebookLink} style={{textDecoration: 'none'}}>@pandemuliada</a></p>
      <p>This is my github profile link <a target="_blank" href={githubLink} style={{textDecoration: 'none'}}>@pandemuliada</a></p>
    </div>
  </div>)
}

export default Muliada