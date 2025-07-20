import { useMagias } from "./useData";
import { novasMagias } from "../mocks/Spells/testspells";

export const useSpellFilterOptions = () => {
	const { magias, loading, error } = useMagias();

	const allMagias = magias.length > 0 ? magias : novasMagias;

	// Extrair naturezas únicas
	const naturezasSet = new Set<string>();
	allMagias.forEach((magia) => {
		magia.natureza.forEach((nat) => naturezasSet.add(nat));
	});
	const naturezas = Array.from(naturezasSet).sort();

	// Extrair conspectos únicos
	const conspectosList = new Set<string>();
	allMagias.forEach((magia) => {
		magia.conspectos.forEach((cons) => conspectosList.add(cons));
	});
	const conspectos = Array.from(conspectosList).sort();

	// Extrair custos únicos de PM
	const custosSet = new Set<number>();
	allMagias.forEach((magia) => {
		custosSet.add(magia.custoPM);
	});
	const custos = Array.from(custosSet).sort((a, b) => a - b);

	// Extrair círculos únicos
	const circulosSet = new Set<number>();
	allMagias.forEach((magia) => {
		circulosSet.add(magia.circulo);
	});
	const circulos = Array.from(circulosSet).sort((a, b) => a - b);

	return {
		naturezas,
		conspectos,
		custos,
		circulos,
		loading,
		error,
	};
};
