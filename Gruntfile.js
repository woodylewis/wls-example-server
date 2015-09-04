module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            js: {
                files: [
                    '*.js',
                    '/models/*.js',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};