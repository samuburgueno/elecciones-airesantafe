import React from 'react'

import LogoAireImg from '../../assets/images/logo-aire.png'
import colors from '../../colors'

const Footer = ({ whites, nulled, date }) => {
	return(
		<div style={Wrapper}>
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
				<span style={InfoNumber}>{date}</span>
			</div>
			
			<div>
				<img width="40px" height="40px" src={LogoAireImg} />
			</div>
		</div>
	)
}

export default Footer

const Wrapper = {
	backgroundColor: colors.grey,
	padding: "15px 45px",
	flexDirection: "row",
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