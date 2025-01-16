import logo from "./assets/Home.png"
const Header = ({ isAuthenticated, onSignOut, onSignIn }) => {
  return (
    <header className="bg-gray-100 text-white shadow-xl rounded-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-contain mr-2"
          />
          <span className="text-xl text-black font-bold font-pacifico">AreYouIn?</span>
        </div>

        {/* Authentication Button */}
        <div>
          {isAuthenticated ? (
            <button
              onClick={onSignOut}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 w-28 rounded"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={onSignIn}
              className="bg-black hover:bg-gray-800 text-white py-2 px-4 w-28   rounded"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
