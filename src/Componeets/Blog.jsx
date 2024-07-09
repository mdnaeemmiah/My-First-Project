import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import { deleteBlogs } from "../Utilis";

const Blog = ({blog,deleteAble,handleDelete}) => {
  const {cover_image,id,description,published_at,title}= blog;
 
    return (
      <div className="flex relative">
        <Link to={`/blogshow/${id}`}  rel="noopener noreferrer" href="#" className="max-w-sm transition border-2 hover:scale-105 border-primary hover:border-secondary 
         mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs dark:text-gray-600">{published_at}</span>
            <p>{description}</p>
        </div>
    </Link>
    {
        deleteAble && <div 
        onClick={()=>handleDelete(id)}
        className="absolute bg-primary p-3 rounded-full
        hover:scale-105 -top-5 -right-5
        "><MdDeleteForever size={20}></MdDeleteForever></div>
    }
      </div>
    );
};

export default Blog;