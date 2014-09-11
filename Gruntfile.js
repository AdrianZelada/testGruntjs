module.exports= function(grunt){


	grunt.initConfig({
		person:{
			firstName:'Walter'
		},
		// watch:{
		// 	files:["texto.txt"],
		// 	tasks:["pat",]
		// },
		watch:{
			files:"app/**/*.js",
			tasks:["uglify"]
		},
		tasks:{
			one:"first",
			two:"second"
		},
		files:['.js','.html'],
		compile:"<% _.forEach (files, function(files){%>"+"File type : <%=files %> "+"<%}) %>",
		uglify:{
			dist:{
				files:{
					"dist/app.min.js":"app/**/*.js"
				}
			}
		}  
	}); 

	// grunt.initConfig(grunt.file.readJSON("config.json"));
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default','Tarea Hola Mundo',function(data){
		grunt.log.writeln('Hola '+data);
	});	

	grunt.registerTask('task1','Tarea Hola Mundo',function(){
		grunt.log.write('Adios '+grunt.config.get('person').firstName+" "+grunt.config.get('person').lastName);
	});	
	// ejemplo utilizando o viendo lo q pasa en otro archivo 
	grunt.registerTask('pat',function(){
		grunt.log.write('testWatch');
	});	
	// compila el codigo anterior
	grunt.registerTask('compil',function(){
		grunt.log.writeln(grunt.config.get('compile'));
	});	

	grunt.registerTask('compx',function(){
		grunt.log.writeln(grunt.template.process("<%= files % >" ));
	});	

	// saca fecha y hora exacta de ejecucion 
	grunt.registerTask('today',function(){
		grunt.log.writeln(grunt.template.today());
	});	

	// Multi-Tareas 

	grunt.registerMultiTask('tasks',function(){
		grunt.log.writeln(this.target+' '+ this.data);
	});
	// grunt.initConfig({
	// 	concat:{
	// 		all:{ 
	// 			src:"/scripts/**/*.js",
	// 			dest:"./distribucoin/todos.js"
	// 		} 
	// 	}
	// 	uglify: {
	// 	    all: {
	// 	        src: "./distribucion/todos.js",
	// 	        dest: './distribucion/todos.min.js'
	// 	    }
	// 	}
	// });
	// grunt.initConfig({
	//     concat: {
	//       all: {
	//         src: "./scripts/**/*.js",
	//         dest: "./distribucion/todos.js"
	//     	}
	//       },
	//     uglify: {
	//       all: {
	//         src: "./distribucion/todos.js",
	//         dest: './distribucion/todos.min.js'
	//     	}
	//       }
 //  	});

	// grunt.loadNpmTasks('grunt-contrib-concat');
	// grunt.loadNpmTasks('grunt-contrib-uglify');


	// grunt.registerTask('default',['concat','uglify']);
	// grunt.registerTask('dist',['default']);
}

