import './App.css'
import Top10 from './Top10';

function App() {
   const today = new Date();
   let year = today.getFullYear();
   let month = today.getMonth();
   let day = today.getDay();

   if (day < 10) day = '0' + day
   if (month < 10) month = '0' + month


  return (  
    <>
      <main>
        <h1 className='main-title'> TOP 10 SONG in SPOTIFY TODAY</h1>
        <h2 className='current-date'>{day}-{month}-{year}</h2>
        <Top10></Top10>
      </main>
    </>
  )
}

export default App
