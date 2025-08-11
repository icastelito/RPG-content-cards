import React from "react";
import { ItensProps, Weapon, Armor, Consumable } from "../../types";
import * as S from "./styles";

const getAnimaSymbols = (animaIdentity?: string[]): string => {
	if (!animaIdentity || animaIdentity.length === 0) return "";

	const symbolMap: { [key: string]: string } = {
		"Natura": "⚘",
		"Intentum": "⌖",
		"Égote": "⌬",
		"Logos": "⚚",
		"Ethos": "⚜",
	};

	// Contar ocorrências de cada tipo
	const counts: { [key: string]: number } = {};
	animaIdentity.forEach((identity) => {
		counts[identity] = (counts[identity] || 0) + 1;
	});

	let result = "";

	// Processar cada tipo único
	Object.entries(counts).forEach(([identity, count]) => {
		if (identity === "Neutro") {
			result += `⊙${count > 1 ? count : ""}`;
		} else if (symbolMap[identity]) {
			result += symbolMap[identity].repeat(count);
		}
	});

	return result;
};

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

		// Bônus do atributo usado para ataque (baseado nas afinidades)
		if (weapon.affinities && weapon.affinities.length > 0) {
			// Usar a primeira afinidade como atributo principal
			const primaryAffinity = weapon.affinities[0];
			let attributeKey = "";

			switch (primaryAffinity.atributo.toLowerCase()) {
				case "for":
				case "força":
					attributeKey = "streng";
					break;
				case "des":
				case "destreza":
					attributeKey = "agility";
					break;
				case "pre":
				case "precisão":
					attributeKey = "precision";
					break;
				case "int":
				case "inteligência":
					attributeKey = "intelligence";
					break;
				case "sab":
				case "sabedoria":
					attributeKey = "wisdom";
					break;
				case "car":
				case "carisma":
					attributeKey = "charisma";
					break;
			}

			if (attributeKey) {
				const attributeValue = creatureAttributes[attributeKey as keyof typeof creatureAttributes];
				bonus += getAttributeModifier(attributeValue);
			}
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
						const isTrained = Boolean(weapon.category && hasTraining(weapon.category));

						return (
							<S.ItemCard key={weapon.id} $trained={isTrained}>
								<S.ItemHeader>
									<S.ItemName $rarity={weapon.rarity}>
										{weapon.name}
										{getAnimaSymbols(weapon.animaIdentity) && (
											<S.AnimaSymbols>{getAnimaSymbols(weapon.animaIdentity)}</S.AnimaSymbols>
										)}
									</S.ItemName>
									{isTrained && <S.TrainingBadge>Treinado</S.TrainingBadge>}
								</S.ItemHeader>
								<S.ItemDetails>
									<S.ItemDetail>
										<strong>Dano:</strong> {weapon.baseDamage} {weapon.damageType}
									</S.ItemDetail>
									<S.ItemDetail>
										<strong>Ataque:</strong> {bonusDisplay}
									</S.ItemDetail>
									{weapon.affinities && weapon.affinities.length > 0 && (
										<S.ItemDetail>
											<strong>Afinidades:</strong>{" "}
											{weapon.affinities
												.map((aff) => `${aff.atributo} (${aff.escala})`)
												.join(", ")}
										</S.ItemDetail>
									)}
									{weapon.range && (
										<S.ItemDetail>
											<strong>Alcance:</strong> {weapon.range}
											{weapon.maxRange && ` / ${weapon.maxRange}`}
										</S.ItemDetail>
									)}
									{weapon.weight && (
										<S.ItemDetail>
											<strong>Peso:</strong> {weapon.weight} kg
										</S.ItemDetail>
									)}
									{weapon.properties && weapon.properties.length > 0 && (
										<S.ItemDetail>
											<strong>Propriedades:</strong> {weapon.properties.join(", ")}
										</S.ItemDetail>
									)}
									{weapon.magicalEffects && weapon.magicalEffects.length > 0 && (
										<S.ItemDetail>
											<strong>Efeitos Mágicos:</strong> {weapon.magicalEffects.join(", ")}
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
								<S.ItemName $rarity={armor.rarity}>
									{armor.name}
									{getAnimaSymbols(armor.animaIdentity) && (
										<S.AnimaSymbols>{getAnimaSymbols(armor.animaIdentity)}</S.AnimaSymbols>
									)}
								</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								{armor.armorHitPoints && (
									<S.ItemDetail>
										<strong>PA:</strong> {armor.armorHitPoints}
									</S.ItemDetail>
								)}
								{armor.damageThreshold1 !== undefined && (
									<S.ItemDetail>
										<strong>Limiares:</strong> {armor.damageThreshold1} / {armor.damageThreshold2}
									</S.ItemDetail>
								)}
								{armor.category && (
									<S.ItemDetail>
										<strong>Categoria:</strong> {armor.category}
									</S.ItemDetail>
								)}
								{armor.properties && armor.properties.length > 0 && (
									<S.ItemDetail>
										<strong>Propriedades:</strong> {armor.properties.join(", ")}
									</S.ItemDetail>
								)}
								{armor.magicalEffects && armor.magicalEffects.length > 0 && (
									<S.ItemDetail>
										<strong>Efeitos Mágicos:</strong> {armor.magicalEffects.join(", ")}
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
								<S.ItemName $rarity={consumable.rarity}>
									{consumable.name}
									{getAnimaSymbols(consumable.animaIdentity) && (
										<S.AnimaSymbols>{getAnimaSymbols(consumable.animaIdentity)}</S.AnimaSymbols>
									)}
								</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								{consumable.consumableType && (
									<S.ItemDetail>
										<strong>Tipo:</strong> {consumable.consumableType}
									</S.ItemDetail>
								)}
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
								{consumable.magicalEffects && consumable.magicalEffects.length > 0 && (
									<S.ItemDetail>
										<strong>Efeitos Mágicos:</strong> {consumable.magicalEffects.join(", ")}
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
								<S.ItemName $rarity={item.rarity}>
									{item.name}
									{getAnimaSymbols(item.animaIdentity) && (
										<S.AnimaSymbols>{getAnimaSymbols(item.animaIdentity)}</S.AnimaSymbols>
									)}
								</S.ItemName>
							</S.ItemHeader>
							<S.ItemDetails>
								<S.ItemDetail>
									<strong>Tipo:</strong> {item.type}
									{item.subtype && ` (${item.subtype})`}
								</S.ItemDetail>
								{item.attunement && (
									<S.ItemDetail>
										<strong>Requer Sintonização:</strong> Sim
									</S.ItemDetail>
								)}
								{item.magic && (
									<S.ItemDetail>
										<strong>Mágico:</strong> Sim
									</S.ItemDetail>
								)}
								{item.price && (
									<S.ItemDetail>
										<strong>Preço:</strong> {item.price} mo
									</S.ItemDetail>
								)}
								{item.properties && item.properties.length > 0 && (
									<S.ItemDetail>
										<strong>Propriedades:</strong> {item.properties.join(", ")}
									</S.ItemDetail>
								)}
								{item.magicalEffects && item.magicalEffects.length > 0 && (
									<S.ItemDetail>
										<strong>Efeitos Mágicos:</strong> {item.magicalEffects.join(", ")}
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
