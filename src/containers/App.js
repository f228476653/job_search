import React, { useState, useEffect} from 'react'
import './App.css';
import Navbar from '../components/Navbar'
import CardList from '../components/CardList'
import { createFilter } from 'react-search-input';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ChangeOrder } from '../util/ChangeOrder'

const KEYS_TO_FILTERS = [
  "title",
  "company.name"
]

function App() {
  const [ searchField, setSearchField ] = useState("");
  //https://zh-hant.reactjs.org/docs/hooks-state.html
  const [map, setMap] = useState(false);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [jobsData, updateJobsData] = useState([]);
 
  const jobFilter = searchField =>
    jobsData.filter(createFilter(searchField, KEYS_TO_FILTERS))

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth)
    })
  }, [])
  useEffect(() => {
    fetchData();
  }, [])

  //console.log('---')
  const tempArray = []
  const fetchData = () => {
    const client = new ApolloClient({
      uri: 'https://api.graphql.jobs/'
    });
    client
      .query({
        query: gql`
          query job{
            jobs {
              id,
              title,
              company {
                name,
                websiteUrl,
                logoUrl
              } ,
              cities{
                name,
                country{
                  name
                }
              }
              applyUrl,
              postedAt,
              updatedAt
            }
        }
        `
      })
      .then(data => data.data.jobs.map((job,i) => {
        tempArray.push(job)
      }))
      //.then(data => console.log(typeof(Array(data.data.jobs))))
      //.then(data => updateJobsData(data.data.jobs))
      .then(data=> updateJobsData(ChangeOrder(tempArray)))
      .catch(error => console.error(error))
    }

  // useEffect(() => {
  //   updateJobsData(client
  //   .query({
  //     query: JOBS_DATA_QUERY
  //   })
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error)));
  // }, [])
  // console.log(jobsData);

  return (
    <div className="App">
      <div className="flex flex-column min-vh-100 tc">
        <header className="custom--unselectable fixed top-0 w-100 white custom--shadow-4 z-3 bg-blue">
          <Navbar 
            onSearchChange={e => setSearchField(e.target.value)}
            winWidth={winWidth}
            onMapClick={() => setMap(!map)}
            onLogoClick={() => setMap(false)}
          />
        </header>
        <main className="flex flex-wrap justify-center">
            <CardList 
              jobsData = {jobFilter(searchField)} 
              sizePerPage = {20}
            />
        </main>
        <footer className="custom--unselectable w-100 h3 flex items-center justify-center justify-end-l white custom--bg-additional3 z-2">
        </footer>
      </div>
    </div>
  )
}

export default App
