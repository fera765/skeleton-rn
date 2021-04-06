<div align="center" id="top">
  <!-- <a href="https://nativetimeago.netlify.com">Demo</a> -->
</div>

<h1 align="center">React Native Skeleton</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fera765/skeleton-rn?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fera765/skeleton-rn?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fera765/skeleton-rn?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fera765/skeleton-rn?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/fera765/skeleton-rn?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/fera765/skeleton-rn?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/fera765/skeleton-rn?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Native Skeleton 🚀 Em construção...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#wrenchs-funcionalidades">Installation</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Functionalities</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Technology</a> &#xa0; | &#xa0;
  <a href="#star-example">Example</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/fera765/skeleton-rn/main/demo/exemplo.gif" />
</p>

<br>

## :wrench: Installation ##


```txt
Install skeleton

yarn add skeleton-rn

or if you prefer

npm install skeleton-rn
```

## :sparkles: Functionalities ##

:heavy_check_mark: Create a skeleton of your component with a loading effect.

## :star: Example ##

Example 01
```js
import React from 'react';
import { View } from 'react-native';
import Skeleton from 'skeleton-rn';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Skeleton
        background={['#e9e6ed', '#dddddd', '#eeeeee', '#e9e6ed', '#e9e6ed']}
        duration={3000}
      />
      <Skeleton />
    </View>
  );
};

export default App;

```

Example 02 styled-components or rn-css
```js
//styles.ts
import Skeleton from 'skeleton-rn';
import styled from 'styled-components/native';
//import styled from 'rn-css';

export const Name = styled(Skeleton)`
  widht: 100px;
  height: 40px;
  border-radius: 20px;
`;

import React from 'react';
import { View } from 'react-native';
import { Name } from './styles';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <Name />
    </View>
  );
};

export default App;

```

## :rocket: Technology ##

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## :memo: Licença ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
