import Button from "./Button"
export default function Home() {
    return (
         <>
            <div className="flex border-2 py-50">
                <div className=" w-1/2">
                    <h1>Fully Managed Cloud & Web Hosting</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laboriosam.</p>
                    <Button>View pricing</Button>
                </div>
                <div className=" w-1/2">
                    home-right images
                </div>
            </div>
         </>
    )
}