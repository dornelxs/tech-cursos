# 📱 Tech Cursos - App de Cursos em React Native com Firebase
Este projeto implementa uma aplicação mobile para exibição de cursos utilizando React Native com Expo, integrando-se com o Firebase para autenticação e banco de dados. O app possui telas de login, cadastro, e uma home com listagem de cursos dinâmicos.

# 🚀 Instalação e Inicialização
## 📦 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

  - Node.js (versão 14 ou superior)
  - npm ou yarn
  - Expo CLI (caso ainda não tenha, instale com o comando abaixo):
  ```bash
    npm install -g expo-cli
  ````
# 📥 Clonando o repositório
  ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd nome-do-projeto
  ````

# 📁 Entrar na pasta do projeto recém-criado
  ```bash
  cd nome-do-projeto
  ````
# 🌐 Instalar **react-native-web** e dependências necessárias para rodar no navegador
  ```bash
npx expo install react-dom react-native-web @expo/metro-runtime

````

# 🗂️ Instalando as dependências
  ```bash
    npm install
    ou
    yarn
  ````

# 📂 Estrutura do Projeto
```bash
.
├── .expo/                          # Dados internos do Expo (ignorar)
├── assets/                         # Imagens e recursos estáticos
├── node_modules/                   # Módulos instalados com npm/yarn
├── src/                            # Código-fonte principal
│   ├── config/
│   │   └── firebaseConfig.js       # Configuração da conexão com Firebase
│   ├── navigation/                 # (opcional) Arquivos de navegação
│   ├── screens/                    # Telas do app
│   │   ├── CursoFormScreen.js      # Tela para adicionar/editar cursos
│   │   ├── DetailsScreen.js        # Tela com detalhes de um curso
│   │   ├── HomeScreen.js           # Tela inicial com listagem de cursos
│   │   ├── LoginScreen.js          # Tela de autenticação
│   │   └── ProfileScreen.js        # Tela de perfil do usuário
│   └── services/
│       └── CursoService.js         # Lógica de comunicação com Firestore
├── .env                            # Variáveis de ambiente (ocultar dados sensíveis)
├── .gitignore                      # Arquivos/pastas ignorados pelo Git
├── App.js                          # Ponto de entrada principal do app
├── app.json                        # Configurações do Expo
├── babel.config.js                 # Configurações do Babel
├── index.js                        # Inicializador do projeto (linka com App.js)
├── package.json                    # Dependências e scripts do projeto
├── package-lock.json               # Versões travadas das dependências

````
## ⚙️ Arquivos de Configuração do Projeto
O funcionamento correto deste projeto depende de alguns arquivos essenciais de configuração, que organizam o ambiente de execução, o empacotamento e a integração com serviços externos:

**package.json**
-
Este é o arquivo central de configuração do projeto Node.js. Ele define:
  - As dependências e devDependencies necessárias para a aplicação funcionar (como **react**, **expo**, **firebase**, etc.).
  - Os scripts disponíveis para rodar comandos (como **start**, **build**, **test**).
  - O nome, versão e outras metainformações do projeto.
-
⚠️ Modificar este arquivo manualmente sem conhecimento pode quebrar o projeto. Sempre use **npm install** ou **expo install** para gerenciar pacotes.

**babel.config.js**
-
Este arquivo configura o Babel, o transpiler usado para transformar código moderno JavaScript/JSX em uma versão compatível com diferentes dispositivos.
  ```bash
  Por exemplo:
  module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
  ````
Isso garante compatibilidade do React Native com o ambiente do Expo.

**firebaseConfig.js** (ou **.ts**)
-
Este arquivo é responsável por conter as credenciais e chaves de acesso ao Firebase. Ele conecta sua aplicação ao backend do Firebase, permitindo autenticação, banco de dados, storage, etc.
  ```bash
Exemplo comum de conteúdo:
    import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};

export const app = initializeApp(firebaseConfig);
  ````
✅ Boas práticas: Mantenha essas chaves fora do código-fonte visível e use variáveis de ambiente para segurança.

**.env**
-
Este é um arquivo oculto onde você define suas variáveis de ambiente, como as chaves do Firebase.
  ```bash
    Exemplo:
    API_KEY=AIzaSyD...
AUTH_DOMAIN=seu-app.firebaseapp.com
PROJECT_ID=seu-app
...
  ````
⚠️ Nunca envie esse arquivo para repositórios públicos. Adicione **.env** ao seu **.gitignore**.

**.gitignore**
-
Este arquivo define o que deve ser ignorado pelo Git. Geralmente inclui:
```bash
node_modules
.env
dist
````
⚠️Isso evita que arquivos sensíveis ou pesados sejam enviados para o repositório.

-
# ▶️ Iniciando o projeto
Com tudo instalado e configurado, execute:
```bash
 npx expo start
````
Isso abrirá o Expo Developer Tools em seu navegador. A partir daí, você pode:
 - Escanear o QR code com o app Expo Go (iOS ou Android).
 - Rodar no emulador Android/iOS se estiver configurado.

