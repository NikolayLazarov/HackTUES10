import React from 'react'
import { useState, useEffect} from 'react'
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
  const [generalStats,setGeneralStats] = useState(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    fetch('http://172.233.40.193:3001/complaints/global-stats').then(r=>r.json()).then(({data})=>{
      setGeneralStats(data)
    })
  },[])

  return (
    <>
        <nav>
              <Navbar/>
        </nav>
        <article className='flex flex-row justify- '>
              <section className=' flex flex-col'>
                <WholeComplaintsComponent complainsNumber={generalStats && generalStats.totalComplaintsCount}/>
              </section>
              <section className=' flex flex-col'>
                <BestDataComponent data={generalStats && generalStats.topRated}/>                  
              </section>
              <section className=' flex flex-col'>
                  <WorstDataComponent data={generalStats && generalStats.worstRated}/>
              </section>
              <section className=' flex flex-col'>
                  <BestRating graphData={generalStats && generalStats.overallRating}/>
              </section>
        </article>

        <main className='institutions'>
            <Institutions />
        </main>
    </>
  )
}

export default LandingPage