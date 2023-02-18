// export the GenerateWord component which receives the correctLetter, word and isLoading props
// the component returns the word splitted into individual letters, if the correctLetter array includes 
// a letter that is part of the word, then it will display that letter. However, the other letters 
// will stay hidden until guessed
export default function GenerateWord({ correctLetter, word, isLoading }) {
    
    // if the fetch is still waiting for the word, display a loading sign, else display the word
    if (isLoading) return <div>Loading...</div>
    return (
        <div className="generatedWord">
            {word.split("").map( (letter, index) => {
                return (
                    <span className="letter" key={index}>
                        {correctLetter.includes(letter) ? letter : ""}
                    </span>
                )
            })}
        </div>
    )
}

// link to api that is fetching the word: https://rapidapi.com/uiopuiopuiop3385/api/random-word-api 
