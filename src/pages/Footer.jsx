import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Footer() {
  return (
    <>
      <nav>
        <div className="navbar flex items-center h-16 mb-8 border-2 px-4">
          <div className="logo text-4xl w-1/2 font-bold text-indigo-950">
            <Link to="/">Footer</Link>
          </div>
          <div className="links w-1/2">
            <ul className="flex justify-evenly items-center text-lg text-indigo-950">
              <li><Link to="http://facrbook.com">Facebool</Link></li>
              <li><Link to="http://instagram.com/kalamdhillon">Instalink</Link></li>
            
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


