import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPost, setBlogPost] = useState([]);

    const addBlogPost =()=>{
        setBlogPost([...blogPost, { title: `BlogPost number ${blogPost.length + 1}`}]);
    }

    return <BlogContext.Provider
             value={{ data: blogPost, addBlogPost: addBlogPost}}
             >
        {children}
    </BlogContext.Provider>
}

export default BlogContext;