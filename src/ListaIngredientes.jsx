import './ListaIngredientes.css';
import React from 'react';


// componente da lista dos ingredientes
function ListaIngredientes(props) {
	const ingredientesLi = props.ingredientes.map((ingrediente, index) => {
		return (
			<li 
				key={index} 
				className={ ingrediente.preparado ? 'delete' : '' }
				onClick={ () => props.marcaPreparado(index) } > 
				{ingrediente.nome} 
			</li>
		);
	});

	return (
		<ul>
			{ingredientesLi}
		</ul>
	);
}

export default ListaIngredientes;