import './App.css'
import React from 'react'
import { BrowserRouter,Routes,Route, NavLink,Link } from 'react-router-dom'
import Signup from './Components/Signup'
import { SnackbarProvider } from 'notistack';
import Login from './Components/Login';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import UploadBlog from './Components/UploadBlog';
import Blog from './Components/Blog';
import Stock from './Components/Stock';
import Offer from './Components/Offer';
import Ticker from './Components/Ticker';
import BlogDetails from './Components/BlogDetails';
import Contact from './Components/Contact';
import Youtube from './Components/Youtube';
import Twitter from './Components/Twitter';
import Footer from './Components/Footer';
import Service from './Components/Service';
import News from './Components/News';
import ManageuserData from './Components/ManageuserData';
import ManageBlog from './Components/ManageBlog';
import { UserProvider } from './UserContext';
import Cms from './Components/Cms';
import ManageContact from './Components/ManageContact';
import Community from './Components/Community';
import CommunityPost from './Components/CommunityPost';
import ManageCommunity from './Components/ManageCommunity';
import Journey from './Components/Journey';


function App() {

  return (
    <>
      <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
    <BrowserRouter>
    <UserProvider>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>

       <Route path='Home' element={<Home/>}/>
       <Route path='Signup' element={<Signup/>}/>
       <Route path='Login' element={<Login/>}/>
       <Route path='UploadBlog' element={<UploadBlog/>}/>
       <Route path='Blog' element={<Blog/>}/>
       <Route path='Stock' element={<Stock/>}/>
       <Route path='Offer' element={<Offer/>}/>
       <Route path='Ticker' element={<Ticker/>}/>
       <Route path='BlogDetails/:id' element={<BlogDetails/>}/>
       <Route path='Contact' element={<Contact  />}/>
       <Route path='Youtube' element={<Youtube  />}/>
       <Route path='Twitter' element={<Twitter  />}/>
       <Route path='Service' element={<Service  />}/>
       <Route path='News' element={<News  />}/>
       <Route path='ManageuserData' element={<ManageuserData  />}/>
       <Route path='ManageBlog' element={<ManageBlog  />}/>
       <Route path='Cms' element={<Cms  />}/>
       <Route path='ManageContact' element={<ManageContact  />}/> 
       <Route path='Community' element={<Community/>}/>
       <Route path='CommunityPost' element={<CommunityPost/>}/> 
       <Route path='ManageCommunity' element={<ManageCommunity/>}/> 
       <Route path='Journey' element={<Journey/>}/> 








    </Routes>
   <Footer/>
   </UserProvider>
    </BrowserRouter>
    </SnackbarProvider>
    </>
  )
}

export default App
