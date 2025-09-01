import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <nav>
        <div className="navbar flex items-center h-16 mb-8 border-2 ">
          <div className="logo text-4xl w-1/2 font-bold text-indigo-950">
            <Link to="/">Footer</Link>
          </div>
          <div className="links w-1/2">
            <ul className="flex justify-evenly items-center text-lg text-indigo-950">
              <li><Link to="http://facrbook.com">Facebook</Link></li>
              <li><Link to="http://instagram.com/kamaldhillon_08" target="_blank">Instagram</Link></li>
              
            
            </ul>
          </div>
        </div>
      </nav>

    
    </>
  );
}


