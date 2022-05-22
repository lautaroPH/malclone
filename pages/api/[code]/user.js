export default function handler(req, res) {
  const { code } = req.query;
  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${code}`,
    },
  };
  fetch(
    'https://api.myanimelist.net/v2/users/@me?fields=anime_statistics',
    options
  )
    .then((response) => response.json())
    .then((data) => res.status(200).json(data))
    .catch(() => {
      response.status(504).end();
    });
}
