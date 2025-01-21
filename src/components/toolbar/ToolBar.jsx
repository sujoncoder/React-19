import Button from "./Button";

const ToolBar = ({ onHello, onWorld }) => {
    return (
        <section className="flex justify-center items-center h-screen">
            <div className="border rounded bg-white shadow p-5 w-[210px] space-x-5">
                <Button onClick={onHello}>
                    hello
                </Button>

                <Button onClick={onWorld}>
                    world
                </Button>
            </div>
        </section>
    )
}

export default ToolBar;