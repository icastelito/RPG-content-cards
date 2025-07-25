import * as S from "./styles";
import { SpellShowcaseProps } from "../../types";

const SpellShowcase: React.FC<SpellShowcaseProps> = ({ spellsList }) => (
	<S.Showcase>
		{spellsList.map((item) => (
			<S.ShowcaseContent key={item.id}>
				<S.SpellName> {item.name} </S.SpellName>
				{item.level > 0 ? (
					<S.SpellLevelSchool>
						{" "}
						{item.level}º nível de {item.school}{" "}
					</S.SpellLevelSchool>
				) : (
					<S.SpellLevelSchool> Truque de {item.school} </S.SpellLevelSchool>
				)}
				{item.damageResume && item.damageResume.length > 0 && (
					<S.SpellDamage>
						{" "}
						<S.InforHover title="Esses dados resumem o dano nos níves 1, 5, 11 e 17">
							🛈
						</S.InforHover> Dano: {item.damageResume[0]}, {item.damageResume[1]}, {item.damageResume[2]},{" "}
						{item.damageResume[3]} de dano de {item.damageType}
					</S.SpellDamage>
				)}
				{item.conjurer && item.conjurer.length > 0 && (
					<S.SpellConjurer>
						{" "}
						<strong>Conjuradores: </strong>
						{item.conjurer}{" "}
					</S.SpellConjurer>
				)}
				<S.horizontalLine />
				<S.SpellComponents>
					{" "}
					<strong>Componentes:</strong> {item.components?.join(", ") || "N/A"}{" "}
				</S.SpellComponents>
				<S.SpellCastingTime>
					{" "}
					<strong>Tempo de Conjuração:</strong> {item.castingTime}{" "}
				</S.SpellCastingTime>
				<S.SpellDuration>
					{" "}
					<strong>Tempo de Duração:</strong> {item.duration}{" "}
				</S.SpellDuration>
				<S.SpellRange>
					{" "}
					<strong>Alcance:</strong> {item.range}{" "}
				</S.SpellRange>
				{item.description.map((desc, index) => (
					<S.SpellDescription key={index}>{desc}</S.SpellDescription>
				))}
			</S.ShowcaseContent>
		))}
	</S.Showcase>
);

export default SpellShowcase;
