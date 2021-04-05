<div align="center" id="top">
  <!-- <a href="https://nativetimeago.netlify.com">Demo</a> -->
</div>

<h1 align="center">React Native Gallery</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fera765/gallery-rn?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fera765/gallery-rn?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fera765/gallery-rn?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fera765/gallery-rn?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/fera765/gallery-rn?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/fera765/gallery-rn?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/fera765/gallery-rn?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Native Gallery 🚀 Em construção...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#wrenchs-funcionalidades">Installation</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Functionalities</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Technology</a> &#xa0; | &#xa0;
  <a href="#star-example">Example</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
</p>

<br>

## :wrench: Installation ##


```txt
Install cameraroll

yarn add @react-native-community/cameraroll@4.0.0

or if you prefer

npm install @react-native-community/cameraroll@4.0.0 --save

Then link to the project
react-native link @react-native-community/cameraroll


Install Vector Icons

yarn add react-native-vector-icons

or if you prefer

npm install react-native-vector-icons --save

Then link to the project
react-native link react-native-vector-icons

```

In case of any problem when executing the project, access the website  - [@react-native-community/cameraroll](https://www.npmjs.com/package/@react-native-community/cameraroll)
## :sparkles: Functionalities ##

:heavy_check_mark: Gallery for selecting media;

## :star: Example ##

Example
```js
import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import Gallery from 'gallery-rn';

interface IITem {
  id: string;
  name: string;
  uri: string;
}

const App = () => {
  const [images, setImages] = useState<IITem[]>([]);

  const handleListImages = useCallback((items: IITem[]) => {
    setImages([...items]);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Gallery
        onPress={e => handleListImages(e)}
        limit={20}
        listSelected={images}
      />
    </View>
  )
}
```

## :rocket: Technology ##

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@react-native-community/cameraroll](https://www.npmjs.com/package/@react-native-community/cameraroll)
- [md5](https://www.npmjs.com/package/md5)
- [rn-css](https://www.npmjs.com/package/rn-css)

## :memo: Licença ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
