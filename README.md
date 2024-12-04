# Calculadora de IMC

Este projeto consiste em um sistema para calcular o IMC (Índice de Massa Corporal) de uma pessoa. O sistema foi desenvolvido utilizando **Node.js** para o backend e **HTML, CSS, e JavaScript** para o frontend.

## Tecnologias Usadas

- **Node.js** (com o framework **Express**) para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para manipulação do DOM e envio de dados ao backend via AJAX.

## Funcionalidade

O sistema permite ao usuário inserir o peso e a altura de uma pessoa, e o backend calcula o IMC utilizando a fórmula:

\[
IMC = \frac{{peso}}{{altura^2}}
\]

O resultado é retornado ao frontend e exibido na página.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone <URL do repositório>
cd imc-calculator
```

### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:

```bash
npm install
```

### 3. Rodando o servidor

Para iniciar o servidor, execute:

```bash
node server.js
```

### 4. Acessando a Página Web

Abra o navegador e acesse http://localhost:3000. Você verá a interface da calculadora de IMC.

### 5. Usando a Calculadora
- **Insira o peso e a altura nos campos correspondentes.**
- **Clique no botão "Calcular IMC".**
- **O sistema calculará o IMC e exibirá o resultado logo abaixo do botão.**