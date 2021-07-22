const { src, dest } = require('gulp');

function copyNetworks(cb) {
  return src('node_modules/@idscan/idvc/dist/networks/**/*')
    .pipe(dest('src/networks'));
}

exports.default = copyNetworks
