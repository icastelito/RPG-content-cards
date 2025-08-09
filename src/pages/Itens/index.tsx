import ItensShowcase from "../../components/ItensShowcase";
import { useItems } from "../../hooks/useData";
import PageLayout from "../../components/PageLayout";

const Itens = () => {
	const { items, loading, error } = useItems();

	if (loading) {
		return (
			<PageLayout useShowcaseSection={true}>
				<div>Carregando itens...</div>
			</PageLayout>
		);
	}

	if (error) {
		return (
			<PageLayout useShowcaseSection={true}>
				<div>Erro ao carregar itens: {error}</div>
			</PageLayout>
		);
	}

	return (
		<PageLayout useShowcaseSection={true}>
			<ItensShowcase itensList={items} />
		</PageLayout>
	);
};

export default Itens;
