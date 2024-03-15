import React from 'react'

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