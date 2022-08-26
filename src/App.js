import './App.css';
import Display from './components/Display';
import Header from './components/Header';
import Search from './components/Search'
import React, {  useEffect , useState , useRef } from 'react';
import axios from 'axios';









function App() {
  const  inputRef = useRef();

  const [user, setUser] = useState({name: "notFound" ,
                                  bio: "notFound",
                                  image: "notFound"})

  useEffect(() => {  
    axios
    .get('https://api.github.com/users/'+ 'dzemildupljak')
    .then(({data}) => {
      
      setUser(data)
      
    })
    .catch((m) => console.log);
  
  }, [inputRef])

  console.log(inputRef)

  
  return (
    <div>
   <Header />
   <Display user={user} />
   <Search inputRef={inputRef} />
    </div>
  );
}

export default App;
