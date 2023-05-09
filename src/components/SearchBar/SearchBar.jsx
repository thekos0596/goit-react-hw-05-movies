import PropTypes from 'prop-types';

const SearchBar = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
