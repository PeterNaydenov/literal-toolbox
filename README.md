# literal-toolbox (@peter.naydenov/literal-toolbox)

A collection of tag functions designed to transform string literals into dynamic render functions.



## Installation

```bash
npm install @peter.naydenov/literal-toolbox
```



## Usage


Use function `obj` when you will name your placeholders and will provide data as an object.
```js
import literal from '@peter.naydenov/literal-toolbox'

const templateFn = literal.obj`${'greet'} darling ${'name'}, my age is ${'age'}. Great!`
// NOTE: Take a look that the placeholder names are wrapped in quotes!

const htmlSnippet = templateFn({
                                greet: 'Hello',
                                name: 'John',
                                age: 42
                            })
```

Use function `arr` when you will  number your placeholders and will provide data as an array. Example:
```js
const templateFn = literal.arr`${0} darling ${1}, my age is ${2}. Great!`
const htmlSnippet = templateFn(['Hello', 'John', 42])
```

Use function 'arg' when you will number your placeholders and will provide data as separate arguments. Example:
```js
const templateFn = literal.arg`${0} darling ${1}, my age is ${2}. Great!`
const htmlSnippet = templateFn ( 'Hello', 'John', 42 )
```





## Credits
'@peter.naydenov/literal-toolbox' was created and supported by Peter Naydenov.



## License
'@peter.naydenov/literal-toolbox' is released under the MIT License.


