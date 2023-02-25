import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Container from "./container";
import Logo from "./logo";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="mt-4">
      <Container>
        <div className="min-h-2 w-full mb-4">
          {!session && (
            <div className="flex justify-between items-center">
              <span />
              <Link
                href="/api/auth/signin"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Link>
            </div>
          )}
          {session?.user && (
            <div className="flex justify-between items-center">
              <Link
                href="/history"
                className="btn btn-neutral"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <span className="material-symbols-outlined">history</span>
              </Link>
              <Link
                href={`/api/auth/signout`}
                className="btn btn-neutral"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                <span className="material-symbols-outlined">logout</span>
              </Link>
            </div>
          )}
        </div>
        <div>
          <Logo />
        </div>
      </Container>
    </header>
  );
}
