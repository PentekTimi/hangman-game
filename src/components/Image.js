// import the useEffect and useState hooks from react
import { useEffect, useState } from "react";

function Image({ errorCount }) {
    // create a state variable and initialize it with the value of 1
    const [mistakeCount, setMistakeCount] = useState(1);

    // the mistakeCount will increment when there is a change to the errors made in the game
    // this information is passed through the errorCount props
    useEffect(() => {
        setMistakeCount(errorCount + 1)
    }, [errorCount])
    
    // we return a div with the image, and a p tag with the current mistakes out of a maximum of 10
    // the image tag´s source uses the mistakeCount variable to load the correct image based on the number of mistakes
    return (
        <div>
            <img src={require(`../images/state${mistakeCount}.GIF`)} alt="hangman-images" />
            <p>Current mistakes: {errorCount}/10</p>
        </div>
    )
}

// export the Image component
export default Image;