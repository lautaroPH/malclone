import { useEffect, useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

export default function useUser() {
  const [user, setUser] = useState({});
  const [userToken] = useLocalStorage('userToken', '');

  useEffect(() => {
    function fetchUser() {
      if (userToken) {
        fetch(`http://localhost:3000/api/${userToken}/user`)
          .then((res) => res.json())
          .then(setUser);
      } else {
        setUser(null);
      }
    }

    return () => fetchUser();
  }, [userToken]);

  return user;
}
