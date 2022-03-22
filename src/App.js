import { TextField } from "@mui/material";
import "./App.css";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <form>
        <TextField
          id="outlined-basic"
          variant="outlined"
          defaultValue="Enter a city..."
        />
        <Button variant="contained" color="secondary">
          Search
        </Button>
      </form>
      <footer>
        <p>
          This project was coded by Katrin Kanape and is open-sourced on Github
        </p>
      </footer>
    </div>
  );
}

export default App;
