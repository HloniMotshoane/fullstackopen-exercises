const CountryList = ({ countries, setSelectedCountry }) => {
    if (countries.length > 10) {
      return <p>Too many matches, please specify further.</p>;
    }
  
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>
            {country.name.common} 
            <button onClick={() => setSelectedCountry(country)}>Show</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CountryList;
  