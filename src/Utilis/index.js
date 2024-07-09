import toast from "react-hot-toast";

export const getBlog =()=>{
    let blogs =[];
    const storedBlogs= localStorage.getItem('blogs')
    if(storedBlogs){
       blogs =JSON.parse(storedBlogs)
    }
    return blogs;
}

// save

export const saveBlogs = blog =>{
    let blogs = getBlog()
    const isExist =blogs.find(b=> b.id===blog.id)
    if(isExist){
        return toast.error('already BookMarked')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Blog Bookmarked successFully!')
}
// delete
export const deleteBlogs = id=>{
    let blogs = getBlog()
    const remaining = blogs.filter(b=>b.id!==id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmarked!')
}