
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <section className="flex items-center border-2 py-50 text-indigo-950 mb-10 px-10">
        {/* Left Content */}
        <div className="w-1/2 pr-8">
          <h1 className="text-6xl font-bold leading-tight mb-10">
            Fully Managed Cloud & Web Hosting
          </h1>
          <p className="text-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, laboriosam.
          </p>
          <Button>View Pricing</Button>
        </div>

        {/* Right Content */}
        <div className="w-1/2 flex justify-center">
          {/* Replace with actual image */}
          <img
            // src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
            src=""
            alt="Cloud hosting illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
}
