import React from "react";
import PageLayout from "../../../components/PageLayout";
import * as S from "./styles";

const FichaModerna: React.FC = () => {
	return (
		<PageLayout>
			<S.Container>
				<S.Header>
					<S.Title>Ficha de Personagem - Moderna</S.Title>
					<S.Subtitle>Sistema Astra</S.Subtitle>
				</S.Header>

				<S.DevelopmentMessage>
					<S.DevelopmentIcon>🚧</S.DevelopmentIcon>
					<S.DevelopmentTitle>Em Desenvolvimento</S.DevelopmentTitle>
					<S.DevelopmentText>
						A ficha moderna está sendo desenvolvida e estará disponível em breve.
					</S.DevelopmentText>
				</S.DevelopmentMessage>
			</S.Container>
		</PageLayout>
	);
};

export default FichaModerna;
