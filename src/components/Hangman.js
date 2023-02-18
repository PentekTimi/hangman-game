// import the Header, Image, GenerateWord, GenerateButtons, GameRules and RestartGame components
import Header from "./Header";
import Image from "./Image";
import GenerateWord from "./GenerateWord";
import GenerateButtons from "./GenerateButtons";
import GameRules from "./GameRules";
import RestartGame from "./RestartGame";
// import the useState and useEffect hooks from react
import { useState, useEffect } from "react";

// save header details for the api in a variable
const options = {
   method: 'GET',
   headers: {
       'X-RapidAPI-Key': 'c2707099acmshd0b067686c0f807p1658e3jsn542d51185262',
       'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
   }
};

function Hangman() {
    // create a usestate hook to save the fetched word 
    const [word, setWord] = useState("");
    // create a variable to manage the state of the loading word (wether it finished fetching it or not)
    const [isLoading, setLoading] = useState(false);
    // create a state variable correctLetter, which will hold all correct letter guesses in an array
    const [correctLetter, setCorrectLetter] = useState([]);
    // create a state variable for all the wrong letter guesses that will be added to the wrongLetter array
    const [wrongLetter, setWrongLetter] = useState([]);
    // create a state variable that will keep track of the number of errors made
    const [errorCount, setErrorCount] = useState(0);
    // create a state variable for the message that will be displayed based on whether it is a won or a loss
    const [gameStatusMessage, setGameStatusMessage] = useState("");

    // create a function to fetch a random word from the random word api
    const fetchWord = () => {
        // call the fetchData function and after a the response was received set the word variable to the received response
        fetchData()
            .then((res) => {
                setWord(res.word)
                setLoading(false)
            })
            .catch((e) => {
                console.log(e)
            })
    }
    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("https://random-word-api.p.rapidapi.com/get_word", options)
        return response.json()
    } 
    
    // after render, call the fetchWord function, without passing any dependency to the useEffect hook
    useEffect(() => {
        fetchWord()
    }, [])
    
    // when changes in the correctLetter, wrongLetter, errorCount or word are detected run the following functions 
    useEffect(() => {
        // call the checkGameStatus function to check whether tha game has been won or lost
        checkGameStatus()
        // the handleClick function will run if the letter buttons were clicked
        const handleClick = (e) => {
            // retrieve the letter of the button that was clicked
            let clickedLetter = e.target.value
            // if the element clicked has the letterButton class name execute the following if checks
            if (e.target.className === "letterButton") {
                // check if the word includes the letter clicked and if it is not already part of the correctLetter array
                // if the criterias are met add it to the correctLetter array
                if(word.includes(clickedLetter)) {
                    if(!correctLetter.includes(clickedLetter)) {
                        setCorrectLetter(previousLetters => [...previousLetters, clickedLetter])
                    }
                // otherwise it means this was a wrong guess so add it to the wrongLetters array
                } else {
                    if (!wrongLetter.includes(clickedLetter)) {
                        setWrongLetter(previousWrongGuesses => [...previousWrongGuesses, clickedLetter])
                        setErrorCount(prevErrorCount => prevErrorCount + 1)
                    }
                }
            }
        }
        // add event listener to the letter buttons on screen
        window.addEventListener("click", handleClick)
        return () => window.removeEventListener("click", handleClick)
        
    }, [correctLetter, wrongLetter, errorCount, word])
    

    // check the current status of the guessed word. we do this to be able to tell whether the game is won or not yet
    const guessedWord = () => {
        let result = word.split("").map(letter => (correctLetter.includes(letter) ? letter : "_"))
        return result
    }
    // isWinner will return a boolean checking if the guessedWord is the same as the fetched word
    const isWinner = guessedWord().join("") === word

    // the checkGameStatus function updates the game status message if the game has been won or lost
    const checkGameStatus = () => {
            if (isWinner) {
                setGameStatusMessage("You won!")
            } else if (!isWinner && errorCount === 10 ) {
                setGameStatusMessage("You lost!")
            } 
            else {
                setGameStatusMessage("")
            }
    }
   
    // create a component that will render conditionally. If the gameStatusMessage shows that
    // the user lost, then display a p tag with the word that should have been guessed
    function ShowWord() {
        if (gameStatusMessage === "You lost!") {
            return <p className="show-word">The word was: {word}</p>
        }
    }

    // when the restart button is clicked the restartGame function will run
    // the function runs the fetchWord to get a new word, and sets back the state varibales to their original value
    const restartGame = () => {
        fetchWord()
        setCorrectLetter([])
        setWrongLetter([])
        setErrorCount(0)
        setGameStatusMessage("")
    }

    // the Hangman component returns a div containing the Header, Image, GenerateWord, GenerateButtons
    // ShowWord, RestartGame, GameRules components and a p tag informing the user if the game has been won or lost.
    // Multiple components pass information through props , such as the Image component passing the number of errors that were made during the game
    return (
        <div className="game-container">
            <Header />
            <Image errorCount={errorCount}/>
            <GenerateWord correctLetter={correctLetter} word={word} isLoading={isLoading}/>
            <GenerateButtons correctLetter={correctLetter} wrongLetter={wrongLetter} errorCount={errorCount} gameStatusMessage={gameStatusMessage}/>
            <p className="statusMessage">{gameStatusMessage}</p>
            <ShowWord />
            <RestartGame restartGame={restartGame}/>
            <GameRules />
        </div>
    )
}

// export the Hangman component
export default Hangman;