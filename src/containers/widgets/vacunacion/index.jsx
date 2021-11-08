import React, { useEffect, useState } from 'react'

import { numberWithCommas } from '../../../utils'
import colors from '../../../colors'

import LogoVacunacion from '../../../assets/images/logo-vacunacion.png'
import LogoAire from '../../../assets/images/logo-aire-letras.png'

import DosisPais from '../../../assets/images/dosis-pais.png'
import VacunasAplicadas from '../../../assets/images/vacunas-aplicadas.png'
import UnaDosis from '../../../assets/images/1-dosis.png'
import DosDosis from '../../../assets/images/2-dosis.png'

const DATA_URL = "https://especialess3.lanacion.com.ar/coronavirus_admin/jsons/vacunas/totales_argentina_monitor_publico_vacunacion.json"

const Vacunacion = () => {
	const [dataVacunacion, setDataVacunacion] = useState(false)

	useEffect(() => {
		FetchData()
	}, [])

	const FetchData = async () => {
		const response = await fetch(DATA_URL)
		const data = await response.json()
		setDataVacunacion(data[0])
	}

	return(
		<div style={WrapperVacunacion}>
			<div style={Header}>
				<div style={HeaderItem}>
					<img style={{padding: "5px"}} src={LogoVacunacion} width={45} alt="Vacunación en Argentina" />
				</div>
				
				<div style={{...HeaderItem, flex: 1}}>
					<h2 style={HeaderTitle}>Vacunación en Argentina</h2>
				</div>
				
				<div style={{...HeaderItem, borderLeft: "solid 3px white"}}>
					<img src={LogoAire} style={{padding: "0 5px"}} width="31px" alt="Aire de Santa Fe" />
				</div>
			</div>

			<div style={Content}>
				<div style={{flex: 1, flexDirection: "column", borderRight: "solid 1px #e6e6e6", paddingRight: "10px"}}>
					<div style={{...Item, borderBottom: "solid 1px #e6e6e6", paddingBottom: "15px"}}>
						<div style={{...RowCenter, justifyContent: "flex-start"}}>
							<img src={DosisPais} width={9} height={21} alt="Vacunación en Argentina" />
							<h4 style={ItemTitle}>Dosis en el país</h4>
						</div>
						<div><span style={Numero}>{dataVacunacion ? numberWithCommas(dataVacunacion.dosis_distribuidas) : 'Cargando...'}</span></div>
					</div>

					<div style={{...Item, borderTop: "solid 1px white", paddingTop: "15px"}}>
						<div style={{...RowCenter, justifyContent: "flex-start"}}>
							<img src={UnaDosis} width={9} height={21} alt="Vacunación en Argentina" />
							<h4 style={ItemTitle}>Vacunados 1 dosis</h4>
						</div>
						<div><span style={Numero}>{dataVacunacion ? numberWithCommas(dataVacunacion.total_dosis_1) : 'Cargando...'}</span></div>
					</div>
				</div>

				<div style={{flex: 1, flexDirection: "column", borderLeft: "solid 1px white", paddingLeft: "10px"}}>
					<div style={{...Item, borderBottom: "solid 1px #e6e6e6", paddingBottom: "15px"}}>
						<div style={{...RowCenter, justifyContent: "flex-start"}}>
							<img src={VacunasAplicadas} width={31} height={12} alt="Vacunación en Argentina" />
							<h4 style={ItemTitle}>Vacunas aplicadas</h4>
						</div>
						<div><span style={Numero}>{dataVacunacion ? numberWithCommas(dataVacunacion.total_dosis_aplicadas) : 'Cargando...'}</span></div>
					</div>

					<div style={{...Item, borderTop: "solid 1px white", paddingTop: "15px"}}>
						<div style={{...RowCenter, justifyContent: "flex-start"}}>
							<img src={DosDosis} width={19} height={21} alt="Vacunación en Argentina" />
							<h4 style={ItemTitle}>Vacunados 2 dosis</h4>
						</div>
						<div><span style={Numero}>{dataVacunacion ? numberWithCommas(dataVacunacion.total_dosis_2) : 'Cargando...'}</span></div>
					</div>
				</div>
			</div>

			<div style={Footer}>
				<p style={{fontSize: "10px"}}>
					<strong>Fuente:</strong> Ministerio de Salud de la Nación - Actualizado: {dataVacunacion.ultima_actualizacion}
				</p>
			</div>
		</div>
	)
}

export default Vacunacion

const WrapperVacunacion = {
	// width: "350px",
	// height: "300px",
}

const Header = {
	flexDirection: "row",
	justifyContent: "space-between",
	backgroundColor: colors.base,
}

const HeaderItem = {
	padding: "0 5px",
	justifyContent: "center"
}

const HeaderTitle = {
	color: colors.white,
	margin: 0,
	textTransform: "uppercase",
	fontSize: "13px"
}

const Content = {
	backgroundColor: colors.lightGrey,
	padding: "15px",
	flexDirection: "row",
}

const Item = {
	flex: 1
}

const ItemTitle = {
	fontSize: "11.3px",
	marginLeft: "2px"
}

const Footer = {
	textAlign: "center"
}

const RowCenter = {
	flexDirection: "row", 
	justifyContent: "center",
	alignItems: "center"
}

const Numero = {
	fontSize: "24px",
	color: colors.base,
	fontWeight: "bold",
	textAlign: "center"
}