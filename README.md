## full-height-hoc

Loop over DOM elements setting/unsetting height to 100% so you can use `flexbox` height

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
}

export default withFullHeight(RandomComp)
```

Or with your own list of selectors
```js
import React, { Component } from 'react'
import withFullHeight from 'full-height-hoc'

class RandomComp extends Component {
  ...
}

export default withFullHeight(RandomComp, ['section', 'body', '.content', '#container'])
```


## Demo
[![Edit o9rvqxyn6z](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/o9rvqxyn6z)

MIT © [Jack Hanford](http://jackhanford.com)
