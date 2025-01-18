import MealItem from "./MealItem"

const MealList = () => {
    return (
        <section className=" flex justify-center items-center h-screen">
            <div className="border p-5 rounded-lg h-[300px] w-[400px] bg-white">
                <h1 className="text-3xl font-semibold text-center">Some speacial dishes here</h1>

                <ul className="mt-5">
                    <MealItem name="Haji Biriani" isPacked={true} />
                    <MealItem name="Shahi kabab" isPacked={false} />
                    <MealItem name="Haji Biriani" isPacked={true} />
                </ul>
            </div>
        </section>
    )
}

export default MealList