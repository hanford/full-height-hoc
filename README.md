## full-height-hoc

Defer expensive react rendering with [rAF](https://www.npmjs.com/package/raf)

<br />

## Install

```
$ npm install full-height-hoc --save
```

## Usage

```js
import React, { Component } from 'react'
import withFullHeight from 'full-height-hoc'

class RandomComp extends Component {
  ...

  render () {
    ...
  }
}

export default withFullHeight(RandomComp, ['#my-selectors', 'html'])
```

MIT © [Jack Hanford](http://jackhanford.com)
