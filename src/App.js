import React, { useState } from 'react';
import Button from './Button';
import Keypad from './Keypad';
import Display from './Display';
import './App.css';

function bark(input){
  console.log("------→"+input)
}

function App() {
  
  //used to store calculator results
  const [data, setData] = useState(0)

  //function to add together any ints provided to it and return it as a string
  const calculate = () => {
    const result = eval(data) //dangerous! has huge security vulnerabilities. meant for demo only. 
    {
      //modifies the value of 'data'
      setData(result)
    }
  }

  //click function to handle everything the calculator throws at it
  const handleClick = e => {
    
    const value = e.target.getAttribute('data-value');
    switch(value) {
        case 'Clear':
            setData("");  //clear current data from the calculator
            break;
        case 'equal':
            calculate();  //fire the calculate function above
            break;
        default:
            setData(data + value); //add whatever is input to the current data in the calculator
    }
}

  return (
    <div className="Calculator">
    
      <Display data = {data} />
      <Keypad>
        <Button onClick={(event) => handleClick(event)} label="C" value = "Clear" />
        <Button onClick={(event) => handleClick(event)} label="7" value = "7" />
        <Button onClick={(event) => handleClick(event)} label="4" value="4" />
        <Button onClick={(event) => handleClick(event)} label="1" value="1" />
        <Button onClick={(event) => handleClick(event)} label="0" value="0" />

        <Button onClick={(event) => handleClick(event)} label="÷" value="/" />
        <Button onClick={(event) => handleClick(event)} label="8" value="8" />
        <Button onClick={(event) => handleClick(event)} label="5" value="5" />
        <Button onClick={(event) => handleClick(event)} label="2" value="2" />
        <Button onClick={(event) => handleClick(event)} label="." value="." />

        <Button onClick={(event) => handleClick(event)} label="x" value="*" />
        <Button onClick={(event) => handleClick(event)} label="9" value="9" />
        <Button onClick={(event) => handleClick(event)} label="6" value="6" />
        <Button onClick={(event) => handleClick(event)} label="3" value="3" />
        <Button label="" value="null" />

        <Button onClick={(event) => handleClick(event)} label="-" value="-" />
        <Button onClick={(event) => handleClick(event)} label="+" size="2" value="+" />
        <Button onClick={(event) => handleClick(event)} label="=" size="2" value="equal" />
      </Keypad>
    </div>
  );
}

export default App;
