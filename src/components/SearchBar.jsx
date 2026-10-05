function SearchBar({ value, onChange, onSearch }) {
  return (
    <form className="search-form" onSubmit={(e) => {
      e.preventDefault();
      onSearch();
    }}>
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by medicine, name or active ingredient"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
}

export default SearchBar;