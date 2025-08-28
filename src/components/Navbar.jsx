import Button from "./Button"
export default function Navbar() {
    return(
        <>
           <nav>
            <div className="navbar flex items-center  h-15 mb-8 border-2">
                <div className="logo text-4xl w-1/2 font-bold text-indigo-950 ">
                    <a href="">Logo</a>
                </div>
                <div className="links w-1/2  ">
                    <ul className="flex justify-evenly  items-center text-lg text-indigo-950">
                        <li>Home</li>
                        <li>About</li>
                        <li>Content us</li>
                        <li>Shopping Zone</li>
                        <li>Todo</li>
                        <li>Images</li>
                       <Button >Log In</Button>
                        <Button>Log Out</Button>
                    </ul>

                </div>
            </div>
           </nav>
            
        </>
    )
}