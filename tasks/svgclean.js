/*
 * grunt-svgclean
 * https://github.com/HiroAgustin/grunt-svgclean
 *
 * Copyright (c) 2014 HiroAgustin
 * Licensed under the MIT license.
 */
;(function (svgclean)
{
  'use strict';

  module.exports = function (grunt)
  {
    grunt.registerMultiTask('svgclean', 'Clean svg', function ()
    {
      var src = ''
        , dest = '';

      this.files.forEach(function (file)
      {
        src = file.src[0];
        dest = file.dest;

        if (!grunt.file.exists(src))
          grunt.log.warn('Source file "' + src + '" not found.');
        
        svgclean(src, dest);

        // Print a success message.
        grunt.log.writeln('File "' + dest + '" created.');
      });
    });
  };

}(require('svgclean')));
