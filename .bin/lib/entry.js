var exports = module.exports = {};

function Entry() {
  this.name = null;
  this.description = null;
  this.returns = null;
  this.category = null;
  this.subcategory = null;
  this.parameters = [];
  this.kind = null;
  this.tags = [];
  this.examples = [];
  this.todo = null;
}

module.exports = Entry;
