import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import WorstDataComponent from '../components/Statistics/WorstDataComponent'
import BestDataComponent from '../components/Statistics/BestDataComponent'
import Institutions from '../components/Institutions/Institutions'
// import MostComplaintsStatistic from '../components/Statistics/MostComplaintsStatistic'
import WholeComplaintsComponent from '../components/Statistics/WholeComplaintsComponent'
import BestRating from '../components/Statistics/BestRating'

const LandingPage = () => {
  const mostComp = "Nap"
  const mostCompNUm = 12
  return (
    <>
        <nav>
              <Navbar/>
        </nav>
        <article className='flex flex-row justify- '>
              <section className=' flex flex-col'>
                <WholeComplaintsComponent  institutionName={"Bulgaria"} complainsNumber={mostCompNUm}/>
              </section>
              <section className=' flex flex-col'>
                <BestDataComponent institutionName={"Bulgaria"} complainsNumber={mostCompNUm}/>                  
              </section>
              <section className=' flex flex-col'>
                  <WorstDataComponent institutionName={"Bulgaria"} complainsNumber={mostCompNUm}/>
              </section>
              <section className=' flex flex-col'>
                  <BestRating institutionName={"Bulgaria"} complainsNumber={mostCompNUm}/>
              </section>
        </article>

        <main className='institutions'>
            <Institutions />
        </main>
    </>
  )
}

export default LandingPage