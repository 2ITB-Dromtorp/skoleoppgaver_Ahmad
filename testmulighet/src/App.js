import './App.css';

function App() {
  const skibidi = () => {
    alert("Gjør ditt beste, og din potensiale vil gro med en voksende tankegang")
    window.location.href="https://www.youtube.com/watch?v=1xS93ReYT9I";
  }
  return (
  <div id='main' onClick={skibidi}>
    <img src="https://pics.craiyon.com/2023-09-23/b83e7fae22834d31b73bc70427d165bc.webp" width="100%" />
  </div>
  )
}

export default App;
