import { useState } from "react";
import { HeaderIndex } from "../../components/RouterRender";

const AmeacasSimples = () => {
	const [testState] = useState("Página carregada com sucesso!");

	return (
		<>
			<HeaderIndex />
			<div style={{ padding: "2rem" }}>
				<h1>Teste - Página de Ameaças</h1>
				<p>{testState}</p>
				<p>Se você está vendo esta mensagem, a página está funcionando.</p>
			</div>
		</>
	);
};

export default AmeacasSimples;
