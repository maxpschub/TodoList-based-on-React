var http = require('http');
var fs = require('fs');

fs.readdir("build",function(err,files){
	files.forEach(function(filename){
		console.log(filename);
		var oldPath = "build/" + filename;
		fs.rename(oldPath,filename,function(err){
			if(!err){
				console.log(filename+" success!");
			}
		})
	})
})