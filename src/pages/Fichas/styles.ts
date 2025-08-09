import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
	padding-top: 100px; /* Espaço para o header fixo */

	@media (max-width: 768px) {
		padding-top: 90px; /* Padding menor para mobile */
	}
`;

export const PageTitle = styled.h1`
	font-size: 2.5rem;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.fontColorDark};
	text-align: center;
	margin-bottom: 1rem;
	font-family: "TrajanPro", serif;
`;

export const Description = styled.p`
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.fontColorStandart};
	text-align: center;
	margin-bottom: 3rem;
	line-height: 1.6;
`;

export const FeaturesList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-bottom: 4rem;
`;

export const FeatureItem = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1.5rem;
	background: ${({ theme }) => theme.colors.card};
	border: 1px solid ${({ theme }) => theme.colors.border};
	border-radius: 8px;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		border-color: ${({ theme }) => theme.colors.primary};
	}
`;

export const FeatureIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	color: ${({ theme }) => theme.colors.secondary};
	flex-shrink: 0;
	transition: color 0.3s ease;

	${FeatureItem}:hover & {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const FeatureText = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.text};
`;

export const ComingSoon = styled.div`
	text-align: center;
	padding: 3rem 2rem;
	background: ${({ theme }) => theme.colors.card};
	border: 2px dashed ${({ theme }) => theme.colors.primary};
	border-radius: 12px;
	margin-top: 2rem;
`;

export const ComingSoonTitle = styled.h2`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.colors.text};
	margin-bottom: 1rem;
	font-weight: 600;
`;

export const ComingSoonText = styled.p`
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	line-height: 1.6;
	margin: 0;
`;

export const BackButton = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1rem;
	background: ${({ theme }) => theme.colors.secondary};
	color: white;
	border: none;
	border-radius: 6px;
	font-size: 0.9rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
	margin-bottom: 1rem;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}

	&:active {
		transform: translateY(0);
	}
`;

export const CreateButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
	padding: 1.5rem 2rem;
	background: ${({ theme }) => theme.colors.primary};
	color: white;
	border: none;
	border-radius: 12px;
	font-size: 1.1rem;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	margin: 2rem auto;
	max-width: 300px;
	width: 100%;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
		background: ${({ theme }) => theme.colors.secondary};
	}

	&:active {
		transform: translateY(0);
	}
`;

export const ModelCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	padding: 2rem 1.5rem;
	background: ${({ theme }) => theme.colors.card};
	border: 2px solid ${({ theme }) => theme.colors.border};
	border-radius: 12px;
	transition: all 0.3s ease;
	cursor: pointer;
	text-align: center;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
		border-color: ${({ theme }) => theme.colors.primary};

		${FeatureIcon} {
			color: ${({ theme }) => theme.colors.secondary};
			transform: scale(1.1);
		}
	}

	&:active {
		transform: translateY(-2px);
	}
`;

export const ModelTitle = styled.h3`
	font-size: 1.3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	margin: 0;
	font-family: "TrajanPro", serif;
`;

export const ModelDescription = styled.p`
	font-size: 0.95rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	line-height: 1.5;
	margin: 0;
	max-width: 250px;
`;
