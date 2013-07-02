#Flowers.js
This module provides two things: a list of names of most flowers, and a map with every name and a list of its alternate names.

Use:

```javascript
	var flowers = require('flowers');
	console.log('list:', flowers.list);
	console.log('map:', flowers.map);
```

Output:

```
	list: [
		'Garden Rose',
		'Zinnia',
		'Wormwood',
		...,
		'Acacia',
		'Mimosa',
		'Wattle'
	]
	map: {
		'Garden Rose': [],
		'Zinnia': [],
		'Artemisia': [ 'Wormwood', 'Mugwort' ],
		'Mugwort': [ 'Wormwood', 'Artemisia' ],
		'Wormwood': [ 'Mugwort', 'Artemisia' ],
		...,
		Achillea: ['Yarrow' ],
		Wattle: [ 'Acacia', 'Mimosa' ],
		Acacia: [ 'Mimosa', 'Wattle' ]
	}
```

The MIT License (MIT)

Copyright (c) 2013 Bloompop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

