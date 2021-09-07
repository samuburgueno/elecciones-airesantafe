export const prepareDataExcel = (data) => {
    let totalesPorFrenteTemp = []
    data.map((c) => {
        const actual = totalesPorFrenteTemp[c.idFrente]
        totalesPorFrenteTemp[c.idFrente] = (actual ? actual : 0) + parseInt(c.votos)
    })
    
    let frentesTemp = data.reduce((r, a) => {
    if(r[a.idFrente] === undefined || r[a.idFrente].length < 2) {
        r[a.idFrente] = [...r[a.idFrente] || [], a]
    }

    return r
    }, [])
    
    // Remuevo el elemento vacio
    frentesTemp.shift()
    let frentesFinal = []

    frentesTemp.map((frente) => {
        frentesFinal.push({
            totalVotos: totalesPorFrenteTemp[frente[0].idFrente],
            candidato: frente[0],
            segundo: frente.length > 1 ? frente[1] : false
        })
    })
    frentesFinal.sort((a, b) => a.totalVotos > b.totalVotos ? -1 : 1)

    return frentesFinal
}