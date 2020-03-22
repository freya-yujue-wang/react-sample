import React,{useState} from "react";
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: 'Ed', message:"This a random tweet"},
    {name: "PupuYan", message:"This a new tweet"},
    {name: "Mosh", message:"This a gggg tweet"}
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  //const counter = 0;
  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}

      <h1 className={isRed ? 'red' : " "}>Change my color!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      <Tweet name = "Pupu yan" message="This a random tweet"/>
      <Tweet name = "Tao yan" message="This a new tweet"/>
      <Tweet name = "Yujue Wang" message="This a great tweet"/>
      <Tweet name = "Mosh" message="This a nwe class tweet"/>
    </div>
  );

}

export default App;