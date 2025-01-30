import { useState } from "react"
import AddPost from "./AddPost"
import PostList from "./PostList"
import PostListStore from "../../store/post-list-store";

const PostApp = () => {
    const [toggle, setToggle] = useState("Post List");

    const handleToggle = (text) => {
        setToggle(text)
    };

    return (
        <PostListStore>
            <section className="h-screen">
                <div className="flex justify-center items-center py-10 space-x-6">
                    <button
                        onClick={() => handleToggle("Post List")}
                        className={`border px-4 py-1 text-lg font-semibold rounded ${toggle === "Post List" && "bg-blue-500 text-white"}`}>
                        Post List
                    </button>

                    <button
                        onClick={() => handleToggle("Add Post")}
                        className={`border px-4 py-1 text-lg font-semibold rounded ${toggle === "Add Post" && "bg-blue-500 text-white"}`}>
                        Add Post
                    </button>
                </div>

                {/* HERE ALL COMPONENTS  */}
                <div className="flex justify-center items-center py-10">
                    <div className="w-1/3 border rounded p-5 bg-white">
                        {toggle === "Post List" ? <PostList /> : <AddPost />}
                    </div>
                </div>
            </section>
        </PostListStore>
    )
}

export default PostApp