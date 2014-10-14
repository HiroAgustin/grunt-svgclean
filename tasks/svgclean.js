/*
 * grunt-svgclean
 * https://github.com/HiroAgustin/grunt-svgclean
 *
 * Copyright (c) 2014 HiroAgustin
 * Licensed under the MIT license.
 */
;(function (svgclean, eachAsync, path)
{
  'use strict';

  module.exports = function (grunt)
  {
    grunt.registerMultiTask('svgclean', 'Clean svg', function ()
    {
      var cwd = ''
        , src = ''
        , dest = ''
        , done = this.async();

      eachAsync(

        this.files

      , function (file)
        {
          src = file.src[0];
          dest = file.dest;

          if (!grunt.file.exists(src))
            grunt.log.warn('Source file "' + src + '" not found.');

          grunt.file.write(dest);
          svgclean(src, dest);

          // Print a success message.
          grunt.log.writeln('File "' + dest + '" created.');
        }

      , function ()
        {
          grunt.log.writeln('All done.');
          done();
        }
      );
    });
  };

}(require('svgclean'), require('each-async'), require('path')));
