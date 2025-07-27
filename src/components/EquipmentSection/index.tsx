import React from "react";
import { ItensProps, Weapon, Armor, Consumable } from "../../types";
import * as S from "./styles";

interface EquipmentSectionProps {
	items: ItensProps[];
	trainings: string[];
	creatureAttributes: {
		streng: number;
		agility: number;
		precision: number;
		intelligence: number;
		wisdom: number;
		charisma: number;
	};
}

const EquipmentSection: React.FC<EquipmentSectionProps> = ({ items, trainings, creatureAttributes }) => {
	// Função para calcular o modificador de atributo
	const getAttributeModifier = (attributeValue: number) => {
		return Math.floor((attributeValue - 10) / 2);
	};

	// Função para verificar se a criatura tem treinamento em uma categoria
	const hasTraining = (category: string) => {
		return trainings.includes(category);
	};

	// Função para calcular o bônus de ataque de uma arma
	const calculateWeaponBonus = (weapon: Weapon) => {
		let bonus = 0;

		// Bônus do atributo usado para ataque
		if (weapon.attackAttribute) {
			const attributeValue = creatureAttributes[weapon.attackAttribute as keyof typeof creatureAttributes];
			bonus += getAttributeModifier(attributeValue);
		}

		// Bônus de treinamento (+2 se treinado na categoria)
		if (weapon.category && hasTraining(weapon.category)) {
			bonus += 2;
		}

		return bonus;
	};

	// Separar itens por tipo
	const weapons = items.filter((item) => item.type === "Arma") as Weapon[];
	const armors = items.filter((item) => item.type === "Armadura") as Armor[];
	const consumables = items.filter((item) => item.type === "Consumível") as Consumable[];
	const others = items.filter((item) => !["Arma", "Armadura", "Consumível"].includes(item.type));

	if (items.length === 0) {
		return (
			<S.EquipmentContainer>
				<S.SectionTitle>Equipamentos</S.SectionTitle>
				<S.EmptyMessage>Nenhum equipamento encontrado</S.EmptyMessage>
			</S.EquipmentContainer>
		);
	}

	return (
		<S.EquipmentContainer>
			<S.SectionTitle>Equipamentos</S.SectionTitle>

			{/* Armas */}
			{weapons.length > 0 && (
				<S.ItemTypeSection>
					<S.ItemTypeTitle>Armas</S.ItemTypeTitle>
					{weapons.map((weapon) => {
						const attackBonus = calculateWeaponBonus(weapon);
						const bonusDisplay = attackBonus >= 0 ? `+${attackBonus}` : `${attackBonus}`;
						const isTrained = weapon.category && hasTraining(weapon.category);

						return (
							<S.ItemCard key={weapon.id} $trained={isTrained}>
								<S.ItemHeader>
									<S.ItemName $rarity={weapon.rarity}>{weapon.name}</S.ItemName>
									{isTrained && <S.TrainingBadge>Treinado</S.TrainingBadge>}
								</S.ItemHeader>
								<S.ItemDetails>
									<S.ItemDetail>
										<strong>Dano:</strong> {weapon.damage} {weapon.damageType}
									</S.ItemDetail>
									<S.ItemDetail>
										<strong>Ataque:</strong> {bonusDisplay}
									</S.ItemDetail>
									{weapon.range && (
										<S.ItemDetail>
											<strong>Alcance:</strong> {weapon.range}
										</S.ItemDetail>
									)}
									{weapon.properties && weapon.properties.length > 0 && (
										<S.ItemDetail>
											<strong>Propriedades:</strong> {weapon.properties.join(", ")}
										</S.ItemDetail>
									)}
								</S.ItemDetails>
								{weapon.description && weapon.description.length > 0 && (
									<S.ItemDescription>
										{weapon.description.map((desc, index) => (
											<div key={index}>{desc}</div>
										))}
									</S.ItemDescription>
								)}
							</S.ItemCard>
						);
					})}
				</S.ItemTypeSection>
			)}

			{/* Armaduras */}
			{armors.length > 0 && (
				<S.ItemTypeSection>
					<S.ItemTypeTitle>Armaduras</S.ItemTypeTitle>
					{armors.map((armor) => (
						<S.ItemCard key={armor.id}>
							<S.ItemHeader>
								<S.ItemName $rarity={armor.rarity}>{armor.name}</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								{armor.armorPoints && (
									<S.ItemDetail>
										<strong>CA:</strong> {armor.armorPoints}
									</S.ItemDetail>
								)}
								{armor.damageMitigationMinor && (
									<S.ItemDetail>
										<strong>Mitigação Menor:</strong> {armor.damageMitigationMinor}
									</S.ItemDetail>
								)}
								{armor.damageMitigationMajor && (
									<S.ItemDetail>
										<strong>Mitigação Maior:</strong> {armor.damageMitigationMajor}
									</S.ItemDetail>
								)}
								{armor.effects && armor.effects.length > 0 && (
									<S.ItemDetail>
										<strong>Efeitos:</strong> {armor.effects.join(", ")}
									</S.ItemDetail>
								)}
							</S.ItemDetails>
							{armor.description && armor.description.length > 0 && (
								<S.ItemDescription>
									{armor.description.map((desc, index) => (
										<div key={index}>{desc}</div>
									))}
								</S.ItemDescription>
							)}
						</S.ItemCard>
					))}
				</S.ItemTypeSection>
			)}

			{/* Consumíveis */}
			{consumables.length > 0 && (
				<S.ItemTypeSection>
					<S.ItemTypeTitle>Consumíveis</S.ItemTypeTitle>
					{consumables.map((consumable) => (
						<S.ItemCard key={consumable.id}>
							<S.ItemHeader>
								<S.ItemName $rarity={consumable.rarity}>{consumable.name}</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								{consumable.uses && (
									<S.ItemDetail>
										<strong>Usos:</strong> {consumable.uses}
									</S.ItemDetail>
								)}
								{consumable.duration && (
									<S.ItemDetail>
										<strong>Duração:</strong> {consumable.duration}
									</S.ItemDetail>
								)}
								{consumable.effects && consumable.effects.length > 0 && (
									<S.ItemDetail>
										<strong>Efeitos:</strong> {consumable.effects.join(", ")}
									</S.ItemDetail>
								)}
							</S.ItemDetails>
							{consumable.description && consumable.description.length > 0 && (
								<S.ItemDescription>
									{consumable.description.map((desc, index) => (
										<div key={index}>{desc}</div>
									))}
								</S.ItemDescription>
							)}
						</S.ItemCard>
					))}
				</S.ItemTypeSection>
			)}

			{/* Outros Itens */}
			{others.length > 0 && (
				<S.ItemTypeSection>
					<S.ItemTypeTitle>Outros</S.ItemTypeTitle>
					{others.map((item) => (
						<S.ItemCard key={item.id}>
							<S.ItemHeader>
								<S.ItemName $rarity={item.rarity}>{item.name}</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								<S.ItemDetail>
									<strong>Tipo:</strong> {item.type} - {item.subtype}
								</S.ItemDetail>
								{item.attunement && (
									<S.ItemDetail>
										<strong>Requer Sintonia:</strong> Sim
									</S.ItemDetail>
								)}
								{item.price && (
									<S.ItemDetail>
										<strong>Preço:</strong> {item.price} moedas
									</S.ItemDetail>
								)}
							</S.ItemDetails>
							{item.description && item.description.length > 0 && (
								<S.ItemDescription>
									{item.description.map((desc, index) => (
										<div key={index}>{desc}</div>
									))}
								</S.ItemDescription>
							)}
						</S.ItemCard>
					))}
				</S.ItemTypeSection>
			)}
		</S.EquipmentContainer>
	);
};

export default EquipmentSection;
