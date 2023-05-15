import { fetchJSON } from "@component/lib/helper";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJSON("/api/user");
        setUser(user);
      } catch (err) {
        // We are not signed in if it get error. so no need to assign an error.
      }
    })();
  }, []);

  const handleLogout = async () => {
    await fetchJSON("/api/logout");

    setUser(undefined);
  };
  return (
    <nav className="px-8 py-5 bg-gray-50 text-sm">
      <ul className="flex flex-row justify-between">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={() => handleLogout()}>Sign-Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
