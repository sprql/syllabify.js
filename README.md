# Syllabify

Split Russian words into syllables (фонетическое деление слова на слоги)

## Install

```
$ npm install syllabify
```

## Usage

```js
const syllabify = require('syllabify');

syllabify("Вдохновение");
//=> [ 'Вдо', 'хно', 'ве', 'ни', 'е' ]
```


## API

### syllabify(word)

#### Parameters

##### word

Type: `string`

A word to syllabify.

#### Return value

Type: `array`

Array of syllables of the word.
