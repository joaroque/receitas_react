import './TituloReceita.css'
import React from 'react';


function TituloReceita(props) {

	return (
		<section>
			<h2>{ props.titulo }</h2>
			<p className={ props.feedback.classificacao >= 3.5 ? 'green' : 'red' } >
				{ props.feedback.classificacao } de { props.feedback.comentario } comentarios
			</p>
		</section>
	)
}

export default TituloReceita;