import React from 'react'

const Card = ( { job }) => {
    // console.log(job.company.logoUrl)
    return(
            <div className="tc grow bg-washed-red br3 pa3 ma3 dib bw2 shadow-5 h-10 w-25" >
                <article >
                    <div className="pv2 ph3 mt2 h3">
                        <h1 className="f6 ttu tracked navy">{job.title}</h1>
                        <h2 className="f6 dark-gray">{`- ${job.company.name}`} </h2>
                    </div >
                    <div className="mid-gray pa1 ph3">
                        {job.cities.length >0 ? <h6>{job.cities[0].name},{job.cities[0].country.name}</h6> : <h6></h6>}
                    </div>
                    <div className="pv2 ph3 mt2 h5">
                        {(job.company.logoUrl === null || job.company.logoUrl ===undefined || job.company.logoUrl=== "") ?
                            <img src= {`https://loremflickr.com/320/300?random=${job.id}`} className="w-100 db h5 br-100" alt="" ></img>
                            : <img src= {`${job.company.logoUrl}`} className="w-100 db h5 br-100" alt=""></img> 
                        }
                    </div>
                    <div className="pa4 ph3">
                        <a href={job.applyUrl} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green">Apply Now</a>
                        <small className="gray db pv2">UPDATE AT - <time>{job.updatedAt}</time></small>
                    </div>
                </article> 
            </div>
    )
}

export default Card