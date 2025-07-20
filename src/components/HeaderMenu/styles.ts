import styled from "styled-components";

export const Navbar = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 80px;
	width: 100%;
	position: fixed;
	top: 0;
	background: ${(props) => props.theme.getColor("white", 0.1)};
	backdrop-filter: blur(20px);
	border-bottom: 1px solid ${(props) => props.theme.getColor("grey", 0.2)};
	justify-content: space-between;
	padding: 0 2rem;
	z-index: 100;
	box-shadow: 0 2px 20px ${(props) => props.theme.getColor("black", 0.08)};

	@media (max-width: 768px) {
		height: 70px;
		padding: 0 1rem;
	}
`;

export const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.colors.secondary};
	font-family: ${(props) => props.theme.fonts.animation || "serif"};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.05);
		color: ${(props) => props.theme.colors.secondaryDark};
	}

	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
`;

export const NavItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 768px) {
		gap: 0.2rem;
	}
`;

export const Listed = styled.a`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 50px;
	padding: 0 1.5rem;
	font-size: 1rem;
	font-weight: 500;
	color: ${(props) => props.theme.colors.fontColorStandart};
	border-radius: 25px;
	border: 2px solid transparent;
	transition: all 0.3s ease;
	position: relative;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	cursor: pointer;
	text-decoration: none;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: ${(props) => props.theme.colors.secondary};
		border-radius: 25px;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
		z-index: -1;
	}

	&:hover {
		color: ${(props) => props.theme.colors.white};
		border-color: ${(props) => props.theme.colors.secondary};
		transform: translateY(-2px);
		box-shadow: 0 4px 15px ${(props) => props.theme.getColor("secondary", 0.3)};

		&::before {
			transform: scaleX(1);
		}
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.colors.secondary};
		outline-offset: 2px;
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
		font-size: 0.9rem;
		height: 45px;
	}

	@media (max-width: 480px) {
		padding: 0 0.8rem;
		font-size: 0.8rem;
		height: 40px;
	}
`;

export const ThemeToggle = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	background: ${(props) => props.theme.getColor("grey", 0.1)};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	border-radius: 50%;
	cursor: pointer;
	margin-left: 1rem;
	transition: all 0.3s ease;
	backdrop-filter: blur(10px);

	svg {
		font-size: 1.2rem;
		color: ${(props) => props.theme.colors.secondary};
		transition: all 0.3s ease;
	}

	&:hover {
		background: ${(props) => props.theme.colors.secondary};
		transform: scale(1.05);
		box-shadow: 0 4px 15px ${(props) => props.theme.getColor("secondary", 0.3)};

		svg {
			color: ${(props) => props.theme.colors.white};
			transform: rotate(15deg);
		}
	}

	&:focus-visible {
		outline: 3px solid ${(props) => props.theme.getColor("secondary", 0.5)};
		outline-offset: 3px;
	}

	@media (max-width: 768px) {
		width: 45px;
		height: 45px;
		margin-left: 0.5rem;

		svg {
			font-size: 1rem;
		}
	}
`;
