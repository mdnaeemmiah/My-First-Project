import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const {cover_image,description,published_at,title,body_html}= blog;
    return (
        <div   rel="noopener noreferrer" href="#" className="  border-2 p-2  
        mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
       <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} />
       <div className="p-6 space-y-2">
           <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
           <span className="text-xs dark:text-gray-600">{published_at}</span>
           <p>{description}</p>
           <Markdown rehypePlugins={[rehypeRaw]}>
           {body_html}
           </Markdown>
          
       </div>
   </div>
    );
};

export default Content;