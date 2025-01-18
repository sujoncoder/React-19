const Card = ({ children }) => {
    return (
        <div className="w-[400px] h-[200px] border border-cyan-500 rounded-lg shadow p-5 bg-white">
            {children}
        </div>
    )
}
export default Card;