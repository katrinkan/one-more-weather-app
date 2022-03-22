import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Barcelona" />

      <footer>
        <p>
          This project was coded by Katrin Kanape and is{" "}
          <a href="https://github.com/katrinkan/one-more-weather-app">
            open-sourced on Github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
