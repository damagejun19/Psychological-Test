import React from "react";
import { Route } from 'react-router-dom';
import "./App.css";
import Home from "./Home.js"
import Test from "./Test.js"
import Result from "./Result.js"

function App() {

function Header() {
  return null;
}

function Name(props) {
  return null;
}


// function handleClick(e) {
//   e.preventDefault();
//   console.log('The link was clicked.');
//   alert('검사를 시작합니다.')
// }
export default function App() {
  // const [username, setUsername] = useState("");
  const [user, setUser] = useState({username : ""});
  const [radio, setRadio] = useState("");
  const onChangeUser = (e) => {
      setUser({...user,[e.target.name] : e.target.value})
      
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user, radio);
    if(user.username.length === 0){
      alert('이름을 입력해주세요')
    } else if(radio.length === 0){
      alert('성별을 체크해주세요')
    } else {
      
    }
  }
  return (
    <div className="App">
      <Route path="/" exact={true} component={Home} />
      <Route path="/Test" component={Test} />
      <Route path="/Result" component={Result} />
    </div>
  );
}
export default App
