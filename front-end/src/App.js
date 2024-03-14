import './App.css';
import Institutions from './components/Institutions/Institutions';
import Navbar from './components/Navbar/Nabvar';
import BestDataComponent from './components/Statistics/BestDataComponent';
import WorstDataComponent from './components/Statistics/WorstDataComponent';

function App() {
  return (
      <>
          <nav>
              <Navbar/>
          </nav>
        <article className='flex flex-row justify- '>
              <section className=' flex flex-col'>
                <WorstDataComponent/>
                <WorstDataComponent/>

              </section>
              <section className=' flex flex-col'>
                <BestDataComponent />                  
              </section>
              <section className=' flex flex-col'>
                  <WorstDataComponent />
                  <WorstDataComponent />
              </section>

        </article>

        <main className='institutions'>
            <Institutions />
        </main>
          
      </>
  );
}

export default App;
