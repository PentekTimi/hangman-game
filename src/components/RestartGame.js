// the component returns a button that calls the restartGame function when clicked
// the function is passed through props to the component
function RestartGame({restartGame}) {
    return (
        <div>
            <button onClick={restartGame} className="restart-btn">restart</button>
        </div>
    )
}

// export the RestartGame component
export default RestartGame;