import styles from './styles.module.css';

const OptionsLIst = () => {
  return (
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
  );
};

export default OptionsLIst;
