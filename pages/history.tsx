import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import type { History } from "../types/history";

export default function History() {
  const { data } = useSession();
  const [history, setHistory] = useState([] as History[]);

  // Call an API endpoint to get user data
  useEffect(() => {
    if (data) {
      const req = { email: data?.user?.email, name: data?.user?.name };
      fetch("/api/history", { method: "POST", body: JSON.stringify(req) })
        .then((res) => res.json())
        .then((data) => {
          setHistory([
            {
              id: "abc",
              quote: "This is a quote",
              author: "This is an author",
            },
          ]);
          // setHistory(data);
        });
    }
  }, [data]);

  return (
    <Layout>
      {history ? (
        <div>
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                <p>{item.quote}</p>
                <p>{item.author}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have no history yet.</p>
      )}
    </Layout>
  );
}
