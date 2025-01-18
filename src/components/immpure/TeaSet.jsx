import Cup from "./Cup"

const TeaSet = () => {
    return (
        <section className="flex justify-center items-center h-screen ">
            <div className="w-[400px] border rounded-lg p-5 shadow bg-white">
                <Cup guest={1} />
                <Cup guest={2} />
                <Cup guest={3} />
            </div>
        </section>
    )
}

export default TeaSet