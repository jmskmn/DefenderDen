import React, { createContext, useContext, useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";

// Configure MSAL
const msalConfig = {
  auth: {
    clientId: "6a676603-0bc4-4a4d-b0e1-58b7f06484a5", 
    authority: "https://login.microsoftonline.com/6ccd8727-d69e-4423-b6e3-f136a2be4409", 
    redirectUri: "http://localhost:5173/", // The redirect URI after login
  },
};

const pca = new PublicClientApplication(msalConfig);
pca.initialize()
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);  // Track login state
    
    const signIn = async () => {
      if (isLoggingIn) {
        return; // Prevent login if one is already in progress
      }
      
      setIsLoggingIn(true);  // Set login state to true
      
      try {
        const loginResponse = await pca.loginPopup({
          scopes: ["User.Read"], // Define the scope (User.Read is for basic profile)
        });
        setAccount(loginResponse.account);
        console.log("Logged in successfully:", loginResponse);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setIsLoggingIn(false);  // Reset login state after attempt
      }
    };
  
    const signOut = async () => {
      setIsLoggingIn(true); // Optionally disable sign out during login
      await pca.logoutPopup();
      setAccount(null);
      setIsLoggingIn(false);
    };
  
    return (
        <AuthContext.Provider value={{ account, signIn, signOut, isLoggingIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
