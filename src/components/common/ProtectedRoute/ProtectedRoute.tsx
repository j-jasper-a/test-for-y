"use client";

import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { BsShieldLock as LockIcon } from "react-icons/bs";

type ProtectedRouteProps = {
  children: ReactNode;
};

const PASSWORD = process.env.NEXT_PUBLIC_PASSWORD || "";
const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY || "";
const SESSION_TIMESTAMP_KEY = "sessionTimestamp";
const SESSION_EXPIRY_DURATION = 3600000;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkAuthenticationState = () => {
    try {
      const authState = sessionStorage.getItem(AUTH_KEY);
      const timestamp = sessionStorage.getItem(SESSION_TIMESTAMP_KEY);
      const isSessionExpired =
        !timestamp ||
        Date.now() - parseInt(timestamp, 10) > SESSION_EXPIRY_DURATION;

      if (authState === "true" && !isSessionExpired) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.warn("Session storage access failed: ", error);
      setIsAuthenticated(false);
    }
  };

  const saveAuthenticationState = () => {
    try {
      sessionStorage.setItem(AUTH_KEY, "true");
      sessionStorage.setItem(SESSION_TIMESTAMP_KEY, Date.now().toString());
    } catch (error) {
      console.warn("Failed to save session storage: ", error);
    }
    setIsAuthenticated(true);
    setErrorMessage("");
  };

  const clearAuthenticationState = () => {
    try {
      sessionStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(SESSION_TIMESTAMP_KEY);
    } catch (error) {
      console.warn("Failed to clear session storage.");
    }
    setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuthenticationState();
  }, []);

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      saveAuthenticationState();
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 17) return "afternoon";
    return "evening";
  };

  if (isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="mx-auto flex h-screen max-w-96 flex-col items-center justify-center bg-background-1 p-4">
        <div className="flex flex-col gap-8 rounded-xl bg-background-2 p-4">
          <LockIcon size={32} />
          <div className="flex flex-col gap-2">
            <p className="font-bold">Good {getGreeting()}, Inakazu-sama!</p>
            <p className="text-sm text-text-gray">
              As you instructed, I applied an extremely basic authentication
              system. Please enter the password you declared on your Notion page
              to enter the website.
            </p>
            <p className="text-xs text-text-gray opacity-50">
              <span>{`Sincerely, `}</span>
              <span className="font-bold">{`Jihan Jasper Al Rashid.`}</span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => {
                setPasswordInput(e.target.value);
                setErrorMessage("");
              }}
              className="rounded-xl bg-background-3 px-4 py-2 text-sm text-text-white outline-none placeholder:text-text-gray"
            />
            {errorMessage && (
              <p className="text-center text-xs text-accent">{errorMessage}</p>
            )}
            <button
              onClick={handleLogin}
              className="rounded-xl bg-accent/90 px-4 py-2 text-sm font-medium transition-all hover:bg-accent"
            >
              {`Enter Website`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {children}
      <button onClick={clearAuthenticationState}>Logout</button>
    </div>
  );
};

export default ProtectedRoute;
