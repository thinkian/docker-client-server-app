import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [platform, setPlatform] = useState('React');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await (await fetch('/api')).json();

        setPlatform(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from {platform}!</h1>
      </header>
    </div>
  );
}

export default App;
