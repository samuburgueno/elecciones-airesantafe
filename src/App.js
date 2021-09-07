import React, { useEffect, useState } from 'react'
import useGoogleSheets from 'use-google-sheets';

import Header from './components/header'
import ErrorApp from './components/error'
import Loading from './components/loading'

import Election from './components/election'

import { prepareDataExcel } from './utils';

const App = () => {
  const [info, setInfo] = useState({})
  const [showElection, setShowElection] = useState(false)
  const [frentes, setFrentes] = useState([])

  const { data, loading, error, refetch } = useGoogleSheets({
    apiKey: "AIzaSyAIiGqOM-tppotenVJQ6Wq1G2ZA50r-A3U",
    sheetId: "186yFCW3IJlCdubK8OZyQuZbnPA88eev2WKYdySoR6rw",
  });

  useEffect(() => {
    if(data.length > 0) {
      const conce = data.find(a => a.id === 'concejales')
      const conceData = data.find(a => a.id === 'concejales-data')
      
      let frentesTemp = prepareDataExcel(conce.data)
      
      setFrentes(frentesTemp)
      setInfo(conceData.data[0])
    }
  }, [data])

  useEffect(() => {
    if(!loading && frentes.length !== 0 && info?.titulo) {
      setShowElection(true)
    }

  }, [loading, info, frentes])

  const refresh = () => {
    setShowElection(!showElection)
    refetch()
  }

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
        <Election 
          refresh={refresh}
          frentes={frentes}
          info={info} />
      }
    </div>
  );
}

export default App;