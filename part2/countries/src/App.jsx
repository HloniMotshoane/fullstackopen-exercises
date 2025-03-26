import { useState, useEffect } from "react";
import countryService from "./services/CountryService";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryService.getAll().then(data => setCountries(data));
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Country Information</h1>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : (
        <CountryList countries={filteredCountries} setSelectedCountry={setSelectedCountry} />
      )}
    </div>
  );
};

export default App;
