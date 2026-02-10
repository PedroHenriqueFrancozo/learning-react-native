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

### 🛠️ Dependências
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