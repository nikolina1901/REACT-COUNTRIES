import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState("Afghanistan");
  useEffect(() => {
    fetchedCountries();
  });

  const fetchedCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  };
  const handleOnChange = (event) => {
    setCountryDetails(event.target.value);
  };
  return (
    <div className="countries-wrapper">
      <select onChange={handleOnChange} className="countries-sellect">
        {countries.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {/* display country info */}
      {countries
        .filter((country) => country.name === countryDetails)
        .map((item) => (
          <div>
            <h1>{item.name}</h1>
            <img src={item.flag} alt="flag" width="100" />
            <h2>{item.capital}</h2>
            <p>Population:{item.population}</p>
            <p>Calling code:{item.callingCodes}</p>
            {item.languages.map((language) => (
              <div key={language.name}>
                <p>Language name:{language.name}</p>
                <p>Language native name:{language.nativeName}</p>
              </div>
            ))}
            {item.currencies.map((curency) => (
              <div key={curency.name}>
                <p>Curency name:{curency.name}</p>
                <p>Curency code:{curency.code}</p>
                <p>Curency symbol:{curency.symbol}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default App;
