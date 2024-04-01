// import logo from "./logo.svg";

// from video youtube : https://www.youtube.com/watch?v=sh4WrNGDvQM&t=277s
import { useEffect, useState } from "react";
import "./App.css";
import Books from "./components/Books";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/books";

const getApiData = () => {
  return axios.get(API_URL).then((response) => response.data);
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApiData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>HELLO !</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
