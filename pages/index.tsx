import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/layout";
import type { UserT } from "../types/user";
import type { QuoteT } from "../types/quote";
import { Session } from "next-auth";
import Emotions from "../components/emotions";
import Quote from "../components/quote";
import Loading from "../components/loading";

export default function Index() {
  const { data } = useSession();
  const [user, setUser] = useState(null as UserT | null);
  const [selectedEmotions, setSelectedEmotions] = useState([] as string[]);
  const [quote, setQuote] = useState(null as QuoteT | null);
  const [loading, setLoading] = useState(false);

  // Call an API endpoint to get user data
  useEffect(() => {
    if (data) {
      fetchMe(data, setUser);
    }
  }, [data]);

  const onEmotionSelect = (selectedEmotions: string[]) => {
    setSelectedEmotions(selectedEmotions);
  };

  // getQuote is a POST request with a body of selectedEmotions
  const getQuote = () => {
    setLoading(true);
    fetch("/api/getQuote", {
      method: "POST",
      body: JSON.stringify({ selectedEmotions, user }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      });
  };

  const reset = () => {
    setQuote(null);
    setSelectedEmotions([]);
  };

  const step1 = !loading && !quote;
  return (
    <Layout>
      {user ? (
        <div>
          {step1 && (
            <>
              <h1>Choose an emotion:</h1>
              <Emotions
                selectedEmotions={selectedEmotions}
                onEmotionSelect={onEmotionSelect}
              />
              <div className="my-8">
                <button className="btn btn-primary btn-lg" onClick={getQuote}>
                  Generate
                </button>
              </div>
            </>
          )}
          {loading && <Loading />}
          {quote && <Quote text={quote.text} attr={quote.attr}></Quote>}
          {quote && (
            <div className="my-8">
              <button className="btn btn-primary btn-lg" onClick={reset}>
                Generate another
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-4">
          <p>Sign in to get started!</p>
        </div>
      )}
    </Layout>
  );
}

const fetchMe = (
  data: Session,
  setUser: Dispatch<SetStateAction<UserT | null>>
) => {
  const req = { email: data?.user?.email, name: data?.user?.name };
  fetch("/api/me", { method: "POST", body: JSON.stringify(req) })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });
};
