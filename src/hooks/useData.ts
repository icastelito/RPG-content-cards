import { useState, useEffect } from "react";
import dataService from "../services/dataService";
import { Magia, SpellProps } from "../mocks/Spells/testspells";
import { ItensProps } from "../mocks/Items/testitens";

// Hook para buscar magias (nova estrutura)
export const useMagias = () => {
	const [magias, setMagias] = useState<Magia[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchMagias = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getMagias();
			setMagias(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar magias");
			console.error("Erro ao carregar magias:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMagias();
	}, []);

	return { magias, loading, error, refetch: fetchMagias };
};

// Hook para buscar magias (mantido para compatibilidade)
export const useSpells = () => {
	const [spells, setSpells] = useState<SpellProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchSpells = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getSpells();
			setSpells(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar magias");
			console.error("Erro ao carregar magias:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchSpells();
	}, []);

	return { spells, loading, error, refetch: fetchSpells };
};

// Hook para buscar itens
export const useItems = () => {
	const [items, setItems] = useState<ItensProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchItems = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getItems();
			setItems(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar itens");
			console.error("Erro ao carregar itens:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	return { items, loading, error, refetch: fetchItems };
};

// Hook para buscar uma magia específica
export const useSpell = (id: number) => {
	const [spell, setSpell] = useState<SpellProps | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchSpell = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getSpellById(id);
			setSpell(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar magia");
			console.error("Erro ao carregar magia:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (id) {
			fetchSpell();
		}
	}, [id]);

	return { spell, loading, error, refetch: fetchSpell };
};

// Hook para buscar um item específico
export const useItem = (id: number) => {
	const [item, setItem] = useState<ItensProps | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchItem = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getItemById(id);
			setItem(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar item");
			console.error("Erro ao carregar item:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (id) {
			fetchItem();
		}
	}, [id]);

	return { item, loading, error, refetch: fetchItem };
};

// Hook para buscar uma magia específica (nova estrutura)
export const useMagia = (id: number) => {
	const [magia, setMagia] = useState<Magia | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchMagia = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getMagiaById(id);
			setMagia(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar magia");
			console.error("Erro ao carregar magia:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (id) {
			fetchMagia();
		}
	}, [id]);

	return { magia, loading, error, refetch: fetchMagia };
};

// Hook para filtrar magias por círculo
export const useMagiasByCirculo = (circulo: number) => {
	const [magias, setMagias] = useState<Magia[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchMagiasByCirculo = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await dataService.getMagiasByCirculo(circulo);
			setMagias(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Erro ao carregar magias por círculo");
			console.error("Erro ao carregar magias por círculo:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMagiasByCirculo();
	}, [circulo]);

	return { magias, loading, error, refetch: fetchMagiasByCirculo };
};
