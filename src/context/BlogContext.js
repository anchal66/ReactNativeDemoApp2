import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogPost':
            return state.filter((blogPost)=>blogPost.id !== action.payload)
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: `Blog Post ${state.length + 1}`
            }]
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' })
    };
};
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id })
}
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
)