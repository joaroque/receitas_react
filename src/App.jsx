import './index.css'
import React, { useEffect, useState } from 'react';
import TituloReceita from './TituloReceita';
import ListaIngredientes from './ListaIngredientes';



function App() {
	// objecto receita
	const receitaInicial = {
		titulo: "Funge com Calulú",
		feedback: {
			classificacao: 4.5,
			comentario: 20
		},
		ingredientes: [
			{ nome: "Fuba", preparado: false },
			{ nome: "Rama", preparado: false },
			{ nome: "Óleo de palma", preparado: false },
			{ nome: "Peixe seco", preparado: false },
			{ nome: "Sal", preparado: false },
			{ nome: "Kiabo", preparado: true },
		]
	};

	// criando estado do obj receita
	const [ receita, setReceita ] = useState(receitaInicial);

	// criando estado da propeidade preparado
	const [ preparado, setPreparado ] = useState(false);

	// funcão listener que altera a variavel preparado
	function marcaPreparado(index) {
		// copiar o obj receita porque é imutável
		const receitaAtualizada = { ...receita };
		// invertendo o valor
		receitaAtualizada.ingredientes[index].preparado = !receitaAtualizada.ingredientes[index].preparado; 
		// atualizando o estado para o obj novo
		setReceita(receitaAtualizada);
	}

	// Adicionando o effect hook
	useEffect(() => {
		setPreparado(receita.ingredientes.every(i => i.preparado));
	}, [receita]);

	// retorna os componentes
	return (
		<section className="container">
			<h1>Receita React</h1>

			<TituloReceita 
				titulo={ receita.titulo } 
				feedback={ receita.feedback } />

			<ListaIngredientes  
				ingredientes={ receita.ingredientes }
				marcaPreparado={ marcaPreparado } />

			<span>{ preparado ? "Preparação concluída!" : "Continue preparando..."}</span>
		</section>
	);
}

export default App;