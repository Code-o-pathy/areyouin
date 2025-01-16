import { useState } from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import Home from "./Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    alert("Signed out successfully!");
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    alert("Signed in successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        isAuthenticated={isAuthenticated}
        onSignOut={handleSignOut}
        onSignIn={handleSignIn}
      />
      {isAuthenticated ? (
        <LandingPage/>
      ) : (
       <Home/>
      )}
    </div>
  );
};

export default App;
