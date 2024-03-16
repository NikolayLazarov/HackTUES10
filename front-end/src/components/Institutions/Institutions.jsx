import React, { useEffect, useState } from 'react'
import InstitutionAvatar from '../Avatars/InstitutionAvatar'
import InputRange from '../InputRange/InputRange';
import BestGrowth from '../Statistics/BestGrowth';

// const institutions = [{
//     averages: {
//         "speed": 1,
//         "politeness": 2,
//         "precision": 3,
//         "tech": 4,
//         "accessability": 9,
//         "pricing": 6,
//     },
//     mostRelevant: "accessability",
//     historicalRating: {
//         "speed": [0,1,2,3,4,1,3,4,10,3],
//         "politeness": [0,1,2,3,4,1,3,4,10,3],
//         "precision": [0,1,2,3,4,1,3,4,10,3],
//         "tech": [0,1,2,3,4,1,3,4,10,3],
//         "accessability": [0,1,2,3,4,1,3,4,10,3],
//         "pricing": [0,1,2,3,4,1,3,4,10,3]
//     },
//     institututionId: 1,
//     institututionName: "NAP"
// }];

const Institutions = ({institutionId}) => {
    const [institutions,setInstitutions] = useState([])
    useEffect(()=>{
        let res
        Promise.all([1,2,3,4,5].map((i)=>
            fetch(`http://172.233.40.193:3001/complaints//by-institution/${i}`).then((r)=>r.json()).then(r=>r.data)
        )).then(r=>setInstitutions(r))
    },[])
    const renderedList = institutions.map( institution => 
    <li className='flex flex-row items-center justify-center space-x-11' key={institution.institututionId}> 
    <a href="/institution-page" className='flex flex-row items-center justify-center space-x-11'> 
        <InstitutionAvatar /> 
        <h3>{institution.institututionName}</h3>
        {/* <InputRange currentValue={institution.averages[institution.mostRelevant]} /> */}
        <p>{institution.mostRelevant}</p>
        <BestGrowth graphData={institution.historicalRating[institution.mostRelevant]}/>

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