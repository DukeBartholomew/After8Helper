import "./App.css";
import axios from "axios";

function App() {
  const url = "http://localhost:8000";
  const checkAPI = () => {
    axios
      .get(url + "/")
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h2>Hello</h2>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <button type="button" onClick={checkAPI}>
        Check API
      </button>
    </div>
  );
}

export default App;
