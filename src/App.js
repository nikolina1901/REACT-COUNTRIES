import axios from "axios";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetchedCountries();
  });
  const fetchedCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return <div className="App"></div>;
}

export default App;
