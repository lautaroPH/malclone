import styles from './styles.module.css';
import { token } from 'utils/token';
import useLocalStorage from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useUser from 'hooks/useUser';
import { getUserToken } from 'utils/getUserToken';
import SearchInput from './SearchInput';
import OptionsLIst from './OptionsLIst';
import ButtonLogin from './ButtonLogin';

const Header = () => {
  const [tokenVerifier] = useLocalStorage('tokenVerifier', token);
  const [userToken, setUserToken] = useLocalStorage('userToken', '');
  const router = useRouter();
  const user = useUser();

  const code = router?.query?.code;

  useEffect(() => {
    if (tokenVerifier && code && !userToken) {
      getUserToken(tokenVerifier, code)
        .then((res) => {
          router.push('/');
          return res.json();
        })
        .then(({ access_token }) => {
          setUserToken(access_token);
          router.reload();
        });
    }
  }, [code, tokenVerifier, userToken, setUserToken, router]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleFormContainer}>
        <h1 className={styles.title}>MyAnimeListClone</h1>
        <SearchInput />
      </div>
      <OptionsLIst />
      <ButtonLogin />
      {user ? <h1>{user?.name}</h1> : <ButtonLogin token={token} />}
    </div>
  );
};

export default Header;
