export default function handler(req, res) {
  const { code, codeVerifier } = req.query;

  const options = {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      code_verifier: codeVerifier,
      grant_type: 'authorization_code',
    }),

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  fetch(
    'https://myanimelist.net/v1/oauth2/token?grant_type=authorization_code',
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch(() => {
      response.status(504).end();
    });
}
