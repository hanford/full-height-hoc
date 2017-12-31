## full-height-hoc

Loop over DOM elements setting/unsetting height to 100% so you can use `flexbox` height

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

MIT © [Jack Hanford](http://jackhanford.com)
