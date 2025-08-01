import * as S from "./styles";
import { ItensShowcaseProps } from "../../types";

const ItensShowcase: React.FC<ItensShowcaseProps> = ({ itensList }) => (
	<S.Showcase>
		{itensList.map((item) => (
			<S.ShowcaseContent key={item.id}>
				<S.ItemName> {item.name} </S.ItemName>
				<S.horizontalLine />
				<S.ItemType>
					{" "}
					Tipo: {item.type} ({item.subtype}){" "}
				</S.ItemType>
				<S.ItemRarity> Raridade: {item.rarity} </S.ItemRarity>
				{item.attunement ? <S.ItemComponents> Requer sintonia </S.ItemComponents> : <></>}
				<S.ItemPowerIdentity>
					{" "}
					Identidade Anima: {item.animaIdentity?.join(", ") || "Neutro"}{" "}
				</S.ItemPowerIdentity>
				<S.ItemDescription>
					{" "}
					Descrição: {Array.isArray(item.description) ? item.description.join(" ") : item.description}{" "}
				</S.ItemDescription>
			</S.ShowcaseContent>
		))}
	</S.Showcase>
);

export default ItensShowcase;
