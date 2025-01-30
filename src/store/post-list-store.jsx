import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const PostListStore = ({ children }) => {
    const [postList, dispatchPostList] = useReducer();

    // HANDLE ADD POST
    const addPost = () => {

    };


    // HANDLE DELETE POST
    const deletePost = () => {

    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider >
    )
}

PostListStore.propTypes = {
    children: PropTypes.node
};

export default PostListStore;