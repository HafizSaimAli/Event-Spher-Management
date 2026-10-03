import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import { TooltipProvider } from './components/ui/tooltip'
import { Route, Routes } from 'react-router-dom'
import ScrollTopButton from './components/ScrollTopButton'
import ScrollToTop from './pages/Landing-page/ScrollToTop'
import Home from './pages/Landing-page/Home'
import Eror404 from './pages/Landing-page/Eror404'
import DashboardLayout from './layout/DashboardLayout'
import Contact from './pages/Landing-page/ContactUs'
import WebsiteLayout from './layout/WebsiteLayout'
import EventGallery from './pages/Landing-page/Event-Gallery'
import Service from './pages/Landing-page/Service'
import AboutPlatform from './pages/Landing-page/About-Platform'
import Login from './pages/Landing-page/Login'
import Signup from './pages/Landing-page/Signup'
import BookNow from './pages/Landing-page/Book-Now'
import Feedback from './pages/Landing-page/Feedback'
import FeedbackButton from './components/FeedbackButton'
import ContactUs from './pages/Landing-page/ContactUs'
import OngoingEvents from './pages/Landing-page/Onoing-Events'
import BookTicket from './pages/Landing-page/Book-Ticket'
import ForgotPassword from './pages/Landing-page/ForgotPassword'
import VerifyOtp from './pages/Landing-page/VerifyOtp'
import NewPassword from './pages/Landing-page/NewPassword'


const App = () => {
  return (
    <>
     <TooltipProvider>
        <ScrollToTop />

<FeedbackButton />

<ScrollTopButton />

    <Routes>


      <Route path='/' element={<WebsiteLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/event-gallery" element={<EventGallery />}/>
      <Route path="/service" element={<Service />} />
      <Route path="/about-platform" element={<AboutPlatform />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/ongoing-events" element={<OngoingEvents />} />
      <Route path="/book-ticket" element={<BookTicket />} />
      
      </Route>
   
            {/* login signup route  */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     <Route path="/forgot-password" element={<ForgotPassword />} />
     <Route path="/verify-otp" element={<VerifyOtp />} />
     <Route path="/new-password" element={<NewPassword />} />

                 {/* end */}



    
      <Route path='/Dashboard' element={<DashboardLayout/>}>    
      <Route index element={<Dashboard/>}/>
       <Route path='Contact' element={<Contact/>}/>
      <Route path='*' element={<Eror404/>}/>
      </Route>
      

    </Routes>


    </TooltipProvider>
    </>
  )
}

export default App