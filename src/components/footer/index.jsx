import React from 'react'

import LogoAireImg from '../../assets/images/logo-aire.png'
import colors from '../../colors'
import './style.css'

const Footer = ({ whites, nulled, updated, refresh }) => {
	return(
		<div className="FooterResponsive" style={Wrapper}>
			<div style={Info}>
				<span style={InfoLabel}>Votos en blanco</span>
				<span style={InfoNumber}>{whites}</span>
			</div>
			
			<div style={Info}>
				<span style={InfoLabel}>Votos nulos</span>
				<span style={InfoNumber}>{nulled}</span>
			</div>
			
			<div style={Info}>
				<span style={InfoLabel}>Actualización</span>
				<span style={InfoNumber}>{updated}</span>
			</div>
			
			<div>
				<img onClick={refresh} width="40px" height="40px" src={LogoAireImg} alt="Logo Aire de Santa Fe" />
			</div>
		</div>
	)
}

export default Footer

const Wrapper = {
	backgroundColor: colors.grey,
	padding: "15px 45px",
	justifyContent: "space-between",
	alignItems: "center"
}

const Info = {
	flexDirection: "row",
	alignItems: "center",
}

const InfoLabel = {
	color: colors.greyText,
	marginRight: "15px",
}

const InfoNumber = {
	borderLeft: "solid 1px white",
	paddingLeft: "15px",
	fontSize: "30px",
	fontWeight: "bold"
}