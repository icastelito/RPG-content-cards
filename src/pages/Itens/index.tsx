import ItensShowcase from "../../components/ItensShowcase";
import { useItems } from "../../hooks/useData";
import { itensTest } from "../../mocks/Items/testitens";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Itens = () => {
	const { items, loading, error } = useItems();

	if (loading) {
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div>Carregando itens...</div>
				</S.ShowcaseSection>
			</>
		);
	}

	if (error) {
		console.error("Erro ao carregar itens, usando dados de teste:", error);
	}

	const renderItens = items.length > 0 ? items : itensTest;

	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<ItensShowcase itensList={renderItens} />
			</S.ShowcaseSection>
		</>
	);
};

export default Itens;
