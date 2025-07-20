import MagiaShowcase from "../../components/MagiaShowcase";
import { useMagias } from "../../hooks/useData";
import { novasMagias } from "../../mocks/Spells/testspells";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const Spells = () => {
	const { magias, loading, error } = useMagias();

	if (loading) {
		return (
			<>
				<HeaderIndex />
				<S.ShowcaseSection>
					<div>Carregando magias...</div>
				</S.ShowcaseSection>
			</>
		);
	}

	if (error) {
		console.error("Erro ao carregar magias, usando dados de teste:", error);
	}

	const renderMagias = magias.length > 0 ? magias : novasMagias;

	return (
		<>
			<HeaderIndex />
			<S.ShowcaseSection>
				<MagiaShowcase magiasList={renderMagias} />
			</S.ShowcaseSection>
		</>
	);
};

export default Spells;
