import { useEffect, useState } from "react";
import { deleteBlogs, getBlog } from "../Utilis";
import Blog from "../Componeets/Blog";

import Empty from "../Componeets/Empty";



const Bookmarks = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        const storedBlogs = getBlog()
        setBlogs(storedBlogs)
    },[])
    const handleDelete = id=>{
        deleteBlogs(id)
        const storedBlogs = getBlog()
        setBlogs(storedBlogs)
      }
   if(blogs.length<1) return <Empty
   address={'/blogs'}
   message={'No BookMarks Available'}> </Empty>
    return (
        <div className="grid px-4 sm:px-8 lg:px-16 py-4 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {
            blogs.map(blog => <Blog handleDelete={handleDelete} deleteAble ={true} key={blog.id} blog={blog}></Blog>)
        }


    </div>
    );
};

export default Bookmarks;