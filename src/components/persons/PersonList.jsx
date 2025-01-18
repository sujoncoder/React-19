import { people } from "../../data"
import { getImageUrl } from "../../utils/getImageUrl";

const PersonList = () => {
    const iteamList = people.map((item) => (
        <li key={item.id} className="flex justify-between items-center rounded-lg p-5 w-[500px]">

            <img src={getImageUrl(item)} alt={item.name} className="rounded-full ring-2" />

            <p>
                <b>{item.name}</b> <br />
                {item.profession} <br />
                {item.accomplishment}
            </p>
        </li>
    ));


    return (
        <article className="flex justify-center items-center h-screen">
            <ul className="border-2 border-slate-200 rounded-lg shadow">
                {iteamList}
            </ul>
        </article>
    )
}
export default PersonList;