import { useEffect, useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setIsError(true);
        return;
      }
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!isLoading ? (
        <main>
          <Tours tours={tours} removeTour={removeTour} />
        </main>
      ) : (
        <Loading />
      )}
      {tours.length === 0 ? (
        <main>
          <h2>No Tours Left</h2>
          <button
            type='button'
            className='btn btn-hipster'
            style={{ marginTop: '2rem' }}
            onClick={fetchData}
          >
            Get Tours Back
          </button>
        </main>
      ) : (
        'no'
      )}
      {isError && <h3>There is an error fetching data</h3>}
    </>
  );
};
export default App;
