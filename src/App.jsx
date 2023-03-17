import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
// import SavedCards from "./pages/SavedCards";
// import AddNewCard from "./pages/AddNewCard";
import BuyTicket from "./pages/BuyTicket";
import ConfirmTicket from "./pages/ConfirmTicket";
import Booking from "./pages/Booking";
import Requirements from "./pages/Requirements";
import TherapistCreate from "./pages/TherapistCreate";
import ThanksPage from "./pages/ThanksPage";
import Pay from "./pages/Pay";
import Appointments from "./pages/Appointments";
import { useSelector } from "react-redux";
import { selectUser } from "./features/users/usersSlice";

function App() {
  const { currentUser } = useSelector(selectUser);
  return (
    <main className="flex flex-col min-h-screen ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/create-therapist" element={<TherapistCreate />} />
        <Route path="/thankyou/:tickets" element={<ThanksPage />} />
        <Route
          path="/profile"
          element={currentUser ? <Profile /> : <Login />}
        />
        <Route
          path="/appointments"
          element={currentUser ? <Appointments /> : <Login />}
        />
        <Route
          path="/tickets"
          element={currentUser ? <BuyTicket /> : <Login />}
        />
        <Route
          path="/payment/:id"
          element={currentUser ? <Pay /> : <Login />}
        />
        <Route
          path="/booking"
          element={currentUser ? <Booking /> : <Login />}
        />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
