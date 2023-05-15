// Create an Api route to get the JWT Tokken from cookie(The JWT token which we saved in cookie, is HTTP only(Means not visible to our client-side code)).  In order to make that HTTP only JWT Tokken availabe for client side, I am makking this API route.

import { fetchJSON } from "@component/lib/helper";

const { CMS_URL } = process.env;

async function HandleUser(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  try {
    const user = await fetchJSON(`${CMS_URL}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res.status(200).json({
      id: user.id,
      name: user.username,
    });
  } catch (err) {
    res.status(401).end();
  }
}
export default HandleUser;
