export const prepareDataExcel = (data) => {
    let totalesPorFrenteTemp = []
    data.map((c) => {
        const actual = totalesPorFrenteTemp[c.idFrente]
        totalesPorFrenteTemp[c.idFrente] = (actual ? actual : 0) + parseInt(c.votos)
        return true
    })

    let frentesTemp2 = data.reduce((r, a) => {
        r[a.idFrente] = [...r[a.idFrente] || [], a]
        return r
    }, [])

    frentesTemp2.map((frente) => {
        frente.sort((a, b) => parseInt(a.votos) > parseInt(b.votos) ? -1 : 1)
        return true
    })
    
    // let frentesTemp = data.reduce((r, a) => {
    //     if(r[a.idFrente] === undefined || r[a.idFrente].length < 2) {
    //         r[a.idFrente] = [...r[a.idFrente] || [], a]
    //     }
    //     return r
    // }, [])
    
    // Remuevo el elemento vacio
    frentesTemp2.shift()
    let frentesFinal = []

    frentesTemp2.map((frente) => {
        frentesFinal.push({
            totalVotos: totalesPorFrenteTemp[frente[0].idFrente],
            candidato: frente[0],
            segundo: frente.length > 1 ? frente[1] : false
        })
        return true
    })
    frentesFinal.sort((a, b) => a.totalVotos > b.totalVotos ? -1 : 1)

    console.log(frentesFinal)

    return frentesFinal
}