import { url } from 'utils/loginUrl';
import SearchIcon from './SearchIcon';
import styles from './styles.module.css';
import Link from 'next/link';
import { token } from 'utils/token';
import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [user, setUser] = useState(null);
  const [tokenVerifier, setTokenVerifier] = useLocalStorage(
    'tokenVerifier',
    token
  );
  const router = useRouter();

  const code = router?.query?.code;

  const handleClick = () => {
    setTokenVerifier(token);
  };

  useEffect(() => {
    if (tokenVerifier && code && !user) {
      fetch(`http://localhost:3000/api/${code}/${tokenVerifier}/userToken`)
        .then((res) => res.json())
        .then(setUser);
    }
  }, [code, setTokenVerifier, tokenVerifier, user]);

  console.log(user);

  useEffect(() => {
    if (user) {
    }
  }, [user]);

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
        <Link passHref href={url}>
          <button onClick={handleClick} className={styles.buttonLogin}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
