# Primeiro Servidor Node.js

Este projeto cria um servidor HTTP simples usando Node.js que serve um arquivo HTML (index.html) na rota raiz (`/`). Ele retorna uma resposta 404 para qualquer outra rota.

## Como usar

### Pré-requisitos
- Node.js instalado na sua máquina (versão 12 ou superior).

### Instruções

1. Clone o repositório ou baixe o código-fonte.
2. Navegue até o diretório do projeto.
3. Certifique-se de que o arquivo `index.html` está presente no diretório.
4. Execute o servidor com o comando:
   ```bash
   npm start
   ```
5. Abra o navegador e vá para `http://localhost:3000` para visualizar o conteúdo do `index.html`.

## Estrutura do Projeto

```
/
├── index.html       # Arquivo HTML que será servido
├── server.js        # Código do servidor Node.js
└── package.json     # Configurações do projeto e dependências
```

## Configurações Adicionais

Você pode modificar o arquivo `server.js` para adicionar mais rotas ou mudar a porta do servidor conforme necessário.

