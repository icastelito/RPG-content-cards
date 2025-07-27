import { useState, useEffect } from "react";
import { Creature, Actions, Ability, Magia, ItensProps } from "../types";
import { dataService } from "../services/dataService";

export interface CreatureWithDetails extends Creature {
	resolvedAbilities: Ability[];
	resolvedActions: Actions[];
	resolvedReactions: Actions[];
	resolvedLegendaryActions?: Actions[];
	resolvedLairActions?: Actions[];
	resolvedSpells?: Magia[];
	resolvedItems?: ItensProps[];
}

export const useCreatureDetails = (creatureId: number | null) => {
	const [creature, setCreature] = useState<CreatureWithDetails | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!creatureId) {
			setCreature(null);
			return;
		}

		const loadCreatureDetails = async () => {
			setLoading(true);
			setError(null);

			try {
				// Buscar a criatura base
				const baseCreature = await dataService.getCreatureById(creatureId);
				if (!baseCreature) {
					throw new Error(`Criatura com ID ${creatureId} não encontrada`);
				}

				// Resolver abilities
				const resolvedAbilities = await dataService.getAbilitiesByIds(baseCreature.abilities);

				// Resolver actions
				const resolvedActions = await dataService.getActionsByIds(baseCreature.actions);

				// Resolver reactions
				const resolvedReactions = await dataService.getActionsByIds(baseCreature.reactions);

				// Resolver legendary actions (se existir)
				const resolvedLegendaryActions = baseCreature.legendaryActions
					? await dataService.getActionsByIds(baseCreature.legendaryActions)
					: undefined;

				// Resolver lair actions (se existir)
				const resolvedLairActions = baseCreature.lairActions
					? await dataService.getActionsByIds(baseCreature.lairActions)
					: undefined;

				// Resolver spells (se existir)
				const resolvedSpells = baseCreature.spells
					? await dataService.getMagiasByIds(baseCreature.spells)
					: undefined;

				// Resolver items (se existir)
				const resolvedItems = baseCreature.itens
					? await dataService.getItemsByIds(baseCreature.itens)
					: undefined;

				// Criar objeto com dados resolvidos
				const creatureWithDetails: CreatureWithDetails = {
					...baseCreature,
					resolvedAbilities,
					resolvedActions,
					resolvedReactions,
					resolvedLegendaryActions,
					resolvedLairActions,
					resolvedSpells,
					resolvedItems,
				};

				setCreature(creatureWithDetails);
			} catch (err) {
				console.error("Erro ao carregar detalhes da criatura:", err);
				setError(err instanceof Error ? err.message : "Erro desconhecido");
			} finally {
				setLoading(false);
			}
		};

		loadCreatureDetails();
	}, [creatureId]);

	return { creature, loading, error };
};
