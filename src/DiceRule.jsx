import "./DiceRule.css"
export default function DiceRule(){
    return(
        <div className="DiceRule">
            <h2>Dice Game</h2>
            <h4>Game Rule: Once a player rolls a Twin (e.g a 2-2, a 6-6), the player automatically wins.</h4>
            <p>Each player is to click the <b><i>Roll Die</i></b> button to play.</p>
        </div>
    )
}