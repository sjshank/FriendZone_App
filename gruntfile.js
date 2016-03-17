module.exports = function (grunt) {
	grunt.initConfig({
		clean : {
			dist: ["dist/"]
		},
		jshint : {
			dist: ['client/js/**/*.js']
		},
		concat : {
			dist: {
				src: ["client/js/**/*.js"],
				dest: "dist/client/js/script.js"
			}
		},
		uglify : {
			dist: {
				src: ["dist/client/js/script.js"],
				dest: "dist/client/js/script-min.js"
			}
		},
		copy : {
			dist: {
				src: ["client/css/*", "client/data/*", "client/images/*", "client/views/*"],
				dest: "dist/"
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("dist", ["clean", "jshint", "concat", "uglify", "copy"])

}