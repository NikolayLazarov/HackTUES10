import React from 'react'

const BreadcrumsStart = ({step}) => {
    // const color = 

    let firstBLock = <div className="timeline-start timeline-box">Institution</div>;
    let secondBlock = <div className="timeline-start timeline-box">Choose Location</div>
    let thirdBLock =     <div className="timeline-start timeline-box">File Complaint</div>

    if (step ===1){
      firstBLock = <div className="timeline-start timeline-box bg-primary">Institution</div>;
    }else if (step === 2){
      firstBLock = <div className="timeline-start timeline-box bg-neutral">Institution</div>;
      secondBlock = <div className="timeline-start timeline-box bg-primary">Choose Location</div>
     }else if (step === 3){
      firstBLock = <div className="timeline-start timeline-box bg-neutral">Institution</div>;
      secondBlock = <div className="timeline-start timeline-box bg-neutral">Choose Location</div>
      thirdBLock = <div className="timeline-start timeline-box bg-primary">File complaint</div>

     }
    // const secondBlock = ()<

  return (
    <ul className="timeline">
  <li>
    {firstBLock}
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    {secondBlock}
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    {thirdBLock}
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <hr/>
  </li>
</ul>
  )
}

export default BreadcrumsStart