import SearchIcon from './SearchIcon';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.css';
import { token } from 'utils/token';

const Header = () => {
  const url = `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=d092b0cf40e3726bd91eb1401def13b3&code_challenge=${token}&state=${uuidv4()}`;

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleFormContainer}>
        <h1 className={styles.title}>MyAnimeListClone</h1>
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
      </div>
      <ul className={styles.listContainer}>
        <li className={styles.listOption}>
          <a>Anime</a>
          <ul className={styles.listAnimeContainer}>
            <li className={styles.listAnimeOption}>
              <a>Top Anime</a>
            </li>
            <li className={styles.listAnimeOption}>
              <a>Seasonal Anime</a>
            </li>
            <li className={styles.listAnimeOption}>
              <a>Recommendations</a>
            </li>
          </ul>
        </li>
        <li className={styles.listOption}>
          <a>Manga</a>
          <ul className={styles.listMangaContainer}>
            <li className={styles.listMangaOption}>
              <a>Top Manga</a>
            </li>
            <li className={styles.listMangaOption}>
              <a>Recommendations</a>
            </li>
          </ul>
        </li>
      </ul>
      <div>
        <a className={styles.buttonLogin} href={url}>
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
