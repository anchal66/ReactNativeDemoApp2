import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPost, setBlogPost] = useState([]);

    const addBlogPost =()=>{
        setBlogPost([...blogPost, { title: `BlogPost number ${blogPost.length + 1}`}]);
    }
    const editBlogPost =()=>{}
    const deleteBlogPost =()=>{}

    //This way we can create more states and use it in coresponding Screens

    //But we take alternative and use reducer for this

    return <BlogContext.Provider
             value={{ data: blogPost, addBlogPost: addBlogPost}}
             >
        {children}
    </BlogContext.Provider>
}

export default BlogContext;