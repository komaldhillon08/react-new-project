
import { FoodImages } from "../images/FoodImages";
import Button from "../components/Button";

export default function FoodZone() {
  return (
    <>
      <section className="py-10">
       <div className="">
         <h2 className="text-3xl font-bold text-indigo-950 mb-8 text-center">
          Food Zone
        </h2>
          <button className="text-2xl font-bold text-indigo-950 mb-8  border-2 px-5 py-1 rounded-2xl cursor-pointer ">Cart(0)</button>
        
       </div>


        {/* Grid layout for carts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FoodImages.map((foodImg) => (
            <div
              key={foodImg.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white hover:shadow-xl transition"
            >
              <img
                src={foodImg.path}
                alt={foodImg.name}
                className="  object-cover rounded-md mb-4"
              />
              <h5 className="text-xl font-semibold text-indigo-950 mb-2">
                {foodImg.name}
              </h5>
              <p className="text-lg font-medium text-gray-700 mb-4">
                ${foodImg.price}
              </p>
              <Button>
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


/* import { FoodImages } from "../images/FoodImages"
export default function FoodZone() {
    return (
        <>
            <section className="flex w-1/3 border-2">
                   <div className="cart ">
                     <ul className="flex justify-between">
                        {FoodImages.map((foodImg) => (
                            <li key={foodImg.id}>
                                <img src={foodImg.path} alt={foodImg.name} />
                                <h5>{foodImg.name}</h5>
                                <div>
                                    {foodImg.price}
                                </div>
                            </li>
                        ))}
                    </ul>
                   </div>
            </section>
        </>
    )
} */