import React from 'react'
import InstitutionAvatar from '../Avatars/InstitutionAvatar'
import InputRange from '../InputRange/InputRange';

const Institutions = () => {
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
    }]

    const renderedList = institutions.map( institution => {
    <li className='flex flex-row'> 
        <InstitutionAvatar /> 
        <InputRange currentValue={institution.averages[institution.mostRelevant]} />
        <p>{institution.mostRelevant}</p>
    </li>
    });
  
    return (
    <>
        {renderedList}
    </>
);
}

export default Institutions