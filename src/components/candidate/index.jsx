import React, { useEffect, useState } from 'react'

import colors from '../../colors'
import './style.css'

const Candidate = ({ 
	frente, 
	frenteId, 
	lista, 
	candidato, 
	colorCodigo, 
	votos, 
	segundo, 
	totalVotos, 
	totalVotosValidos, 
	porcentaje,
	electionName,
	idCandidato }) => {
	const [percent, setPercent] = useState(0)

	useEffect(() => {
		let temp = (totalVotos/totalVotosValidos)*100
		setPercent(temp.toFixed(2).replace('.', ','))
	}, [frenteId, totalVotos, totalVotosValidos])

	return(
		<div className="CandidateResponsive" style={Wrapper}>
			
			<div style={WrapperHeader}>
				<div style={WrapperFrente}>
					<h4 style={{...LabelFrente, color: colorCodigo}}>{frente}</h4>
				</div>
				
				<div style={WrapperImage}>
					<img style={ImageStyle} src={`${process.env.PUBLIC_URL}/images/${electionName}/${idCandidato}.png`} alt={`${candidato} ${frente}`} />
				</div>
			</div>
			
			<div className="WrapperBody" style={WrapperBody}>
				<div style={WrapperCandidato}>
					<h4 style={{...LabelFrente}}>{candidato}</h4>
				</div>
			</div>

			{/*<div style={WrapperOtras}>
				{segundo !== false &&
					<>
						<span style={LabelOtras}>{segundo.candidato}</span>
						<span style={{...LabelOtras, marginTop: "5px"}}>{parseInt(segundo.votos).toLocaleString("es-ar")} votos</span>
						
						{segundo.porcentaje &&
							<span style={{...LabelOtras, marginTop: "5px"}}>{segundo.porcentaje}%</span>
						}

						{!segundo.porcentaje &&
							<span style={{...LabelOtras, marginTop: "5px"}}><br/></span>
						}
					</>
				}
				
				{segundo === false &&
					<>
						<span style={LabelOtras}><br/></span>
						<span style={{...LabelOtras, marginTop: "5px"}}><br/></span>
						<span style={{...LabelOtras, marginTop: "5px"}}><br/></span>
					</>
				}
			</div>*/}

			<div style={WrapperPercent}>
				<div style={WrapperLista}>
					<span style={{...LabelLista, marginTop: "5px", paddingBottom: "15px"}}>{parseInt(votos).toLocaleString("es-ar")} votos</span>
					{/*{porcentaje &&
						<span style={{...LabelLista, marginTop: "5px"}}>{porcentaje}%</span>
					}*/}
				</div>

				<span style={{...Percent, color: colorCodigo}}>{percent}%</span>
			</div>
		</div>
	)
}

export default Candidate

const Wrapper = {
	margin: "0 15px",
	// justifyContent: "space-between",
}

const WrapperHeader = {
	display: "block"
}

const WrapperFrente = {
	alignItems: "flex-start",
	justifyContent: "center",
	height: "100px",
	padding: "15px 0"
}

const LabelFrente = {
	fontSize: "24px",
	margin: "20px 0",
}

const WrapperBody = {
	// borderBottom: "solid 1px" + colors.grey,
}

const WrapperImage = {
	borderTop: "solid 1px" + colors.grey,
	borderBottom: "solid 1px" + colors.grey
}

const ImageStyle = {
	height: "100px",
	width: "100px",
}

const WrapperCandidato = {}

const LabelLista = {
	fontSize: "16px",
	fontWeight: "bold",
	borderBottom: "solid 1px" + colors.grey,
}

const WrapperLista = {
	// paddingBottom: "15px"
}

// const WrapperOtras = {
// 	// marginTop: "20px",
// 	padding: "20px 0",
// 	// borderTop: "solid 1px" + colors.grey,
// 	borderBottom: "solid 1px" + colors.grey	
// }

// const LabelOtras = {
// 	fontSize: "16px",
// 	color: colors.greyText,
// 	fontWeight: "bold",
// }

const WrapperPercent = {
	borderBottom: "solid 1px" + colors.grey,
	marginBottom: "15px",
}

const Percent = {
	fontSize: "40px",
	// padding: "15px 0",
	fontWeight: "bold",
	paddingTop: "10px",
	paddingBottom: "10px",
}