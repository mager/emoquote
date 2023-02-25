import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import type { HistoryT } from "../types/history";

export default function History() {
  const { data } = useSession();
  const [history, setHistory] = useState([] as HistoryT[]);

  // Call an API endpoint to get user data
  useEffect(() => {
    if (data && data.user) {
      const req = { email: data.user.email };
      fetch("/api/history", { method: "POST", body: JSON.stringify(req) })
        .then((res) => res.json())
        .then((data) => {
          setHistory(data.quotes);
        });
    }
  }, [data]);

  return (
    <Layout>
      <div className="alert alert-warning">WIP DESIGN</div>
      {history ? (
        <div>
          <ul>
            {history.map((item) => (
              <li key={item.id}>
                <span className="text-lg">{item.text}</span>
                <span className="text-sm">{item.attr}</span>
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
