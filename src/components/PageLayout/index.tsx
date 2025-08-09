import React from "react";
import { HeaderIndex } from "../RouterRender";
import * as S from "./styles";

interface PageLayoutProps {
	children: React.ReactNode;
	className?: string;
	useShowcaseSection?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className, useShowcaseSection = false }) => {
	return (
		<>
			<HeaderIndex />
			<S.PageContainer className={className}>
				{useShowcaseSection ? (
					<S.ShowcaseSection>{children}</S.ShowcaseSection>
				) : (
					<S.ContentWrapper>{children}</S.ContentWrapper>
				)}
			</S.PageContainer>
		</>
	);
};

export default PageLayout;
