import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

import Home from "./views/home/home..jsx";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./views/about/about.jsx";
import Detail from "./views/detail/detail.jsx";

import ErrorPage from "./views/error/errorpage.jsx";
import LandingPage from "./views/landing/landing.jsx";

import "./App.css";
import Favorites from "./views/favorites/favorites.jsx";

function App() {
  const location = useLocation();
  const [searchString, setSearchString] = useState("");
  const [filtered, setFiltered] = useState([]);

  //*Login
  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  // const username = "ejemplo@gmail.com";
  // const password = "1password";

  // function loginHandler(userData) {
  //   if (userData.password === password && userData.email === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }

  function loginHandler(userData) {
    const {email, password} = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(`${URL}?email=${email}&password=${password}`).then(({data}) => {
      const {access} = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //*

  //? LOGOUT
  function logoutHandler() {
    setAccess(false);
    navigate("/");
  }

  //?

  function changeHandler(e) {
    e.preventDefault();
    let input = e.target.value;

    setSearchString(input);

    //* BUSQUEDA POR NOMBRE
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setFiltered((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  function closeHandler(id) {
    let found = filtered.find((character) => character.id === id);
    let deleted = filtered.filter((character) => character.id !== found.id);

    setFiltered(deleted);
  }

  async function searchHandler() {
    try {
      let found = filtered.find(
        (character) => character.id === Number(searchString)
      );

      if (!found) {
        let response = (
          await axios.get(
            // `https://rickandmortyapi.com/api/character/${searchString}`
            `http://localhost:3001/rickandmorty/character/${searchString}`
          )
        ).data;

        if (response.name) {
          setFiltered([...filtered, response]);
        }
      } else {
        alert("El personaje ya ha sido agregado!");
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Navbar
          onSearch={searchHandler}
          onChange={changeHandler}
          logout={logoutHandler}
          randomize={randomHandler}
        />
      )}

      <Routes>
        <Route exact path="/" element={<LandingPage login={loginHandler} />} />
        <Route
          path="/home"
          element={<Home characters={filtered} onClose={closeHandler} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
