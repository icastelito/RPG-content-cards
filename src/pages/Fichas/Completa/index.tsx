import React from "react";
import PageLayout from "../../../components/PageLayout";
import * as S from "./styles";

const FichaCompleta: React.FC = () => {
	return (
		<PageLayout>
			<S.Container>
				<S.Header>
					<S.Title>Ficha de Personagem - Completa</S.Title>
					<S.Subtitle>Sistema Astra</S.Subtitle>
				</S.Header>

				<S.DevelopmentMessage>
					<S.DevelopmentTitle>Em Desenvolvimento</S.DevelopmentTitle>
					<S.DevelopmentText>
						A ficha completa está sendo desenvolvida para oferecer a experiência mais abrangente possível.
					</S.DevelopmentText>
				</S.DevelopmentMessage>
			</S.Container>
		</PageLayout>
	);
};

export default FichaCompleta;
