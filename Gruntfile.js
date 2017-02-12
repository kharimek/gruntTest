module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      all: ["Gruntfile.js", "src/js/**/*.js"]
    },

    sass: {
      dev: {
        options: {
          style: "expanded"
        },
        src: "src/scss/master.scss",
        dest: "src/css/master.scss"
      }
    }


  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-sass");


  // Default task(s).
  grunt.registerTask("default", ["jshint", "sass"]);
  grunt.registerTask("sass", ["sass"]);

};
