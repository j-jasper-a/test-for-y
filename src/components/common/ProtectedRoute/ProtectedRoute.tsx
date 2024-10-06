"use client";

import { useState, useEffect } from "react";
import { ReactNode, KeyboardEvent } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const PASSWORD = process.env.PASSWORD; // Your password
  const AUTH_KEY = "authenticated"; // Key for session storage

  // Check session storage to see if the user is already authenticated
  const checkAuthenticationState = () => {
    try {
      if (sessionStorage.getItem(AUTH_KEY) === "true") {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.warn("Session storage access failed. Using in-memory only.");
    }
  };

  // Save authentication state in session storage
  const saveAuthenticationState = () => {
    try {
      sessionStorage.setItem(AUTH_KEY, "true");
    } catch (error) {
      console.warn(
        "Session storage access failed. Fallback to in-memory only.",
      );
    }
    setIsAuthenticated(true);
  };

  // Clear session storage (logout functionality)
  const clearAuthenticationState = () => {
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch (error) {
      console.warn("Failed to clear session storage.");
    }
    setIsAuthenticated(false);
  };

  // This effect runs once on mount and checks if the user is already authenticated
  useEffect(() => {
    checkAuthenticationState();
  }, []);

  // Handle password submission
  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      saveAuthenticationState();
    } else {
      alert("Incorrect password");
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 17) return "afternoon";
    return "evening";
  };

  // Handle Enter key press
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="mx-auto flex h-screen max-w-96 flex-col items-center justify-center bg-background-1 p-4">
        <div className="flex flex-col gap-8 rounded-xl bg-background-2 p-4">
          <div className="flex flex-col gap-2">
            <p className="font-bold">Good {getGreeting()}, Yuta Inakazu!</p>
            <p className="text-sm text-text-gray">
              As you instructed, I applied an extremely basic authentication
              system. Please enter the password you chose to view the website.
            </p>
            <p className="text-xs">
              Sincerely,
              <br /> Jihan Jasper Al Rashid
            </p>
          </div>
          <div className="flex w-full flex-col gap-2">
            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="rounded-xl bg-background-3 px-4 py-2 text-sm text-text-white outline-none placeholder:text-text-gray"
            />
            <button
              onClick={handleLogin}
              className="rounded-xl bg-accent px-4 py-2 text-sm"
            >{`Enter Website`}</button>
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
