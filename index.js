let defaultOptions = {
    name: 'assets.json'
}

class AssetWebpackPlugin {
	constructor(options){
		this.options = options;
	}
	apply(compiler) {
		let self = this;
		compiler.plugin("emit", function(compilation, callback) {
			let assets = [];
			Object.keys(compilation.assets).forEach(assetName => {
				assets.push(assetName);
			});

			Object.keys(compilation.options.entry).forEach(entry => {
				assets.push(entry + '.html');
			})
            
            let options = Object.assign({},defaultOptions,self.options);
			assets.push(options.name);
			 
			assets = assets.map(item => "'" + item + "'");
			
			compilation.assets[options.name] = {
				source() {
				  return '[\r\n' + assets.join('\r\n,') + '\r\n]';
				},
				size() {
				  return this.source().length;
				}
			};

			callback();
		});
	}
}

module.exports = AssetWebpackPlugin;