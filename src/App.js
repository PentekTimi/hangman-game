// import css files
import "./index.css";
import './App.css';
// import Hangman component
import Hangman from './components/Hangman';


// the App component returns a div containing the Hangman component
function App() {
  return (
    <div className="App">
      <Hangman />
    </div>
  );
}

// export the App component
export default App;
