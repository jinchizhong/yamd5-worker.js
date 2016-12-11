var YaMD5 = require('./yamd5').YaMD5;

self.onmessage = function(e){
  var file = e.data.file;
  var hasher = new YaMD5();
  hasher.start();

  var reader = new FileReaderSync();
  var start = 0, end = file.size;
  while (start < end) {
    var len = Math.min(end - start, 256 * 1024);
    var buf = new Uint8Array(reader.readAsArrayBuffer(file.slice(start, start + len)));
    hasher.appendByteArray(buf);
    start = start + len;
  }

  var md5 = hasher.end();
  postMessage({id: e.data.id, md5: md5});
};
