import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import WorstDataComponent from '../components/Statistics/WorstDataComponent'
import BestDataComponent from '../components/Statistics/BestDataComponent'
import Institutions from '../components/Institutions/Institutions'

const LandingPage = () => {
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
  )
}

export default LandingPage