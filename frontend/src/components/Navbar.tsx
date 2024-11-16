import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Use the custom hook

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth(); // Access login state and logout function

  return (
    <nav className="flex items-center justify-between p-4 bg-zinc-800 shadow-md shadow-slate-500 font-semibold text-slate-400">
      <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <li className="px-4 py-2 border border-slate-300 rounded-full hover:bg-slate-200">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 border border-slate-300 rounded-full hover:bg-slate-200">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4 py-2 border border-slate-300 rounded-full hover:bg-slate-200">
          <Link to="/voting">Voting</Link>
        </li>
        <li className="px-4 py-2 border border-slate-300 rounded-full hover:bg-slate-200">
          <Link to="/features">Features</Link>
        </li>
        <li className="px-4 py-2 border border-slate-300 rounded-full hover:bg-slate-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex flex-row space-x-4">
      
        {isLoggedIn ? (
          <>
          <li className='px-4 py-2 border border-slate-500 rounded-full hover:bg-slate-300 '>Hi, Voter!👋</li>
          <li className="px-4 py-2 border border-slate-500 rounded-full hover:bg-slate-300 " onClick={logout}>
            Logout
          </li>
          </>
        ) : (
          <>
            <li className="px-4 py-2 border border-slate-500 rounded-full hover:bg-slate-300">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-4 py-2 border border-slate-500 rounded-full hover:bg-slate-300">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
