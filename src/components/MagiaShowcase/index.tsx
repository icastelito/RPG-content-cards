import * as S from "./styles";
import { Magia } from "../../mocks/Spells/testspells";

interface MagiaShowcaseProps {
	magiasList: Magia[];
}

const MagiaShowcase: React.FC<MagiaShowcaseProps> = ({ magiasList }) => (
	<S.Showcase>
		{magiasList.map((magia) => (
			<S.ShowcaseContent key={magia.id}>
				<S.SpellName>
					{magia.nome} <br />
					<span>{magia.circulo === 0 ? "Truque" : `${magia.circulo}º Círculo`}</span>
				</S.SpellName>

				<S.SpellLevelSchool>
					{magia.natureza.map((nat, index) => (
						<S.TagNatureza key={index} natureza={nat}>
							{nat}
						</S.TagNatureza>
					))}
					{magia.conspectos.map((con, index) => (
						<S.TagConspecto key={index}>{con}</S.TagConspecto>
					))}
				</S.SpellLevelSchool>

				<S.horizontalLine />
				<S.SpellCost>
					<strong>Custo:</strong> {magia.custoPM} PM
				</S.SpellCost>
				<S.SpellComponents>
					<strong>Componentes:</strong> {magia.componentes.join(", ")}
				</S.SpellComponents>

				<S.SpellCastingTime>
					<strong>Alvo:</strong> {magia.alvo}
				</S.SpellCastingTime>

				<S.SpellRange>
					<strong>Alcance:</strong> {magia.alcance}
				</S.SpellRange>

				<S.SpellDuration>
					<strong>Duração:</strong> {magia.duracao}
				</S.SpellDuration>

				<S.SpellDescription>{magia.descricao}</S.SpellDescription>
			</S.ShowcaseContent>
		))}
	</S.Showcase>
);

export default MagiaShowcase;
