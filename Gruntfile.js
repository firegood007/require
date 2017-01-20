module.exports = function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less: {
            main: {
                expand: true,
                cwd : 'style/less/',
                src : '*.less',
                dest: 'style/css/',
                ext : '.css'
            }

        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default',['less']);
}