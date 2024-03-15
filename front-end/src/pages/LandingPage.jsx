import React from 'react'
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
  return (
    <>
        <nav>
              <Navbar/>
        </nav>
        <article className='flex flex-row items-center justify-center space-x-40'>
          <div className='container_best_statistics w-96 space-y-5'>

              <div className='space-y-5' >
              <section className=' flex flex-col '>
                    <WholeComplaintsComponent  institutionName={"Bulgaria"} complainsNumber={mostCompNUm}/>
                  </section>
                  <section className=' flex flex-col'>
                    {/* Fix */}
                    <BestDataComponent institutionName={"Bulgaria"} value={mostCompNUm}/>                  
                  </section>
                  <section className=' flex flex-col'>
                    {/* fix */}
                      <WorstDataComponent institutionName={"Worst"} value={0.0}/>
                  </section>
              </div>
              <Dividor />
              <div>
                <section className=' flex flex-col basis-1/4'>
                        <BestGrowth institutionName={"BestRating"} values={[1,2,3,4,5,6]}/>
                    </section>
              </div>

          </div>
          
            <div className='container_avarage_statistic basis-1/2 '> 
              <InstitutionsAvarageStatistics institutionName={"Bulgaria"} values={[1,2,2,3,4,5,10,13]}/>
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