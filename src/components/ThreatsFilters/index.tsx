import React from "react";
import * as S from "./styles";

interface ThreatsFiltersProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	selectedType: string;
	setSelectedType: (type: string) => void;
	selectedClassification: string;
	setSelectedClassification: (classification: string) => void;
	uniqueTypes: string[];
	uniqueClassifications: string[];
	onClearFilters: () => void;
	resultsCount: number;
	totalCount: number;
}

const ThreatsFilters: React.FC<ThreatsFiltersProps> = ({
	searchTerm,
	setSearchTerm,
	selectedType,
	setSelectedType,
	selectedClassification,
	setSelectedClassification,
	uniqueTypes,
	uniqueClassifications,
	onClearFilters,
	resultsCount,
	totalCount,
}) => {
	return (
		<S.FiltersContainer>
			<S.SearchSection>
				<S.SearchInput
					type="text"
					placeholder="Buscar ameaças por nome..."
					value={searchTerm}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
				/>
			</S.SearchSection>

			<S.FiltersSection>
				<S.FilterGroup>
					<S.FilterLabel>Tipo</S.FilterLabel>
					<S.FilterSelect
						value={selectedType}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedType(e.target.value)}
					>
						<option value="">Todos os tipos</option>
						{uniqueTypes.map((type) => (
							<option key={type} value={type}>
								{type}
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.FilterGroup>
					<S.FilterLabel>Classificação</S.FilterLabel>
					<S.FilterSelect
						value={selectedClassification}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
							setSelectedClassification(e.target.value)
						}
					>
						<option value="">Todas as classificações</option>
						{uniqueClassifications.map((classification) => (
							<option key={classification} value={classification}>
								{classification}
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.FilterGroup>
					<S.ClearButton onClick={onClearFilters}>Limpar Filtros</S.ClearButton>
				</S.FilterGroup>
			</S.FiltersSection>

			<S.ResultsInfo>
				Mostrando {resultsCount} de {totalCount} ameaças
			</S.ResultsInfo>
		</S.FiltersContainer>
	);
};

export default ThreatsFilters;
