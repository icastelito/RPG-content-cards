import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { HeaderIndex } from "../../components/RouterRender";
import IconRender from "../../components/IconRender";
import CharacterForm from "../../components/CharacterForm";
import { CharacterSheet } from "../../types";

const Fichas: React.FC = () => {
	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();

	const handleSave = (character: CharacterSheet) => {
		console.log("Personagem salvo:", character);
		// TODO: Implementar salvamento local
		alert("Personagem salvo com sucesso!");
	};

	const handleExportPDF = (character: CharacterSheet) => {
		console.log("Exportando PDF:", character);
		alert("Funcionalidade de PDF em desenvolvimento!");
	};

	const handleSelectModel = (modelNumber: number) => {
		// Navegação para o modelo específico
		if (modelNumber === 1) {
			navigate("/fichas/Classica");
		} else if (modelNumber === 2) {
			navigate("/fichas/Moderna");
		} else {
			navigate("/fichas/Completa");
		}
	};

	if (showForm) {
		return (
			<S.Container>
				<HeaderIndex />
				<S.Content>
					<S.BackButton onClick={() => setShowForm(false)}>
						<IconRender iconName="FaArrowLeft" iconSize={16} />
						Voltar
					</S.BackButton>
					<CharacterForm onSave={handleSave} onExportPDF={handleExportPDF} />
				</S.Content>
			</S.Container>
		);
	}
	return (
		<S.Container>
			<HeaderIndex />
			<S.Content>
				<S.PageTitle>Fichas de Personagem</S.PageTitle>
				<S.Description>Escolha um modelo de ficha para visualizar ou criar personagens.</S.Description>

				<S.FeaturesList>
					<S.ModelCard onClick={() => handleSelectModel(1)}>
						<S.FeatureIcon>
							<IconRender iconName="GiScrollQuill" iconSize={32} />
						</S.FeatureIcon>
						<S.ModelTitle>Ficha Clássica</S.ModelTitle>
						<S.ModelDescription>
							Modelo tradicional com layout organizado e informações essenciais
						</S.ModelDescription>
					</S.ModelCard>
					<S.ModelCard onClick={() => handleSelectModel(2)}>
						<S.FeatureIcon>
							<IconRender iconName="GiSpellBook" iconSize={32} />
						</S.FeatureIcon>
						<S.ModelTitle>Ficha Moderna</S.ModelTitle>
						<S.ModelDescription>
							Versão otimizada com informações resumidas para campanhas rápidas
						</S.ModelDescription>
					</S.ModelCard>
					<S.ModelCard onClick={() => handleSelectModel(3)}>
						<S.FeatureIcon>
							<IconRender iconName="GiWingedSword" iconSize={32} />
						</S.FeatureIcon>
						<S.ModelTitle>Ficha Completa</S.ModelTitle>
						<S.ModelDescription>
							Modelo completo com espaço para histórico e notas extensas
						</S.ModelDescription>
					</S.ModelCard>
				</S.FeaturesList>
			</S.Content>
		</S.Container>
	);
};

export default Fichas;
