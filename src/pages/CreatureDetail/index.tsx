import { useParams, useNavigate } from "react-router-dom";
import CreatureCard from "../../components/CreatureCard";
import { useCreature } from "../../hooks/useData";
import { HeaderIndex } from "../../components/RouterRender";
import * as S from "./styles";

const CreatureDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const creatureId = id ? parseInt(id, 10) : 0;
	const { creature, loading, error } = useCreature(creatureId);

	if (loading) {
		return (
			<>
				<HeaderIndex />
				<S.DetailContainer>
					<div>Carregando detalhes da criatura...</div>
				</S.DetailContainer>
			</>
		);
	}

	if (error || !creature) {
		return (
			<>
				<HeaderIndex />
				<S.DetailContainer>
					<div>Erro ao carregar criatura: {error || "Criatura não encontrada"}</div>
					<S.BackButton onClick={() => navigate("/ameacas")}>Voltar para Ameaças</S.BackButton>
				</S.DetailContainer>
			</>
		);
	}

	return (
		<>
			<HeaderIndex />
			<S.DetailContainer>
				<S.BackButton onClick={() => navigate("/ameacas")}>← Voltar para Ameaças</S.BackButton>

				<CreatureCard creature={creature} />
			</S.DetailContainer>
		</>
	);
};

export default CreatureDetail;
