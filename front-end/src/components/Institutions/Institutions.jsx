import React from 'react'
import InstitutionAvatar from '../Avatars/InstitutionAvatar'
import InputRange from '../InputRange/InputRange';
import GraphicEmelement from '../GraphicsElement/GraphicEmelement';


const institutions = [{
    averages: {
        "speed": 1,
        "politeness": 2,
        "precision": 3,
        "tech": 4,
        "accessability": 9,
        "pricing": 6,
    },
    mostRelevant: "accessability",
    historicalRating: {
        "speed": [0,1,2,3,4,1,3,4,10,3],
        "politeness": [0,1,2,3,4,1,3,4,10,3],
        "precision": [0,1,2,3,4,1,3,4,10,3],
        "tech": [0,1,2,3,4,1,3,4,10,3],
        "accessability": [0,1,2,3,4,1,3,4,10,3],
        "pricing": [0,1,2,3,4,1,3,4,10,3]
    },
    institututionId: 1,
    institututionName: "NAP"
}];

const Institutions = () => {
    
    const renderedList = institutions.map( institution => 
    <li className='flex flex-row items-center justify-center space-x-11' key={institution.institututionId}> 
    <a href="/institution-page" className='flex flex-row items-center justify-center space-x-11'> 
        <InstitutionAvatar /> 
        <h3>{institution.institututionName}</h3>
        <InputRange currentValue={institution.averages[institution.mostRelevant]} />
        <p>{institution.mostRelevant}</p>
        <GraphicEmelement mostRelevant={institution.historicalRating[institution.mostRelevant]}/>

    </a>
        </li>
    );
  
    return (
    <>
        {renderedList}
    </>
);
}

export default Institutions