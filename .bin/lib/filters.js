var exports = module.exports = {};

function Filters () {

  this.dotNull = function(str) {
    if(str.endsWith('.null') === true) {
      str = str.split('.null')[0];
    }
    return str;
  };
}

module.exports = Filters;
