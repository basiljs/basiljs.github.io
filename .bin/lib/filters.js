var exports = module.exports = {};

function Filters () {

  this.dotNull = function(str) {
    if(str.endsWith('.null') === true) {
      str = str.split('.null')[0];
    }
    return str;
  };

  this.nullToGlobal = function(str) {
    if(str === null) {
      str = 'global';
    }
    return str;
  };
}

module.exports = Filters;
