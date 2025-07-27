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
						{creature.imageMini && (
							<S.CreatureImage src={`/img/mini/${creature.imageMini}`} alt={creature.name} />
						)}
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
							<S.StatItem>
								HP:{" "}
								{Math.floor(
									creature.hp +
										(creature.streng - 10) / 2 +
										(creature.agility - 10) / 2 +
										(creature.precision - 10) / 2
								)}
							</S.StatItem>
							<S.StatItem>
								MP:{" "}
								{Math.floor(
									creature.mp +
										(creature.intelligence - 10) / 2 +
										(creature.wisdom - 10) / 2 +
										(creature.charisma - 10) / 2
								)}
							</S.StatItem>
							<S.StatItem>
								SP:{" "}
								{Math.floor(
									creature.sp +
										(creature.intelligence - 10) / 2 +
										(creature.wisdom - 10) / 2 +
										(creature.charisma - 10) / 2 +
										(creature.streng - 10) / 2 +
										(creature.agility - 10) / 2 +
										(creature.precision - 10) / 2 +
										creature.level / 5 +
										1
								)}
							</S.StatItem>
						</S.CreatureStats>
					</S.CreatureInfo>
				</S.CreatureItem>
			))}
		</S.CreatureList>
	);
};

export default CreaturesList;
