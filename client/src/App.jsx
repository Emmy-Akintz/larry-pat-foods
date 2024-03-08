import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State initialization moved inside the component function
  const [Index, setIndex] = useState('');

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2500');
        const data = await response.json();
        setIndex(data); // Assuming data is the string you want to display
      } catch (error) {
        console.error(error);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Return JSX from the component function
  return (
    <>
      {Index && <div>{Index}</div>}
    </>
  );
}

export default App;
