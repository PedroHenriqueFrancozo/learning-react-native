## 🏗️ Estrutura e Boas Práticas de Organização
Para manter o projeto escalável e organizado, segui a padronização de pastas dentro do diretório `src/` (Source), separando a lógica de negócio das configurações do framework:

1. **`src/`**: Pasta principal que centraliza o código da aplicação.
2. **`src/components/`**: Destinada a componentes reutilizáveis (botões, cards, inputs).
3. **`src/screens/`**: Destinada às telas completas da aplicação.

---

## 💡 Conceitos Fundamentais

### 1. Tudo é um Componente
No React Native, a interface é construída através de componentes. Um componente é, essencialmente, uma função que retorna algo para ser renderizado na tela.

### 2. Regras de Ouro (Boas Práticas)
1. **Nomenclatura:** Todo componente deve começar com **Letra Maiúscula** (PascalCase). Ex: `MinhaTela.tsx`.
2. **Estrutura Mínima:** Todo arquivo de componente precisa:
    1. Importar o React.
    2. Importar os elementos do `react-native` (View, Text, etc).
    3. Ter uma função de exportação (`export default`).
    4. Retornar um JSX (conteúdo visual).

### 3. Anatomia de um Componente
````tsx`
`import React from 'react';`
`import { View, Text } from 'react-native';`

`const MinhaScreen = () => {`
  `return (`
    `<View>`
      `<Text>Olá, React Native!</Text>`
    `</View>`
  `);`
`};`

`export default MinhaScreen;`

---

# 🔄 Renderização e Fragments
Como exibir um componente?
Para que um componente apareça na tela, ele deve ser importado e chamado dentro do `App.tsx` (ou dentro de outro componente pai) utilizando a sintaxe de tag: `<MinhaScreen />`.
`
### O uso de Fragments `<> </>`
Uma função em React só pode retornar um único elemento pai. Caso precise retornar vários elementos sem adicionar uma `View` extra (que pode bagunçar o layout ou o peso do DOM), utiliza o **Fragment**:

`return (`
  `<>`
    `<ComponenteUm />`
    `<ComponenteDois />`
  `</>`
`);`

# 🛠️ Refatoração: Separação de Responsabilidades (Clean Code)
Hoje o projeto avançou para uma estrutura mais profissional, focando em organização e produtividade.

### 📁 Estrutura por Pasta de Componente
Para evitar que o projeto vire uma "bagunça" de arquivos soltos, adotei a estratégia de **uma pasta por componente**.
- **Exemplo:** Dentro de `src/screens/Home/`, temos todos os arquivos específicos dessa tela.

### 🎨 Separação de Estilos (Styles)
Para manter o código limpo, os estilos foram movidos para um arquivo dedicado (`styles.tsx`).

1. Crei o estilo no arquivo `styles.tsx`.
2. Utilei o `export const` nos objetos de estilo.
3. Importei no componente principal para aplicar as propriedades.