import './App.css';
import { useState } from "react";
import Options from './options/options';

function App() {

  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [bottles, setBottles] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let kännissä = " Et ole ajokunnossa."
    let promilles = 0;
    let burn = weight / 10;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let gramsLeft = grams - (burn * time);

    if (gender === "male") {
      promilles = gramsLeft / (weight * 0.7);
    }
    else {
      promilles = gramsLeft / (weight * 0.6);
    }
    if (promilles < 0) {
      setResult(0);
    }
    if(promilles > 0.5){
      setResult(promilles.toFixed(2) + kännissä);
    }
    else {
      setResult(promilles.toFixed(2));
    }
  }

  return (
    <>
      <h3>Blood alcohol level calculator</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight: </label>
          <input name="weight" type="number" onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles: </label>
          <select name="bottles" type="number" onChange={e => setBottles(e.target.value)}>
            <Options />
          </select>
        </div>
        <div>
          <label>Time: </label>
          <select name="time" type="number" onChange={e => setTime(e.target.value)}>
            <Options />
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <output>{result}</output>
        </div>
        <button>Calculate</button>
      </form>
    </>
  )
}

export default App;
