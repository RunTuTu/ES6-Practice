const PATH = require('path');
module.exports = {
	//编译打包的路径文件
	entry : "./src/index.js",
	//设置出口
	output : {
		path : PATH.resolve("./dist"),
		filename : "bundle.js"
	}
}
