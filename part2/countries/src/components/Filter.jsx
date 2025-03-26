const Filter = ({ searchTerm, setSearchTerm }) => {
    return (
      <div>
        Find countries: <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    );
  };
  
  export default Filter;
  