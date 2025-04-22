# Trabalho II

**Data de Entrega:** 06/05/2025  
**Forma de Entrega:** Apresentação em sala de aula com avaliação sobre o código.

## **Implementação de CRUD de Usuários com NodeJS, Express e SQLite**

### **Objetivo**
Desenvolver uma aplicação web utilizando NodeJS, Express e SQLite que permita a gestão de usuários através de um CRUD (Create, Read, Update, Delete), utilizando HTML com EJS como template para as páginas. A aplicação deverá respeitar as regras de negócio descritas abaixo, com foco em segurança e controle de permissões.

---

### **Descrição do Sistema**

O sistema deverá permitir o gerenciamento de usuários e seus dados, incluindo autenticação, controle de sessão, e regras de acesso com base no perfil do usuário. As funcionalidades principais incluem:

---

### 1. **Autenticação e Sessão**
- A aplicação deve implementar o **processo de login e logoff**.
- O login será feito por CPF e senha, por meio da rota `/login`.
- Após o login bem-sucedido, a sessão do usuário deve ser iniciada, e o acesso às demais funcionalidades deverá ser controlado conforme o perfil do usuário (ADMIN ou CLIENTE).
- A rota `/logout` encerrará a sessão do usuário.

---

### 2. **Cadastro de Usuários**
- O CPF deve ser **único**.
- O perfil do usuário será atribuído automaticamente no momento do cadastro:
  - O **primeiro usuário** do sistema será automaticamente ADMIN.
  - Os demais usuários serão cadastrados como CLIENTE.
- Rota: `/addUser`

---

### 3. **Listagem de Usuários**
- Deve exibir 5 usuários por página (paginação).
- Deve permitir filtro por nome.
- Rota: `/users`

---

### 4. **Detalhes do Usuário**
- Exibição completa dos dados do usuário, incluindo múltiplos telefones e emails, indicando o principal.
- Rota: `/user/:id`

---

### 5. **Atualização de Usuários**
- Apenas **usuários ADMIN** poderão **editar dados de outros usuários**.
- Usuários CLIENTE só poderão editar **os próprios dados**.
- Campos **CPF e perfil** não podem ser alterados.
- Telefones e emails podem ser adicionados, removidos e marcados como principais.
- Rota: `/updateUser/:id`

---

### 6. **Exclusão de Usuários**
- Apenas **usuários ADMIN** podem excluir usuários.
- **ADMINs não podem excluir outros ADMINs**, mas podem **excluir a si mesmos**.
- Rota: `/deleteUser/:id`

---

### 7. **Multiplicidade de Telefones e Emails**
- Cada usuário pode ter múltiplos telefones e múltiplos emails (relação 1:N).
- Apenas **um telefone e um email** podem ser definidos como principal.

---

### **Requisitos Técnicos**
- **Banco de Dados:** SQLite
- **Backend:** NodeJS + Express
- **Frontend:** HTML + EJS
- **Paginação e Filtro:** Inclusos na listagem de usuários
- **Autenticação:** Sessões com controle de acesso por perfil

---

### **Atividades**

1. **Modelagem do Banco de Dados**
   - Tabelas: usuários, telefones, emails.
   - CPF único e perfil definido automaticamente.

2. **Rotas da Aplicação**
   - `/login` e `/logout`: Autenticação e encerramento de sessão.
   - `/addUser`: Formulário de cadastro.
   - `/users`: Listagem com paginação e filtro.
   - `/user/:id`: Visualização de dados.
   - `/updateUser/:id`: Formulário de atualização (restrito conforme regras).
   - `/deleteUser/:id`: Exclusão de usuários (restrito conforme regras).

3. **Validações**
   - CPF único
   - Campos imutáveis: CPF e perfil
   - Restrições de exclusão e edição baseadas no perfil do usuário

4. **Interface**
   - Toda navegação deve ser feita por botões e links (sem digitação direta de URLs para ações).

---

### **Avaliação**

O projeto será avaliado com base nos seguintes critérios:

- Implementação correta das funcionalidades
- Respeito às regras de negócio, especialmente autenticação e permissões
- Qualidade e organização do código
- Usabilidade da aplicação
- Entrega individual ou em dupla (nomes devem constar na página inicial e README.md)
