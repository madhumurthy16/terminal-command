const fs = require('fs');

module.exports.ls = () => {
	fs.readdir('./', (err,file) => {
		const filesToString = file.reduce((acc, file) => {
			return `${acc} ${file}`;
	},	'');
	console.log(filesToString);	
	});
};

module.exports.touch = (name) => {
	fs.writeFile(name, '', (err) => {
		if(err) throw err;
		console.log(`'${name}' file created successfully`);
	});
};

module.exports.mkdir = (name) => {
	fs.mkdir(`./${name}`, (err) => {
		if(err) throw error;
		console.log(`'${name}' folder created successfully`);
	});
};

