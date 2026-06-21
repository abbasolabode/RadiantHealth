import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayouts from "./layouts/AppLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import BlogDetails from "./pages/BlogDetails";
import DoctorDetail from "./ui/DoctorDetail";
import ThankYou from "./pages/ThankYou";
import Testimonials from "./pages/Testimonials";
import ThankYouForAppointmentForm from "./ui/ThankYouForAppointmentForm";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /* staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1, */
    },
  },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayouts />}>
              {/* Main pages */}
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctorDetails/:id" element={<DoctorDetail />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/blogDetails/:id" element={<BlogDetails />} />
              <Route path="/thankYou" element={<ThankYou />} />
              <Route path="/thankYouForAppointment" element={<ThankYouForAppointmentForm />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 8000 },
          error: { duration: 10000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "",
          },
        }}
      />
    </>
  )
}
