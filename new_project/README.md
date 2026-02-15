![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=D04A37)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Iniciando o Projeto
Este projeto foi desenvolvido com o objetivo de aprofundar o entendimento sobre o funcionamento do framework e sua estrutura.

### 1. Imports
No React Native, tudo é baseado em **componentes**. Por isso, precisamos importar os componentes fundamentais da biblioteca para que possamos utilizá-los na construção da interface.

### 2. Funções e Componentes
No React Native, os componentes são definidos como funções que retornam elementos visuais.

**Regra:** Uma função deve retornar apenas um componente pai. Se tentar retornar dois componentes soltos (irmãos) sem um "pai" em comum, o código apresentará um erro de sintaxe.

**Dica:** Para retornar múltiplos componentes sem adicionar uma nova View desnecessária à hierarquia, utilizamos o <> </> (Fragment).

### 3. Estilização
Para estilizar um componente, utilizamos a propriedade `style`. A forma como passamos os valores depende de onde o estilo foi definido:

- **Estilização Interna (Inline Style):** Utilizamos dois pares de chaves `{{ }}`. O primeiro par indica que estamos inserindo código JavaScript no JSX, e o segundo par define o objeto de estilo propriamente dito.

- **Estilização Externa (StyleSheet):** Utilizamos apenas um par de chaves `{ }` para passar a referência da variável que contém os estilos (geralmente criada com `StyleSheet.create`).

### 4. Criando uma Folha de Estilos (StyleSheet)
Para manter o código organizado e ganhar performance, utilizamos o objeto `StyleSheet`.

**Passo a passo:**

1. **Importação:** Primeiro, devemos importar o `StyleSheet` de dentro do `react-native`.
2. **Definição:** Criamos uma constante (geralmente chamada de `styles`) fora da função do componente.
3. **Atribuição:** Utilizamos o método `.create()` para definir nossos objetos de estilo.

### 5. Trabalhando com Imagens
Para utilizar imagens no React Native, precisamos do componente Image. Existem duas formas principais de carregar imagens: locais (estáticas) e remotas (via URL).

**Como importar uma imagem local:**

`import Logo from './assets/logo.png';`

**Como utilizar no componente:**
O componente `Image` utiliza a propriedade `source`. Diferente do HTML (que usa `src`), no React Native passamos o nome da importação entre chaves.

`<Image source={Logo} style={styles.image} />`

### 6. Configuração de Tipagem (TypeScript)
Por padrão, o TypeScript não reconhece arquivos de imagem (como `.png`, `.jpg` ou `.svg`) como módulos válidos. Para resolver isso e evitar erros de compilação, devemos criar um arquivo de definição de tipos.

**Passos:**

1. Crie um arquivo chamado `index.d.ts` (ou `declarations.d.ts`) na raiz ou na pasta `@types`.
2. Adicione a declaração de módulo para cada extensão que você pretende usar:

`declare module '*.png';`
`declare module '*.jpg';`
`declare module '*.jpeg';`
`declare module '*.svg';`