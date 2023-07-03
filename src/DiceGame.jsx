import DieRoll from "./DieRoll"
import "./DiceGame.css";
import DiceRule from "./DiceRule"
import Copyrights from "./Copyrights";
export default function DiceGame(){

    return(
        <div className="DiceGame">
            <DiceRule />
            <DieRoll />
            <Copyrights />
        </div>
    )
}