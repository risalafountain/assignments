import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Navbar from './components/Navbar'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import data from './components/data'

function App() {
  const blogs = data.map(item => {
    return (
      <BlogPost 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className='whole--page'>
      <Header />
      <section className='blog-lists'>
        {blogs}
      {/* <button className='button'>OLDER POSTS →</button> */}
      </section>
      <Footer />
    </div>
  )
}

export default App
