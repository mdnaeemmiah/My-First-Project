import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import Bookmarks from '../pages/Bookmarks';
import BlogShow from '../pages/BlogShow';
import Content from '../Componeets/Content';
import Author from '../Componeets/Author';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/blogs',
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element:<Blogs></Blogs>
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>
        },
        {
          path:'/blogShow/:id',
          loader :({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          element:<BlogShow></BlogShow>,
          children:[
            {
                path:'',
                element:<Content></Content>,
                loader :({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element:<Author></Author>,
                loader :({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        }
      ]
    },
   
  ]);