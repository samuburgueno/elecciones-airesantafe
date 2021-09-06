import React from 'react'

import Header from '../header'
import Footer from '../footer'
import Candidate from '../candidate'

const Election = ({ candidates, info }) => {

	return(
		<div>
			<Header
				percent={info.mesasEscrutadas} 
				title={info.titulo} />

			<div style={WrapperCandidates}>
			{candidates.map((candidate, index) => 
				<Candidate key={index} {...candidate} />
			)}
			</div>

			<Footer
				whites={info.blancos}
				nulled={info.nulos}
				date="" />
		</div>
	)
}

export default Election

const WrapperCandidates = {
	flexDirection: "row",
	padding: "0 30px",
	overflow: "auto"
}