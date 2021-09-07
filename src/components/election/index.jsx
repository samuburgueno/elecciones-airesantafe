import React, { useRef, useEffect, useState } from 'react'

import Header from '../header'
import Footer from '../footer'
import Candidate from '../candidate'

import ArrowLeft from '../../assets/images/arrow-left.png'
import ArrowRight from '../../assets/images/arrow-right.png'

import './style.css'

const Election = ({ info, frentes, refresh }) => {
	const [move, setMove] = useState(250)

	const size = useWindowSize();
	const refSlider = useRef()

	const handlerLeft = () => {
		refSlider.current.scrollTo(refSlider.current.scrollLeft - move, 0)
	}

	const handlerRight = () => {
		refSlider.current.scrollTo(refSlider.current.scrollLeft + move, 0)
	}

	useEffect(() => {
		setMove(size.width > 768 ? 250 : 460)
	}, [size.width])

	return(
		<div style={Wrapper}>
			<Header
				percent={info.mesasEscrutadas} 
				title={info.titulo} />

			<div style={WrapperSlide}>
				<div style={WrapperButton}>
					<button className="Button" style={{...Button, left: 0}} onClick={handlerLeft}>
						<img width="50px" height="50px" src={ArrowLeft} alt="Scroll a la Izquierda" />
					</button>
				</div>
				
				{frentes.length > 0 &&
					<div ref={refSlider} style={WrapperCandidates}>
						{frentes.map((frente) => (
							<Candidate 
								key={frente.candidato.idFrente}
								{...frente.candidato} 
								segundo={frente.segundo} 
								totalVotos={frente.totalVotos} 
								totalVotosValidos={info.votosValidos} />
						))}
					</div>
				}
				
				<div style={WrapperButton}>
					<button className="Button" style={{...Button, right: 0}} onClick={handlerRight}>
						<img width="50px" height="50px" src={ArrowRight} alt="Scroll a la Derecha" />
					</button>
				</div>
			</div>

			<Footer
				refresh={refresh}
				whites={info.blancos}
				nulled={info.nulos}
				updated={info.horaActualizacion}
				date="12:30AM" />
		</div>
	)
}

export default Election

const Wrapper = {}

const WrapperSlide = {
	flexDirection: "row",
	position: "relative"
}

const WrapperCandidates = {
	flexDirection: "row",
	padding: "0 15px",
	overflow: "auto",
	flex: 1
}

const Button = {
	backgroundColor: "transparent",
	border: 0,
	position: "absolute",
	top: 0,
	bottom: "-120px"
}

const WrapperButton = {
	justifyContent: "center"
}

const useWindowSize = () => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
	  width: undefined,
	  height: undefined,
	});
	useEffect(() => {
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }
	  // Add event listener
	  window.addEventListener("resize", handleResize);
	  // Call handler right away so state gets updated with initial window size
	  handleResize();
	  // Remove event listener on cleanup
	  return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
  }