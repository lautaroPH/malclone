import SearchIcon from './SearchIcon';
import styles from './styles.module.css';

const SearchInput = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <select className={styles.selectSearchOptions}>
          <option value="1">Anime</option>
          <option value="2">Manga</option>
          <option value="3">Characters</option>
          <option value="4">User</option>
        </select>
        <input
          type="search"
          placeholder="Search Anime, Manga, and more..."
          className={styles.searchInput}
        />
        <div className={styles.searchContainer}>
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
