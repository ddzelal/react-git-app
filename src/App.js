import "./App.css";
import Display from "./components/Display";
import Header from "./components/Header";
import Search from "./components/Search";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function App() {
  const inputRef = useRef();
  const [fetch, setFetch] = useState('dzemildupljak');

  const [user, setUser] = useState({
    name: "Korisnik nije pronadjen!",
    bio: "error",
    image: "error",
  });

  const url = "https://api.github.com/users/";

  useEffect(() => {
    axios
      .get( url + fetch)
      .then(({ data }) => {
        setUser(data);
      })
      .catch((m) => console.log);
  }, [fetch]);

  return (
    <div>
      <Header />
      <Display user={user} />
      <Search setFetch={setFetch} inputRef={inputRef} />
    </div>
  );
}

export default App;
