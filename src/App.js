import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/chentze02">chentzen</a>
    </div>
  )
}

// const App = () => {
//   const name = 'Peter'
//   const age = 10
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" age={3+10} />
//       <Hello name="Daisy" age={4+16}/>
//       <Hello name={name} age={age}/>
//       </div> 
//   )
// }
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
export default App