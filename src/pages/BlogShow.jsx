import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { IoBookmarksSharp } from "react-icons/io5";
import { saveBlogs } from "../Utilis";


const BlogShow = () => {
 const [tabIndex,setTAbIndex] =useState(0)


    const blog = useLoaderData();
    const { comments_count,tags, edited_at, published_at, readable_publish_date, reading_time_minutes, title } = blog;
    
    const handlebooksmar= blog =>{
    saveBlogs(blog)
    }



    return (
        <article className="max-w-3xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
            <div className="w-full mx-auto space-y-4 text-center">
                <p className="text-3xl font-semibold tracking-wider uppercase">{title}</p>
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <p className="text-sm dark:text-gray-600">
                            <time datetime="2021-02-12 15:34:18-0200">{reading_time_minutes} min red</time>
                        </p>
                        <p>{published_at}</p>
                    </div>
                    <div className="flex gap-2">
                        <p>{comments_count} views</p>
                        <p>{readable_publish_date}</p>
                    </div>
                </div>
            </div>
            {/* tttttttttttttttttttttttttttaaaaaaaaaaabsssss */}
            <div>
                <div className="flex items-center -mx-4 overflow-x-auto
                 overflow-y-hidden sm:justify-start flex-nowrap
                  dark:bg-gray-100 dark:text-gray-800">
                    <Link to='' onClick={()=>setTAbIndex(0)} rel="noopener noreferrer" href="#" 
                     className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2
                        ${tabIndex===0? ' border border-b-0':'border-b'} rounded-t-lg
                     dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link to={`author`}  onClick={()=>setTAbIndex(1)} 
                    rel="noopener noreferrer" href="#" 
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2
                        ${tabIndex===1? ' border border-b-0':'border-b'} rounded-t-lg
                     dark:border-gray-600 dark:text-gray-900`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>
                    {/* bookmarks buttton */}
                    <div onClick={()=>handlebooksmar(blog)} className="bg-primary p-3 ml-5 rounded-full
                    hover:scale-105 overflow-hidden
                     hover:bg-opacity-30 bg-opacity-20 cursor-pointer">
                            <IoBookmarksSharp size={30} ></IoBookmarksSharp>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
            <div className="dark:text-gray-800">
                <p>Insert the actual text content here...</p>
            </div>
            <div className="pt-12 border-t dark:border-gray-300">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold">Leroy Jenkins</h4>
                        <p className="dark:text-gray-600">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                    </div>
                </div>
                <div className="flex justify-center pt-4 space-x-4 align-center">
                   
                   
                    <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                            <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 
                        256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 
                        131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614
                         78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 
                         48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 
                         137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537
                          122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 
                          165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513
                           217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194
                            83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807
                             167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039
                              142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38
                               8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768
                                131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645
                         0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 
                         8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
                          130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995
                           1.624 19.818 1.624 9.421 0 18.843-1.3
                            27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 
                            7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391
                             0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365
                              109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934
                               104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32
                                66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 
                                60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48
                         48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 
                         48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841
                          13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18
                           199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 
                           43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 
                           80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default BlogShow;