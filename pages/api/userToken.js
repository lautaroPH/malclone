// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const options = {
    method: 'POST',
    mode: 'no-cors',
    body: new URLSearchParams({
      client_id: 'd092b0cf40e3726bd91eb1401def13b3',
      client_secret:
        'ba93a8ea4fc0ceb7121981f4caa1a794a10d708fc3625beab8232ff200422dc0',
      code: 'def5020018b094a1cc806fce76ad156ebf2b9279dea3c7a0f48990aed2486354c5b1e46ec58b2cad3db0395aaca6eaf268cf3de52014364b3879a270f0ebbdceb2f60fc3714fa68a7945fdebd62b65740a7eaae56fc41cb92f7f4e613bf06a982746a9762eec7899babfe5a8048dc1d49e0fac098a86190ca945c8225700a04f5ad7f05f8b31fef19a699624d861dd26211253254b96aae16cb55004f420ec52847bb5c1c96cdd61f5cdba082aa1c0316021b832b33cbf5e16cf445a1c48a44cd9b4b8a22589e6809d8a3549cec794dae28a397f84bd6ab9a822c504d569afef99b59f6cde81f917f34ab52588bbeb93750b2b0e3747c7615c1b2eb9ff65ec9bbd7d4c4073725b7f7c882b2010b15e15ed37c501395c951020ff1de1f6ab0638ff5a4247ed6d5cd76c6c3a3db6296794fe0e619e094ac0702f3c1c8f359f45960449f566a1b92fc968f76f3431b477b8db89a14e6e14345779d98035a732c9adef53e905bec61f57e758fa57acb383ea212cd510a633e27e52e257f2be7f7a4768fb5e1347a1d85d0841f10d86605536822cb8f5a6f7915578b569d92a1d9471a5db3cf9eeb719c08249cde3180c08b9a7f6d0b6bed95837786ef63cc333c29648c7e049d05d16938d5c2e9e72705a96742487188fa2',
      code_verifier:
        'e18dc121-e0c4-40b3-9a25-c6171afe0a0c348a17c6-0202-4dd8-a9fe-7864a828f0f645389ce0-7923-4de0-8560-43eb03b73afa',
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
    .then((data) => res.status(200).json(data));
}
