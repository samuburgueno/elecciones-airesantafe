import React from 'react'

import colors from '../../colors'
import LogoPasoImg from '../../assets/images/logo-paso-2021.png'
import './style.css'

const Header = ({ title, percent }) => {	
	return(
		<div className="HeaderResponsive" style={Wrapper}>
			<div style={LogoPaso}>
				<img width="244px" src={LogoPasoImg} alt="Elecciones PASO 2021" />
			</div>
			
			<div style={Title}>
				<h2>{title}</h2>
			</div>
			
			{percent &&
				<div style={Percent}>
					<span style={PercentLabel}>Mesas escrutadas</span>
					<span style={PercentNumber}>{percent}</span>
				</div>
			}
		</div>
	)
}

export default Header

const Wrapper = {
	borderBottom: "solid 1px",
	borderColor: colors.grey,
	padding: "5px 30px",
}

const LogoPaso = {
	alignItems: "center",
	justifyContent: "center",
	padding: "0 15px"
}

const Title = {
	flex: 1,
	alignItems: "center",
	textAlign: "center"
}

const Percent = {
	padding: "0 15px",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "row",
}

const PercentLabel = {
	marginRight: "15px",
	fontSize: "13px",
	color: colors.greyText
}

const PercentNumber = {
	color: colors.base,
	fontWeight: "bold",
	fontSize: "40px",
	paddingLeft: "10px",
	borderLeft: "solid 1px " + colors.grey
}