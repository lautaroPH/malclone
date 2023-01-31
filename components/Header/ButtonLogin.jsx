import styles from './styles.module.css';
import Link from 'next/link';
import { url } from 'utils/loginUrl';
import {token} from 'util/token' 

const ButtonLogin = () => {
  const [, setTokenVerifier] = useLocalStorage('tokenVerifier', token);

  const handleClick = () => {
    setTokenVerifier(token);
  };

  return (
    <div>
      <Link passHref href={url}>
        <button onClick={handleClick} className={styles.buttonLogin}>
          Login
        </button>
      </Link>
    </div>
  );
};

export default ButtonLogin;
