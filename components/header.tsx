import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Container from "./container";
import Logo from "./logo";
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className="mt-4">
      <Container>
        <div className="min-h-2 w-full mb-4">
          <p>
            {!session && (
              <>
                <span>You are not signed in</span>
                <a
                  href={`/api/auth/signin`}
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start">
                  <span>Signed in as</span>
                  <strong>{session.user.name}</strong>
                </div>
                <a
                  href={`/api/auth/signout`}
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <span className="material-symbols-outlined">logout</span>
                </a>
              </div>
            )}
          </p>
        </div>
        <div>
          <Logo />
        </div>
        {/* <nav>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/history">History</Link>
            </li>
          </ul>
        </nav> */}
      </Container>
    </header>
  );
}
