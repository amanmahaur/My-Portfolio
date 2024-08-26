import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Loading from './components/Loading/Loading';  
import { Toaster } from 'react-hot-toast';
function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulate loading process (e.g., fetching data, etc.)
      setTimeout(() => {
          setLoading(false);  // Set loading to false after 3 seconds
      }, 1500);
  }, []);

  if (loading) {
      return <Loading />;  // Show loading spinner if still loading
  }
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    <Toaster position="top-center"/>
    </>
  )
}

export default Layout