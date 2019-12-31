
export const ChangeOrder = (jobs) => {
    const temptArray = new Array(jobs.length)
    jobs.map((job,i) =>{
        if (job.company.logoUrl === null || job.company.logoUrl ===undefined || job.company.logoUrl=== "") {
            temptArray.push(job)
        }else {
            temptArray.unshift(job)
        }
    })
    console.log(temptArray)
    return temptArray
}