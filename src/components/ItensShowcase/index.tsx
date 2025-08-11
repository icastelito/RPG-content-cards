import * as S from "./styles";
import { ItensShowcaseProps } from "../../types";

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

const ItensShowcase: React.FC<ItensShowcaseProps> = ({ itensList }) => (
	<S.Showcase>
		{itensList.map((item) => (
			<S.CardPair key={item.id}>
				<S.ImageCard>
					{item.imagePath ? (
						<S.ItemImage src={item.imagePath} alt={item.name} />
					) : (
						<S.ImagePlaceholder>
							🎴
							<div style={{ fontSize: "16px", marginTop: "12px" }}>{item.name}</div>
						</S.ImagePlaceholder>
					)}
				</S.ImageCard>
				<S.ShowcaseContent>
					<S.ItemHeader>
						<S.ItemNameContainer>
							<S.ItemName> {item.name} </S.ItemName>
							{getAnimaSymbols(item.animaIdentity) && (
								<S.AnimaSymbols> {getAnimaSymbols(item.animaIdentity)} </S.AnimaSymbols>
							)}
						</S.ItemNameContainer>
						<S.ItemTypeRarity>
							{" "}
							{item.type}
							{item.subtype ? ` (${item.subtype})` : ""} • {item.rarity}
							{item.magic && (
								<>
									<br />• Mágico
								</>
							)}
							{item.attunement ? " • Requer Sintonização" : ""}{" "}
						</S.ItemTypeRarity>
					</S.ItemHeader>
					<S.ItemContent>
						{/* Informações específicas de Armas */}
						{(item as any).baseDamage && (
							<S.ItemProperties>
								<strong>Dano:</strong> {(item as any).baseDamage} ({(item as any).damageType})
							</S.ItemProperties>
						)}

						{(item as any).affinities && (item as any).affinities.length > 0 && (
							<S.ItemProperties>
								<strong>Afinidades:</strong>{" "}
								{(item as any).affinities
									.map((aff: any) => `${aff.atributo} (${aff.escala})`)
									.join(", ")}
							</S.ItemProperties>
						)}

						{(item as any).range && (
							<S.ItemProperties>
								<strong>Alcance:</strong> {(item as any).range}
								{(item as any).maxRange ? ` / ${(item as any).maxRange}` : ""}
							</S.ItemProperties>
						)}

						{(item as any).weight && (
							<S.ItemProperties>
								<strong>Peso:</strong> {(item as any).weight} kg
							</S.ItemProperties>
						)}

						{/* Informações específicas de Armaduras */}
						{(item as any).damageThreshold1 !== undefined && (
							<S.ItemProperties>
								<strong>Limiares:</strong> {(item as any).damageThreshold1} /{" "}
								{(item as any).damageThreshold2}
							</S.ItemProperties>
						)}

						{(item as any).armorHitPoints && (
							<S.ItemProperties>
								<strong>PA:</strong> {(item as any).armorHitPoints}
							</S.ItemProperties>
						)}

						{/* Informações específicas de Consumíveis */}
						{(item as any).consumableType && (
							<S.ItemProperties>
								<strong>Tipo:</strong> {(item as any).consumableType}
							</S.ItemProperties>
						)}

						{(item as any).duration && (
							<S.ItemProperties>
								<strong>Duração:</strong> {(item as any).duration}
							</S.ItemProperties>
						)}

						{(item as any).uses && (
							<S.ItemProperties>
								<strong>Usos:</strong> {(item as any).uses}
							</S.ItemProperties>
						)}

						{/* Informações gerais */}
						{item.price && (
							<S.ItemPrice>
								<strong>Preço:</strong> {item.price} PO
							</S.ItemPrice>
						)}

						{item.properties && item.properties.length > 0 && (
							<S.ItemProperties>
								<strong>Propriedades:</strong> {item.properties.join(", ")}
							</S.ItemProperties>
						)}

						{item.magicalEffects && item.magicalEffects.length > 0 && (
							<S.ItemMagicalEffects>
								<strong>Efeitos:</strong> {item.magicalEffects.join(", ")}
							</S.ItemMagicalEffects>
						)}

						{(item as any).effects && (item as any).effects.length > 0 && (
							<S.ItemMagicalEffects>
								<strong>Efeitos:</strong> {(item as any).effects.join(", ")}
							</S.ItemMagicalEffects>
						)}

						<S.horizontalLine />

						{item.description.map((desc, index) => (
							<S.ItemDescription key={index}> {desc} </S.ItemDescription>
						))}
					</S.ItemContent>
				</S.ShowcaseContent>
			</S.CardPair>
		))}
	</S.Showcase>
);

export default ItensShowcase;
