import { useNavigate } from "react-router-dom";
import { CreatureListProps } from "../../types";
import * as S from "./styles";

const CreaturesList: React.FC<CreatureListProps> = ({ creatures }) => {
	const navigate = useNavigate();

	const handleCreatureClick = (id: number) => {
		navigate(`/ameacas/${id}`);
	};

	return (
		<S.CreatureList>
			{creatures.map((creature) => (
				<S.CreatureItem key={creature.id} onClick={() => handleCreatureClick(creature.id)}>
					<S.CreatureImageContainer>
						{creature.imageMini && <S.CreatureImage src={creature.imageMini} alt={creature.name} />}
					</S.CreatureImageContainer>

					<S.CreatureInfo>
						<S.CreatureName>{creature.name}</S.CreatureName>
						<S.CreatureType>
							{creature.type} {creature.size}
						</S.CreatureType>
						<S.CreatureClassification>{creature.classification}</S.CreatureClassification>
						<S.CreatureResume>{creature.resume}</S.CreatureResume>

						<S.CreatureStats>
							<S.StatItem>Nível: {creature.level}</S.StatItem>
							<S.StatItem>HP: {creature.hp}</S.StatItem>
							<S.StatItem>MP: {creature.mp}</S.StatItem>
						</S.CreatureStats>
					</S.CreatureInfo>
				</S.CreatureItem>
			))}
		</S.CreatureList>
	);
};

export default CreaturesList;
