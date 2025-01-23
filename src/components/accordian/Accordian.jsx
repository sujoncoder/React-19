import Iteam from "./Iteam"

const Accordian = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <div className="w-[500px] bg-white border p-5 rounded shadow-lg space-y-5">

                <Iteam title="Hey Developer" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dolor quaerat neque obcaecati.
                </Iteam>

                <Iteam title="Hey Designer" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum dolor quaerat neque obcaecati.
                </Iteam>


            </div>
        </section>
    )
}

export default Accordian