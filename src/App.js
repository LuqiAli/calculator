import React from 'react';
import './index.css';
import Total from './Total';
import Button from './Button';

const numbers = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "/", "0", "=", "<"]

function App() {

  const [total, setTotal] = React.useState("")
  
  function returnValue(value) {

    if (total === "" && isOperator(value)) {
      return
    }

    if (value === "=") {
      e()
    } else if (value === "<") {
      removeLast()
    } else {
      setTotal(prevTotal => prevTotal + value)
    }

  }

  function removeLast() {
    setTotal(prevTotal => prevTotal.replace(prevTotal[prevTotal.length - 1], ""))
  }
  

  function isOperator(value) {
    if (value === "+" || value === "-" || value === "/" || value === "*") {
      return true
    } else {
      return false
    }
  }

  function e() {

    if (isOperator(total[total.length - 1 ])) {
      return
    } else {
      console.log("r")
      let newTotal = eval(total)
      setTotal(newTotal.toString())
    }
    
  }
  
  const buttonValues = numbers.map(num => <Button
              value={num}
              returnValue={returnValue}
              />)
  return (
    <main>
      <Total value={total}/>
      <div className='buttons'>
        {buttonValues}
      </div>
    </main>
  );
}

export default App;
