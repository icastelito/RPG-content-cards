import React from "react";
import * as S from "./styles";
import { useSpellFilterOptions } from "../../hooks/useSpellFilterOptions";
import { SpellFiltersProps } from "../../types";

const SpellFilters: React.FC<SpellFiltersProps> = ({
	searchTerm,
	onSearchChange,
	selectedCirculo,
	onCirculoChange,
	selectedCusto,
	onCustoChange,
	selectedNatureza,
	onNaturezaChange,
	selectedConspecto,
	onConspectoChange,
	onClearFilters,
}) => {
	const { naturezas, conspectos, custos, circulos, loading } = useSpellFilterOptions();

	if (loading) {
		return (
			<S.FiltersContainer>
				<div style={{ padding: "20px", textAlign: "center" }}>Carregando opções de filtro...</div>
			</S.FiltersContainer>
		);
	}
	return (
		<S.FiltersContainer>
			<S.SearchSection>
				<S.SearchInput
					type="text"
					placeholder="Buscar magias por nome..."
					value={searchTerm}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
				/>
			</S.SearchSection>

			<S.FiltersSection>
				<S.FilterGroup>
					<S.FilterLabel>Círculo:</S.FilterLabel>
					<S.FilterSelect
						value={selectedCirculo}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onCirculoChange(e.target.value)}
					>
						<option value="">Todos</option>
						{circulos.map((circulo) => (
							<option key={circulo} value={circulo.toString()}>
								{circulo}º Círculo
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.FilterGroup>
					<S.FilterLabel>Custo (PM):</S.FilterLabel>
					<S.FilterSelect
						value={selectedCusto}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onCustoChange(e.target.value)}
					>
						<option value="">Todos</option>
						{custos.map((custo) => (
							<option key={custo} value={custo.toString()}>
								{custo} PM
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.FilterGroup>
					<S.FilterLabel>Natureza:</S.FilterLabel>
					<S.FilterSelect
						value={selectedNatureza}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onNaturezaChange(e.target.value)}
					>
						<option value="">Todas</option>
						{naturezas.map((natureza) => (
							<option key={natureza} value={natureza}>
								{natureza}
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.FilterGroup>
					<S.FilterLabel>Conspecto:</S.FilterLabel>
					<S.FilterSelect
						value={selectedConspecto}
						onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onConspectoChange(e.target.value)}
					>
						<option value="">Todos</option>
						{conspectos.map((conspecto) => (
							<option key={conspecto} value={conspecto}>
								{conspecto}
							</option>
						))}
					</S.FilterSelect>
				</S.FilterGroup>

				<S.ClearButton onClick={onClearFilters}>Limpar Filtros</S.ClearButton>
			</S.FiltersSection>
		</S.FiltersContainer>
	);
};

export default SpellFilters;
