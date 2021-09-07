import React, { useEffect, useState } from 'react'
import useGoogleSheets from 'use-google-sheets';

import Header from '../header'
import ErrorApp from '../error'
import Loading from '../loading'

import Election from '../election'

import { prepareDataExcel } from '../../utils';

const Admin = ({ electionName }) => {
    const [info, setInfo] = useState({})
    const [showElection, setShowElection] = useState(false)
    const [frentes, setFrentes] = useState([])
    
    const { data, loading, error, refetch } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEET_ID,
    });
    
    useEffect(() => {
        if(data.length > 0 && electionName !== '') {
            let conce = {}
            let conceData = {}

            switch(electionName) {
                case 'concejales':
                    conce = data.find(a => a.id === 'concejales')
                    conceData = data.find(a => a.id === 'concejales-data')
                    break;
                case 'diputados':
                    conce = data.find(a => a.id === 'diputados')
                    conceData = data.find(a => a.id === 'diputados-data')
                    break;
                case 'senadores':
                    conce = data.find(a => a.id === 'senadores')
                    conceData = data.find(a => a.id === 'senadores-data')
                    break;
            }
            
            let frentesTemp = prepareDataExcel(conce.data)
            
            setFrentes(frentesTemp)
            setInfo(conceData.data[0])
        }
    }, [data, electionName])
    
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
    
export default Admin;