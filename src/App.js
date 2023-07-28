import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import LayoutAuth from "./Auth/LayoutAuth";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import { Home } from "./Container/home/Home";
import Profile from "./Container/Profile/Profile";
import Setting from "./Container/Profile/Setting";
import Upcoming from "./Component/UpComing/Upcoming";
import About from "./Container/About/About";
import MovieUpComing from "./Component/UpComing/Movie/MovieUpComing";
import Movie from "./Component/UpComing/Movie/Movie";
import Series from "./Container/Serie/Series";
import Favorites from "./Container/Profile/Favorite";
import Detail from "./page/Detail";
import Movies from "./Container/Movie/Movie";
import Search from "./Container/Search/Search";
import SearchMovie from "./Container/Search/SearchMovie";
import CastInfo from "./Component/UpComing/Movie/CastInfo";
import { useSelector } from "react-redux";
import WatchMovie from "./Container/Watch/WatchMovie";
import Oauth2 from "./Component/Oauth2/Oauth2";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcD4bRNBwVwGo7RYupJwLI2ogYhNiDcI4",
  authDomain: "movie-app-4d04f.firebaseapp.com",
  projectId: "movie-app-4d04f",
  storageBucket: "movie-app-4d04f.appspot.com",
  messagingSenderId: "351158092212",
  appId: "1:351158092212:web:584478aa6796ebd153b2e1",
  measurementId: "G-ZXJ6EXT0F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const auth = useSelector((item) => item.auth.isAuthenticated);
  // const navigate = useNavigate();
  // if (auth === false) navigate("/login");
  console.log("auth", auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/setting" element={<Setting />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route element={<LayoutAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Route>
        <Route path="/oauth2" element={<Oauth2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/setting" element={<Setting />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/movies" element={<Movies />} />
        <Route path="/searchMovie/:searchTerm" element={<SearchMovie />} />
        <Route path="/cast/:id" element={<CastInfo />} />
        <Route path="/watch/:id" element={<WatchMovie />} />
      </Routes>
    </>
  );
}

export default App;
