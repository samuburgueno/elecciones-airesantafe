import React from 'react'

import colors from '../../colors'
import Debug from '../../assets/images/debug.png'

const maxWidth = "220px"

const Candidate = ({ frente, frenteId, lista, candidato, colorCodigo, votos }) => {
	return(
		<div style={Wrapper}>
			
			<div style={WrapperHeader}>
				<div style={WrapperFrente}>
					<h4 style={{...LabelFrente, color: colorCodigo}}>{frente}</h4>
				</div>
				
				<div style={WrapperImage}>
					<img style={ImageStyle} src={Debug} />
				</div>
			</div>
			
			<div style={WrapperBody}>
				<div style={WrapperCandidato}>
					<h4 style={{...LabelFrente}}>{candidato}</h4>
				</div>			
				
				<div style={WrapperLista}>
					<span style={LabelLista}>{lista}</span>
					<span style={{...LabelLista, marginTop: "5px"}}>{votos} votos</span>
				</div>
			</div>

			<div style={WrapperOtras}>
				<span style={LabelOtras}>Otras listas</span>
				<span style={{...LabelOtras, marginTop: "5px"}}>100 votos</span>
			</div>

			<div style={WrapperPercent}>
				<span style={{...Percent, color: colorCodigo}}>00,00%</span>
			</div>
		</div>
	)
}

export default Candidate

const Wrapper = {
	maxWidth: maxWidth,
	margin: "0 15px",
	justifyContent: "space-between",
}

const WrapperHeader = {
	display: "block"
}

const WrapperFrente = {
	alignItems: "center",
	justifyContent: "center",
	height: "100px",
	padding: "15px 0"
}

const LabelFrente = {
	fontSize: "24px",
	margin: "20px 0",
}

const WrapperImage = {
	borderTop: "solid 1px" + colors.grey,
	borderBottom: "solid 1px" + colors.grey
}

const ImageStyle = {
	height: "100px",
	width: "100px",
}

const WrapperCandidato = {

}

const LabelLista = {
	fontSize: "16px",
	fontWeight: "bold",
	// maxWidth: maxWidth,
	// overflow: "hidden",
	// textOverflow: "ellipsis",
	// whiteSpace: "pre"
}

const WrapperLista = {

}

const WrapperOtras = {
	marginTop: "20px",
	padding: "20px 0",
	borderTop: "solid 1px" + colors.grey,
	borderBottom: "solid 1px" + colors.grey	
}

const LabelOtras = {
	fontSize: "16px",
	color: colors.greyText
}

const WrapperPercent = {
	borderBottom: "solid 1px" + colors.grey,
	marginBottom: "15px",
}

const Percent = {
	fontSize: "40px",
	padding: "15px 0",
	fontWeight: "bold"
}

const WrapperBody = {
	height: "190px",
}