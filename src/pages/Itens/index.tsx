import ItensShowcase from "../../components/ItensShowcase";
import { useItems } from "../../hooks/useData";
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
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div>Erro ao carregar itens: {error}</div>
				</S.ShowcaseSection>
			</>
		);
	}

	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<ItensShowcase itensList={items} />
			</S.ShowcaseSection>
		</>
	);
};

export default Itens;
