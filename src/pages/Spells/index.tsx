import { useState } from "react";
import MagiaShowcase from "../../components/MagiaShowcase";
import SpellFilters from "../../components/SpellFilters";
import { useMagias } from "../../hooks/useData";
import { novasMagias, Magia } from "../../mocks/Spells/testspells";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Spells = () => {
	const { magias, loading, error } = useMagias();
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCirculo, setSelectedCirculo] = useState("");
	const [selectedCusto, setSelectedCusto] = useState("");
	const [selectedNatureza, setSelectedNatureza] = useState("");
	const [selectedConspecto, setSelectedConspecto] = useState("");

	if (loading) {
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div style={{ color: "black", padding: "20px" }}>Carregando magias...</div>
				</S.ShowcaseSection>
			</>
		);
	}

	if (error) {
		console.error("Erro ao carregar magias, usando dados de teste:", error);
	}

	const allMagias = magias.length > 0 ? magias : novasMagias;

	// Função para filtrar magias
	const filteredMagias = allMagias.filter((magia: Magia) => {
		// Filtro por nome
		const nameMatch = magia.nome.toLowerCase().includes(searchTerm.toLowerCase());

		// Filtro por círculo
		const circuloMatch = selectedCirculo === "" || magia.circulo.toString() === selectedCirculo;

		// Filtro por custo exato (agora numérico)
		const custoMatch = selectedCusto === "" || magia.custoPM.toString() === selectedCusto;

		// Filtro por natureza
		const naturezaMatch =
			selectedNatureza === "" ||
			magia.natureza.some((nat) => nat.toLowerCase() === selectedNatureza.toLowerCase());

		// Filtro por conspecto
		const conspectoMatch =
			selectedConspecto === "" ||
			magia.conspectos.some((cons) => cons.toLowerCase() === selectedConspecto.toLowerCase());

		return nameMatch && circuloMatch && custoMatch && naturezaMatch && conspectoMatch;
	});

	const handleClearFilters = () => {
		setSearchTerm("");
		setSelectedCirculo("");
		setSelectedCusto("");
		setSelectedNatureza("");
		setSelectedConspecto("");
	};

	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<SpellFilters
					searchTerm={searchTerm}
					onSearchChange={setSearchTerm}
					selectedCirculo={selectedCirculo}
					onCirculoChange={setSelectedCirculo}
					selectedCusto={selectedCusto}
					onCustoChange={setSelectedCusto}
					selectedNatureza={selectedNatureza}
					onNaturezaChange={setSelectedNatureza}
					selectedConspecto={selectedConspecto}
					onConspectoChange={setSelectedConspecto}
					onClearFilters={handleClearFilters}
				/>

				<S.ResultsInfo>
					Mostrando {filteredMagias.length} de {allMagias.length} magias
				</S.ResultsInfo>

				<MagiaShowcase magiasList={filteredMagias} />
			</S.ShowcaseSection>
		</>
	);
};

export default Spells;
