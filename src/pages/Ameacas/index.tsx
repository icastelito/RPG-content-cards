import { useState } from "react";
import CreaturesList from "../../components/CreaturesList";
import ThreatsFilters from "../../components/ThreatsFilters";
import { useCreatures } from "../../hooks/useData";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Ameacas = () => {
	const { creatures, loading, error } = useCreatures();
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedType, setSelectedType] = useState("");
	const [selectedClassification, setSelectedClassification] = useState("");

	if (loading) {
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div>Carregando ameaças...</div>
				</S.ShowcaseSection>
			</>
		);
	}

	if (error) {
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div>Erro ao carregar ameaças: {error}</div>
				</S.ShowcaseSection>
			</>
		);
	}

	// Filtrar criaturas
	const filteredCreatures = creatures.filter((creature) => {
		const nameMatch = creature.name.toLowerCase().includes(searchTerm.toLowerCase());
		const typeMatch = selectedType === "" || creature.type === selectedType;
		const classificationMatch = selectedClassification === "" || creature.classification === selectedClassification;

		return nameMatch && typeMatch && classificationMatch;
	});

	// Obter tipos únicos para o filtro
	const uniqueTypes = [...new Set(creatures.map((creature) => creature.type))];

	// Obter classificações únicas para o filtro
	const uniqueClassifications = [...new Set(creatures.map((creature) => creature.classification))];

	const handleClearFilters = () => {
		setSearchTerm("");
		setSelectedType("");
		setSelectedClassification("");
	};

	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<ThreatsFilters
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					selectedType={selectedType}
					setSelectedType={setSelectedType}
					selectedClassification={selectedClassification}
					setSelectedClassification={setSelectedClassification}
					uniqueTypes={uniqueTypes}
					uniqueClassifications={uniqueClassifications}
					onClearFilters={handleClearFilters}
					resultsCount={filteredCreatures.length}
					totalCount={creatures.length}
				/>

				<CreaturesList creatures={filteredCreatures} />
			</S.ShowcaseSection>
		</>
	);
};

export default Ameacas;
