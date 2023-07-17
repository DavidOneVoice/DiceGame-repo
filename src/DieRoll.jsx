import { useState } from "react";
import "./DieRoll.css"
export default function DieRoll(){
const roll1 = Math.floor(Math.random() * 6) + 1;
const roll2 = Math.floor(Math.random() * 6) + 1;
const isWinner = roll1 === roll2;
const [roll, setRoll] = useState(roll1)
const [reroll, setReroll] = useState(roll2)
const getRoll = () => {
    setRoll(roll1);
    setReroll(roll2);
};

    return(
        <div className="DieRoll">
             <div className="p1">
                 <h1 style={{color: isWinner? "white" : "red"}}>PLAYER 1</h1>
                 <h2 style={{color: isWinner? "white" : "red"}}>DIE 1: {roll}</h2>
                 <h2 style={{color: isWinner? "white" : "red"}}>DIE 2: {reroll}</h2>
                <button onClick={getRoll}>ROLL DIE</button>
                {isWinner && <h3 style={{color:"white"}}>YOU WON!!! :)</h3>}
                {isWinner && <h4 style={{color:"white"}}>CONGRATULATIONS</h4>}
            </div>
            <div className="p2">
                 <h1 style={{color: isWinner? "white" : "red"}}>PLAYER 2</h1>
                 <h2 style={{color: isWinner? "white" : "red"}}>DIE 1: {roll}</h2>
                 <h2 style={{color: isWinner? "white" : "red"}}>DIE 2: {reroll}</h2>
                <button onClick={getRoll}>ROLL DIE</button>
                {isWinner && <h3 style={{color:"white"}}>YOU WON!!! :)</h3>}
                {isWinner && <h4 style={{color:"white"}}>CONGRATULATIONS</h4>}
            </div>
        </div>
    )
}