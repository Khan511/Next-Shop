import { fetchJSON } from "@component/lib/helper";
import cookie from "cookie";
const { CMS_URL } = process.env;

async function HandleLogin(req, res) {
  const event = req.method;

  if (event !== "POST") {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body;
  try {
    const { jwt, user } = await fetchJSON(`${CMS_URL}/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });
    // Save JWT token in cookies which is HTTP only(Means not visible to our client-side code)
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, {
          path: "/",
          httpOnly: true,
        })
      )

      .json({
        id: user.id,
        name: user.username,
      });
  } catch (err) {
    res.status(401).end();
  }
}

export default HandleLogin;
