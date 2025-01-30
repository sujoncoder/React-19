
const AddPost = () => {
    return (
        <div>
            <h1 className="text-3xl text-slate-500 font-bold">Create a post</h1> <br />

            <form>
                <span className="text-xl text-slate-500">Title</span><br />
                <input
                    type="text"
                    className="border-2 w-full h-10 px-2 rounded my-3"
                    placeholder="write your title here" />
                <br />

                <textarea
                    name=""
                    id=""
                    placeholder="Write your description here" className="border-2 w-full h-40 px-2 rounded my-3">
                </textarea> <br />


                <button className="bg-blue-500 rounded px-4 py-1.5 text-white">Add Post</button>

            </form>

        </div>
    )
}

export default AddPost