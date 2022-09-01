# akashmittal-articles

Get a list of articles published on [AkashMittal.com](https://akashmittal.com). 

## Installation

```js
# using npm
npm install akashmittal-articles

# using yarn
yarn add akashmittal-articles
```

## Usage

```js
# using require
const { getArticles } = require('akashmittal-articles');

# using import
import { getArticles } from 'akashmittal-articles';
```

## Example

### Using promises:

```js
getArticles().then((articleList) => console.log(articleList));
```

### Using async/await:

```js
const getArticles = async function () {
  const articles = await getArticles();
  console.log(articles);
};

getArticles();
```
