const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
