YaMD5 Worker
============

Base on [YaMD5](https://github.com/gorhill/yamd5.js) by [Raymond Hill](https://github.com/gorhill).

Usage
-----

    var yamd5Worker = new Worker('path-to-yamd5-workers.min.js');
    yamd5Worker.onmessage = function(e) {
      console.log(e.data.id);
      console.log(e.data.md5);
    };
    yamd5Worker.postMessage({id: 'whatever you want', file: file_form_input_or_drop});

! Notice: Currently, web worker do not support cross domain. So you have to put js file to the main domain.

Build
-----

    $ npm run build

If you want uncompressed version, just change webpack.js, and generate one.

BTW: I really really want to know, why S3 do not support sha1!!!
[Rusha](https://github.com/srijs/rusha/) is sooooo cool for frontend.

