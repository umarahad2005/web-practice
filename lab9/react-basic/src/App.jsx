import React from 'react'

import Task1 from './component/task1.jsx'
import Counter from './component/counter.jsx'
import './App.css'


const App = () => {
  return (<>
    <div style={{display:'flex'}}>
      <h1>Hello, React!</h1>
      <Task1 />
      <Task1 name="umar " age={25} sap="78954" />
      <Task1 name="ali " age={22} sap="12345" />
      <Task1 name="ahmed " age={23} sap="45678" />
      <Task1 />
    </div>
    <section>this is second section </section>
    <Counter />
      </>
  )
}

export default App
