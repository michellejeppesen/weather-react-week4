import './App.css';
import Weather from "./Weather.js"

function App() {
  return (
    <div className="App">
      <Weather />
      <small>
        <a
          href="https://github.com/michellejeppesen/weather-react-week4"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Michelle Jeppesen
      </small>
    </div>
  );
}


export default App;
