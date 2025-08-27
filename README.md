📱 Projeto React Native com Expo

Este é um projeto criado com Expo e React Native.
O objetivo é facilitar o desenvolvimento mobile rodando no Android, iOS ou diretamente no seu celular físico.

O projeto é baseado em um CRUD de itens para um To Do List onde o usuario pode criar, ler, editar e deletar os itens da lista tudo rodando em memoria para fins de testes, contudo ao reiniciar o projeto os dados são resetados.

🚀 Como rodar o projeto
1. Clonar o repositório

Abra o terminal e rode:

git clone https://github.com/Guilherme-Dias-gomes/crudMobile
cd crudMobile

2. Instalar as dependências

Execute o comando:

npm install


Isso vai baixar todas as bibliotecas necessárias.

3. Rodar o app

Inicie o servidor de desenvolvimento do Expo:

npx expo start


Isso abrirá o Metro Bundler no seu navegador.

📲 Como abrir o app
🔹 No celular físico

Baixe o aplicativo Expo Go na Play Store
 ou App Store
.

No navegador que abriu após o npx expo start, escaneie o QR Code com o celular.

O app abrirá automaticamente no Expo Go.

🔹 No Android Studio (Emulador)

Instale o Android Studio
.

Configure um emulador Android (AVD).

Com o emulador rodando, volte ao terminal do projeto e rode:

npx expo start


Pressione a para abrir no emulador Android.

🔹 No iOS (somente em Mac)

Instale o Xcode
.

Com o simulador iOS aberto, rode:

npx expo start


Pressione i para abrir no simulador.

🛠 Scripts úteis

npm start → inicia o servidor do Expo.

npm run reset-project → reseta o projeto (limpa arquivos e recria estrutura inicial).

npm run android → abre direto no emulador Android.

npm run ios → abre direto no simulador iOS (MacOS necessário).

📚 Documentação útil

Expo Docs

React Native Docs
