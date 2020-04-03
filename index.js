const fileName = 'assets.json';

class MyPlugin {
	apply(compiler) {
		compiler.plugin("emit", function(compilation, callback) {
			let assets = [];
			Object.keys(compilation.assets).forEach(assetName => {
				assets.push(assetName);
			});

			Object.keys(compilation.options.entry).forEach(entry => {
				assets.push(entry + '.html');
			})

			assets.push(fileName);
			 
			assets = assets.map(item => "'" + item + "'");
			
			compilation.assets[fileName] = {
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

module.exports = MyPlugin;