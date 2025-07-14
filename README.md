AuthFlow React flusso di autenticazione
Sistema de login funcional em React. Demonstra o fluxo de autenticação completo com gerenciamento de estado (Hooks), roteamento (React Router) e simulação de API. Inclui navegação para um dashboard protegido e feedback de UX (loading/erros), servindo como um projeto de estudo completo.

🎥 Demo
(Recomendação importante: Grave um GIF curto mostrando o fluxo de login funcionando e coloque aqui! Isso valoriza muito o seu projeto.)

Você pode usar ferramentas como LICEcap ou ScreenToGif para gravar a tela.

![Placeholder para o GIF do seu projeto]

✨ Funcionalidades
Formulário Interativo: Validação de campos e controle de dados em tempo real com componentes controlados.

Gerenciamento de Estado com Hooks: Uso de useState para gerenciar inputs, mensagens e estados de carregamento, e useNavigate para o redirecionamento.

Roteamento Dinâmico: Navegação entre a tela de login e um "dashboard" protegido utilizando a biblioteca React Router DOM.

Simulação de API: O projeto simula uma chamada de API para autenticação, com um modo "Plano B" que funciona localmente para contornar problemas de rede (firewall/proxy).

Feedback Visual (UX): Mensagens de sucesso e erro são exibidas dinamicamente para o usuário, e o botão de login fica desabilitado com um texto de "carregando" durante a operação.

Acessibilidade: Uso de <label>s e atributos htmlFor para garantir que o formulário seja acessível.

🛠️ Tecnologias Utilizadas
React.js (v18+)

Vite

React Router DOM (v6)

JavaScript (ES6+)

CSS3

🚀 Como Executar o Projeto
Para rodar este projeto localmente, siga os passos abaixo:

1. Pré-requisitos:

É necessário ter o Node.js instalado (versão 16 ou superior).

Um gerenciador de pacotes como npm ou Yarn.

2. Clone o repositório:

Bash

git clone https://github.com/dkzzyn/AuthFlow-React
3. Navegue até a pasta do projeto:

Bash

cd nome-do-seu-repositorio
4. Instale as dependências:

Bash

npm install
5. Inicie o servidor de desenvolvimento:

Bash

npm run dev
Abra seu navegador e acesse http://localhost:5173 (ou a porta indicada no seu terminal).

Credenciais para teste:

Email: eve.holt@reqres.in

Senha: (qualquer senha)

🧠 Conceitos Praticados neste Projeto
Criação de Componentes Funcionais em React.

Gerenciamento de Estado com o hook useState.

Componentes Controlados para formulários.

Manuseio de Eventos (onSubmit).

Renderização Condicional para exibir mensagens e alterar o estado do botão.

Implementação de Roteamento Client-Side com React Router DOM (BrowserRouter, Routes, Route).

Navegação Programática com o hook useNavigate.

Simulação de Operações Assíncronas (chamadas de API) com setTimeout.

Tratamento de Erros com a estrutura try...catch.

Acessibilidade em formulários HTML.

📝 Licença
Este projeto está sob a licença MIT.

Feito com ❤️ por [Seu Nome Aqui] - 2025.
