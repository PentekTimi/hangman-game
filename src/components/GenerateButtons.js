// create a variable containing the letters of the alphabet
let alphabetString = "abcdefghijklmnopqrstuvwxyz";
// create an array out of the alphabet string
let alphabetArray = alphabetString.split("");

// the component returns a div with buttons made out of each letter in the alphabet
// the buttons gets disabled on a few conditions: if the button´s letter was added to the correctLetter, or wrongLetter array
// if the errorCount is 10 or if the game has been won
function GenerateButtons({correctLetter, wrongLetter, errorCount, gameStatusMessage}) {
    return (
        <div className="letterButtons">
            {alphabetArray.map((letter) => {
                return (
                <button 
                className="letterButton" 
                key={letter} 
                value={letter} id={letter} 
                disabled={correctLetter.includes(letter) || wrongLetter.includes(letter) || errorCount === 10 || gameStatusMessage === "You won!"}
                >
                {letter}
                </button>
                )
            })}
        </div>
    )
};

// export the GenerateButtons component
export default GenerateButtons;