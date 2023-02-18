// import the useState hook from react
import { useState } from "react";

function GameRules() {
    // create a hook state variable that we will use to display or hide the modal
    // initalize this varibale with the boolean false, as we do not want the modal to show initially
    const [rulesModal, setRulesModal] = useState(false);

    // when the "See Rules" button, the overlay, or the close button is clicked this function will run
    // the toggleRulesModal will set the rulesModal varibale´s value to its current opposite
    const toggleRulesModal = () => {
        setRulesModal(!rulesModal);
    }

    // the component returns the See Rules button, and if the rulesModal varibale is true 
    // it will render the modal content too. The modal content contains a title, a list, and a close button
    return (
        <div>
            <button onClick={toggleRulesModal} className="rules-btn">See Rules</button>
            {rulesModal && (
                <div className="rulesModal">
                    <div className="overlay" onClick={toggleRulesModal}></div>
                    <div className="rulesModal-content">
                        <p className="rulesModal-title">Hangman Game Rules</p>
                        <ul>
                            <li>Hangman is a word guessing game.</li>
                            <li>The goal is to figure out an unknown word by guessing letters.</li>
                            <li>Each incorrect guess brings you closer to being "hanged" and losing the game.</li>
                            <li>The game allows for 10 errors before you will lose it.</li>
                            <li>You win when you guessed the correct word.</li>
                            <li>You can restart the game by clicking on the "Restart" button.</li>
                        </ul>
                        <button onClick={toggleRulesModal} className="close-btn">CLOSE</button>
                    </div>
                </div>
            )}
        </div>
    )
}

// export the GameRules component
export default GameRules;