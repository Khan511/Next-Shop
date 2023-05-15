import Input from "@component/components/Input";
import Label from "@component/components/Label";
import Button from "@component/components/button";
import Page from "@component/components/page";
import { fetchJSON } from "@component/lib/helper";
import { useRouter } from "next/router";
import { useState } from "react";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ error: false, loading: false });
  const router = useRouter();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    setStatus({ loading: true, error: false });
    try {
      const response = await fetchJSON("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("Sign-In", response);
      router.push("/");
      setEmail("");
      setPassword("");

      setStatus({ loading: false, error: false });
    } catch (err) {
      setStatus({ loading: false, error: true });
    }
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Label label="Email">
          <Input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label label="Password">
          <Input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        {status.error && (
          <p className="text-red-500 text-xl">Invalid credential</p>
        )}
        {status.loading ? (
          <div>Loading...</div>
        ) : (
          <Button type="submit">Sign In</Button>
        )}
      </form>
    </Page>
  );
}

export default SignInPage;
