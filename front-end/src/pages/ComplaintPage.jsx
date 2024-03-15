import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'
import InstitutionCard from '../components/InstitutionCard/InstitutionCard'

//get a list of all institutions available
    //maybe add new
    const data = [{
      institutinId: "1",
      institutinName: "National administration of Payment" 
    },{
      institutinId: "2",
      institutinName: "National Automobile Inspection" 
    }]

const ComplaintPage = () => {
    
      const renderedList = data.map( institution => 

        <InstitutionCard key={institution.institutinId} name = {institution.institutinName}/>
        );
       
  return (
    <>
        <Navbar />
        
        
        <main className='flex flex-col items-center space-y-10 '>
        <BreadcrumsStart />

        <p>Page dedicated to the people. Here you can file complaints, feedback and personal experience concerning
          National institutions. 
        </p>
        <p>The first step is to choose the institution that is concerning you:</p>
        
        <div className='flex flex-row space-x-10'>
            {renderedList}      
        </div>

        </main>
        
     </>
  )
}

export default ComplaintPage