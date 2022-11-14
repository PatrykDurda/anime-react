import './App.css';
import Title from './components/Title';
import Todo from './components/Todo';

import { useState, useEffect } from "react";


export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://gogoanime.consumet.org/popular`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Title />
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
        <ul>
        {data &&
            data.map(({ animeId, animeTitle, animeImg, releasedDate, animeUrl }) => (
              <Todo key={animeId} animeId={animeId} animeTitle={animeTitle} animeImg={animeImg} releasedDate={releasedDate} animeUrl={animeUrl}></Todo>
            ))}
        </ul>
    </div>
  );
}