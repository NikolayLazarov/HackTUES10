import React from 'react'
import Navbar from '../components/Navbar/Nabvar'
import BreadcrumsStart from '../components/BreadCrums/BreadcrumsStart'

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
    

    const renderedData = data.map(institution => {
      <li><a href="complaint/:id">{institution.institutinName}</a></li>
    });

  return (
    <>
        <Navbar />

        {/* <h2>Form for </h2> */}
        <BreadcrumsStart />

        <p>Page dedicated to the people. Here you can file complaints, feedback and personal experience concerning
          National institutions. 
        </p>
        <p>The first step is to choose the institution that is concerning you:</p>

        {renderedData}
     </>
  )
}

export default ComplaintPage