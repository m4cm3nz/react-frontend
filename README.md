## Packages
- boiler plate to create package.json file
  yarn init -y

- install react and react-dom
  yarn add react react-dom

- Babel: Convert React code to supported js browser code
  https://babeljs.io/docs/en/configuration#babelconfigjson

  yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli webpack webpack-cli
  yarn add @babel/cli
  yarn babel src/index.js --out-file public/bundle.js

- Webpack use specific loaders to diferent code types (.js, .css, .png) 
  Loaders: babel-loader, css-loader, image-loader

  yarn add babel-loader
  yarn add style-loader css-loader
  yarn add file-loader

- Development server
  yarn add webpack-dev-server
  yarn webpack --mode development  
  yarn webpack serve --mode development

- API

  yarn add axios

-- ASYNC AWAIT com o babel

  yarn add @babel/plugin-transform-runtime -D

## Conceitos
props - parametros para os componentes; 
childern - recebe o conteúdo de um componente;
useState - observa eventos e altera o estado dos objetos;
useEffect - observa eventos e dispara comandos;