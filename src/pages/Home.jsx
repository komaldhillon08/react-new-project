import Button from "../components/Button"
export default function Home() {
    return (
         <>
            <div className="flex border-2 py-50  text-indigo-950">
                <div className=" w-1/2">
                    <h1 className=" text-7xl mb-10 ">Fully Managed Cloud & Web Hosting</h1>
                    <p className=" text-3xl mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, laboriosam.</p>
                    <Button>View pricing</Button>
                </div>
                <div className=" w-1/2">
                    home-right images
                </div>
            </div>
         </>
    )
}