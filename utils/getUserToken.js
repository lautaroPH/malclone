export const getUserToken = async (tokenVerifier, code) => {
  return fetch(`http://localhost:3000/api/${code}/${tokenVerifier}/userToken`);
};
