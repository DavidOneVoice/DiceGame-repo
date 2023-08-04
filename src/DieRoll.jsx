import { useState } from "react";
import "./DieRoll.css"
export default function DieRoll(){
const roll1 = Math.floor(Math.random() * 6) + 1;
const roll2 = Math.floor(Math.random() * 6) + 1;
const reRoll1 = Math.floor(Math.random() * 6) + 1;
const reRoll2 = Math.floor(Math.random() * 6) + 1;

const isWinner = roll1 === roll2;
const isWinner2 = reRoll1 === reRoll2;

const [roll, setRoll] = useState(roll1)
const [reroll, setReroll] = useState(roll2)

const [rollover, setRollover] = useState(reRoll1)
const [rerollover, setRerollover] = useState(reRoll2)

const getRoll1 = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    setRoll(roll1);
    setReroll(roll2);
};
const getRoll2 = () => {
    const reRoll1 = Math.floor(Math.random() * 6) + 1;
    const reRoll2 = Math.floor(Math.random() * 6) + 1;
    setRollover(reRoll1);
    setRerollover(reRoll2);
};

    return(
        <div className="DieRoll">
             <div className="p1">
                 <h1 style={{color: isWinner? "white" : "red"}}>PLAYER 1</h1>
                 <div className="score">
                    <h2 style={{color: isWinner? "white" : "red"}}>DIE 1: {roll1}</h2>
                    <h2 style={{color: isWinner? "white" : "red"}}>DIE 2: {roll2}</h2>
                </div>
                <button onClick={getRoll1}>ROLL DIE</button>
                {isWinner && <h3 style={{color:"white"}}>YOU WON!!! :)</h3>}
                {isWinner && <h4 style={{color:"white"}}>CONGRATULATIONS</h4>}
            </div>
            <div className="p2">
                 <h1 style={{color: isWinner2? "white" : "red"}}>PLAYER 2</h1>
                 <div className="score">
                    <h2 style={{color: isWinner2? "white" : "red"}}>DIE 1: {reRoll1}</h2>
                    <h2 style={{color: isWinner2? "white" : "red"}}>DIE 2: {reRoll2}</h2>
                 </div>
                 <button onClick={getRoll2}>ROLL DIE</button>
                {isWinner2 && <h3 style={{color:"white"}}>YOU WON!!! :)</h3>}
                {isWinner2 && <h4 style={{color:"white"}}>CONGRATULATIONS</h4>}
            </div>
        </div>
    )
}