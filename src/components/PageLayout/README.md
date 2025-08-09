# PageLayout Component - Guia de Uso

O componente `PageLayout` foi criado para padronizar o layout das páginas e evitar problemas de sobreposição do menu de navegação fixo.

## Importação

```tsx
import PageLayout from "../../components/PageLayout";
```

## Uso Básico

### Para páginas com conteúdo centralizado:

```tsx
const MinhaPage = () => {
	return (
		<PageLayout>
			<h1>Título da Página</h1>
			<p>Conteúdo da página...</p>
		</PageLayout>
	);
};
```

### Para páginas que precisam do ShowcaseSection:

```tsx
const MinhaPage = () => {
	return (
		<PageLayout useShowcaseSection={true}>
			<ComponenteDeShowcase />
		</PageLayout>
	);
};
```

## Props

-   `children`: React.ReactNode - O conteúdo da página
-   `className?`: string - Classe CSS opcional para personalização
-   `useShowcaseSection?`: boolean - Se true, envolve o conteúdo em uma ShowcaseSection

## Características do PageLayout

✅ **Inclui automaticamente o HeaderIndex**
✅ **Aplica padding-top correto (100px desktop / 90px mobile)**
✅ **Usa a cor de fundo do tema**
✅ **Responsivo para diferentes tamanhos de tela**
✅ **Centraliza o conteúdo com max-width de 1200px**

## Migração de Páginas Existentes

### Antes:

```tsx
const MinhaPage = () => {
	return (
		<>
			<HeaderIndex />
			<Container>{/* conteúdo */}</Container>
		</>
	);
};
```

### Depois:

```tsx
const MinhaPage = () => {
	return <PageLayout>{/* conteúdo - sem Container, HeaderIndex é incluído automaticamente */}</PageLayout>;
};
```

## Evitando Problemas Comuns

❌ **NÃO faça:**

-   Adicione HeaderIndex manualmente quando usar PageLayout
-   Aplique padding-top manualmente no seu componente
-   Esqueça de considerar o menu fixo em novas páginas

✅ **FAÇA:**

-   Use sempre PageLayout para novas páginas
-   Configure useShowcaseSection=true quando necessário
-   Teste em diferentes resoluções para garantir que não há sobreposição

## Compatibilidade

Este componente é totalmente compatível com:

-   Sistema de temas da aplicação
-   Responsividade para mobile/desktop
-   Todas as rotas existentes
-   Navegação com React Router
