import { FoodImages } from "../images/FoodImages"
export default function FoodZone() {
    return (
        <>
            <section>
                    <ul className="">
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
            </section>
        </>
    )
}