import React from 'react'
import { useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Nabvar'
import WorstDataComponent from '../components/Statistics/WorstDataComponent'
import BestDataComponent from '../components/Statistics/BestDataComponent'
import Institutions from '../components/Institutions/Institutions'
// import MostComplaintsStatistic from '../components/Statistics/MostComplaintsStatistic'
import WholeComplaintsComponent from '../components/Statistics/WholeComplaintsComponent'
import InstitutionsAvarageStatistics from '../components/Statistics/InstitutionsAvarageStatistics'
import Dividor from '../components/Dividor/Dividor'
import BestGrowth from '../components/Statistics/BestGrowth'

const LandingPage = () => {
  const mostCompNUm = 12
  const [generalStats,setGeneralStats] = useState(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    fetch('http://172.233.40.193:3001/complaints/global-stats').then(r=>r.json()).then(({data})=>{
      setGeneralStats(data)
    })
  },[])
  console.log({generalStats})
  return (
    <>
        <nav>
              <Navbar/>
        </nav>

        <article className='flex flex-row items-center justify-center space-x-40'>
        <div className='container_best_statistics w-96 space-y-5'>
        <div className='space-y-5' >
              <section className=' flex flex-col '>
               <WholeComplaintsComponent  complainsNumber={generalStats && generalStats.totalComplaintsCount}/>
             </section>

             <section className=' flex flex-col'>
                    {/* Fix */}
                    <BestDataComponent data={generalStats && generalStats.topRated}/>                  
                  </section>


              <section className=' flex flex-col'>
                  <WorstDataComponent data={generalStats && generalStats.worstRated}/>
              </section>

              </div>
              <Dividor />
              <div>
                <section className=' flex flex-col basis-1/4'>
                  <BestGrowth graphData={generalStats && generalStats.bestGrowing.chartData}/>
                </section>
              </div>

          </div>
          
            <div className='container_avarage_statistic basis-1/2 '> 
              <InstitutionsAvarageStatistics graphData={generalStats && generalStats.overallRating}/>
            </div>
            
        </article>
        <Dividor />

        <main className='institutions '>
            <Institutions />
        </main>
    </>
  )
}

export default LandingPage