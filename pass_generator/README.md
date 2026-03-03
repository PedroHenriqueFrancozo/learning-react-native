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