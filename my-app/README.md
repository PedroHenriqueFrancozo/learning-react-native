![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=D04A37)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# Iniciando curso de REACT NATIVE

# Expo
Utilizar Expo para visualizar a tela de seu desenvolvimento, basta executar codigo no terminal do VSCode

`- npm install —global expo-cli`

### Criando um projeto / Expo - Criando um projeto Reack Native

Dentro de um folder basta digitar no terminal

- `npx create-expo-app my-app -t`

1. my-app / é o nome que deseja para o aplicativo
2. -t / Expo permite escolher alguns templates para iniciar o desenvolvimento, quando não especificado o Expo utiliza o template Blank - a minimal app as clean as an empty canvas.
3. -t / Blank (TypeScript) já vem com o projeto limpo e só com o TypeCript hábilitado.
4. Assim que terminar de criar o projeto sempre tem que navegar para pasta criada  `cd my-app`
5. Para saber se está dentro da pasta do projeto basta digitar o comando `ls` e o projeto precisa enchergar o package.json

### Expo Go

Digitar o comando

- `- expo start`

---

# Estrutura de um projeto React Native Com Expo

# 🛠️ Dependências
O arquivo `package.json` é o coração de qualque projeto que utiliza **node.js**. Nele fica todas as informações de scripts e dependências do projeto.

### Dependências de Produção 

Pacote | Versão | Descrição
| :--- | :--- | :--- |
expo | ~54.0.33	| O framework base que fornece acesso a APIs nativas e facilita o desenvolvimento cross-platform.
expo-status-bar	| ~3.0.9 | Gerencia a barra de status do dispositivo (hora, bateria, notificações) de forma simples.
react | 19.1.0 | A biblioteca principal para construção da interface baseada em componentes.
react-native | 0.81.5 | O framework que renderiza componentes React em interfaces nativas (iOS e Android).

### Dependências de Desenvolvimento

- **typescript:** Adiciona tipagem estática ao JavaScript, aumentando a segurança e produtividade no desenvolvimento.
- **@types/react:** Definições de tipos para que o TypeScript entenda as funções e propriedades do React.

# 💡 Por que essas versões?
**Nota:** As versões utilizam o prefixo tilde (`~`), o que significa que o projeto aceita atualizações de patch (correções de bugs), garantindo estabilidade e evitando mudanças quebras de código inesperadas (breaking changes).

---

# 📦 O Arquivo: package-lock.json
Se o package.json é a lista de compras, o package-lock.json é a nota fiscal detalhada com o número do lote, a marca exata e a hora da compra de cada item.

### 1. O que ele faz?
Ele registra a versão exata de cada dependência (e das dependências dessas dependências) que foi instalada no momento em que rodou o `npm install`.

No React Native/Expo, isso é crítico porque o ecossistema depende de muitas bibliotecas pequenas. Sem o `lock`, se reinstalar o projeto futuramente, o npm pode baixar uma versão "sub-minor" diferente de uma biblioteca qualquer que tenha um bug, quebrando seu build sem você ter mudado uma linha de código.

### 2. Por que ele é enorme?
O `package.json` pode ter apenas 20 linhas, mas o `package-lock.json` terá milhares. Isso acontece porque ele mapeia a **árvore de dependências completa**.

- **Exemplo:** Se instalar o expo-router. O expo-router precisa de outras 10 bibliotecas, que precisam de outras 50. O lock salva todas elas.

# ⚠️ Dica:

"Se o projeto começar a dar erros bizarros de dependência após uma atualização, tente deletar a pasta `node_modules` e o `package-lock.json`, e rode `npm install` novamente para gerar um estado limpo e atualizado."

# 🚪 O Ponto de Entrada: App.tsx
O arquivo `App.tsx` é o componente raiz da aplicação. No React Native com Expo, é aqui que tudo começa: o código que escrever aqui é o primeiro a ser renderizado na tela do dispositivo.

### 1. Estrutura Básica
Em um projeto TypeScript, encontrará três partes principais neste arquivo:

- **Imports:** Onde trazemos o `StatusBar` do Expo (para controlar a barra de bateria/hora), e os componentes básicos do `react-native` (como `View` e `Text`).
- **Função Principal:** O componente funcional `App`. Por padrão, ele retorna um JSX que centraliza o conteúdo na tela.
- **Estilização (StyleSheet):** Diferente da web onde usamos CSS externo, aqui usamos o `StyleSheet.create`. É um objeto JavaScript que o React Native transforma em estilos nativos altamente performáticos.

### 2. Anatomia do Código Padrão
No modo blank, o código se resume a:

**Container (`View`):** Funciona como a `<div>` principal.
**Conteúdo (`Text`):** Qualquer texto no React Native precisa estar dentro de um componente `<Text>`.
**StatusBar:** Um componente utilitário do Expo para garantir que o texto do sistema (relógio, wifi) fique legível sobre o fundo do seu app.

# ⚠️ Dicas de Boas Práticas:
- **Não deixe o App.tsx gigante:** À medida que o app cresce, use este arquivo apenas para configurar Providers (Temas, Contextos, Autenticação) e a **Navegação**.
- **Safe Area:** Se o texto ficar "escondido" atrás do notch (o entalhe da câmera) do iPhone, lembre-se de pesquisar sobre o `SafeAreaView`.

---

# app.json

O arquivo `app.json` contém as configurações globais do aplicativo.

### Principais Campos Explicados

Campo | Descrição
| :--- | :--- |
`nome` | O nome amigável que o usuário verá ao instalar o app.
`slug` | O identificador URL do seu projeto no ecossistema Expo.
`version` | Segue o versionamento semântico (ex: `1.0.0`). Deve ser atualizado a cada novo deploy para as lojas.
`splash` | Define a imagem e a cor de fundo que aparecem enquanto o app está sendo montado na memória.
`ios` / `android` |	Objetos onde define permissões específicas, nomes de pacotes (bundleIdentifier e package) e chaves de API.