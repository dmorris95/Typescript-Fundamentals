import React from 'react';
import './App.css';
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

function App() {

  const greeting: string = "Hello Typescript"

  const numberList: number[] = [5, 10, 15]

  function calculateSum(a: number, b: number) {
    return a + b
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <p>{numberList[0]}</p>
      <p>{numberList[1]}</p>
      <p>{numberList[2]}</p>
      <h4>The sum of {numberList[0]} and {numberList[2]} is: {calculateSum(numberList[0], numberList[2])}</h4>

      <h2>Colors</h2>
      <ColorList />   
      <h2>Numbers</h2>
      <EvenNumbers />
      <UserList /> 
    </div>
  );
}

export default App;
