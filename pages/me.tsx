import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";

export default function MePage() {
  const { data } = useSession();
  const [user, setUser] = useState(null);

  // Call an API endpoint to get user data
  useEffect(() => {
    if (data) {
      const req = { email: data?.user?.email };
      fetch("/api/me", { method: "POST", body: JSON.stringify(req) })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [data]);

  return (
    <Layout>
      {user ? (
        <div>
          <h1>Me</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}
