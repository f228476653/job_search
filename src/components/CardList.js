import React from 'react'
import Card from './Card'

const CardList = ( {jobsData,sizePerPage }) => {
    //console.log('111')
    //console.log(state.jobsData)
return (
        <div className="w-100">
            {
            jobsData.map((job, i) => (
                <Card key={i} job={job} />
            ))}
        </div>
    );
}

export default CardList
