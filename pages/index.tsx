import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import type { User } from "../types/user";
import { Session } from "next-auth";
import Quote from "../components/quote";

export default function Index() {
  const { data } = useSession();
  const [user, setUser] = useState(null as User | null);

  // Call an API endpoint to get user data
  useEffect(() => {
    if (data) {
      fetchMe(data, setUser);
    }
  }, [data]);

  return (
    <Layout>
      {user ? (
        <div>
          <h1>Hey {user.name}!</h1>
          <Quote>
            Love is not only something you feel, it is something you do.
          </Quote>
        </div>
      ) : (
        <p>Sign in to get started!</p>
      )}
    </Layout>
  );
}

const fetchMe = (
  data: Session,
  setUser: Dispatch<SetStateAction<User | null>>
) => {
  const req = { email: data?.user?.email, name: data?.user?.name };
  fetch("/api/me", { method: "POST", body: JSON.stringify(req) })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });
};
