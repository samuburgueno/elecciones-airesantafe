import React, { useEffect, useState } from 'react'
import useGoogleSheets from 'use-google-sheets';

import Header from './components/header'
import ErrorApp from './components/error'
import Loading from './components/loading'

import Election from './components/election'

const App = () => {
  const [candidates, setCandidates] = useState([])
  const [info, setInfo] = useState({})
  const [showElection, setShowElection] = useState(false)

  const { data, loading, error, refetch } = useGoogleSheets({
    apiKey: "AIzaSyAIiGqOM-tppotenVJQ6Wq1G2ZA50r-A3U",
    sheetId: "186yFCW3IJlCdubK8OZyQuZbnPA88eev2WKYdySoR6rw",
  });

  useEffect(() => {
    if(data.length > 0) {
      const conce = data.find(a => a.id === 'concejales')
      const conceData = data.find(a => a.id === 'concejales-data')

      setCandidates(conce.data)
      setInfo(conceData.data[0])
    }
  }, [data])

  useEffect(() => {
    if(!loading && candidates.length !== 0 && info?.titulo) {
      setShowElection(true)
    }

  }, [loading, candidates, info])

  return (
    <div className="App">
      {loading &&
        <>
          <Header title="Elecciones 2021" />
          <Loading />
        </>
      }

      {error &&
        <ErrorApp />
      }

      {showElection &&
        <Election candidates={candidates} info={info} />
      }
    </div>
  );
}

export default App;