import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar flex items-center h-16 mb-8 border-2 px-4">
          <div className="logo text-4xl w-1/2 font-bold text-indigo-950">
            <Link to="/">Logo</Link>
          </div>
          <div className="links w-1/2">
            <ul className="flex justify-evenly items-center text-lg text-indigo-950">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/content">Contact Us</Link></li>
              <li><Link to="/shopping">Shopping Zone</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li>
                <Button>
                  <Link to="/login">Log In</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 👇 this is where nested pages render */}
      <Outlet />
    </>
  );
}


/* import { Link } from "react-router-dom";  // ✅ Import Link
import Button from "./Button";

export default function Navbar() {
    return (
        <>
           <nav>
                <div className="navbar flex items-center h-16 mb-8 border-2 px-4">
                    <div className="logo text-4xl w-1/2 font-bold text-indigo-950">
                        <Link to="/">Logo</Link>
                    </div>
                    <div className="links w-1/2">
                        <ul className="flex justify-evenly items-center text-lg text-indigo-950">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/content">Contact Us</Link></li>
                            <li><Link to="/shopping">Shopping Zone</Link></li>
                            <li><Link to="/todo">Todo</Link></li>
                            <li><Link to="/images">Images</Link></li>
                            <li>
                                <Button>
                                    <Link to="/login">Log In</Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
           </nav>
        </>
    );
}
 */