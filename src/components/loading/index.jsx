import React from 'react'

import Spinner from '../../assets/images/spinner.gif'

const Loading = () => {
	return(
		<div style={Wrapper}>
			<img width="50" height="50" src={Spinner} alt="Cargando..." />
		</div>
	)
}

export default Loading;

const Wrapper = {
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
	padding: "100px"
}