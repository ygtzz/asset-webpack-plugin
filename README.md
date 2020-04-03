# asset-webpack-plugin
a webpack plugin to generate webpack assets into a json

<!-- ## Install

```bash
npm i asset-webpack-plugin -D
``` -->

## Usage

```javascript
const AssetWebpackPlugin = require('asset-webpack-plugin');

plugins: {
    ...
    new AssetWebpackPlugin({
        name: 'assets.json'
    })
}
```

## Params

Parameter | Type | Default | Options | Description
--------- | ---- | ------| ----- |---------------
name | `string` | 'assets.json' |  | the file name generated in output

## Preview

assets json list all assets in output directory, like below:

```javascript
[
'/static/images/banner-bg.png'
,'/static/images/banner-detail-arc.png'
...

,'static/scripts/common.f31d2040.js'
...
,'static/style/detail.83a6c22c.css'
...
,'assets.json'
,'user.html'
,'index.html'
]
```



