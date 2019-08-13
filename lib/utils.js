if (!Array.prototype.last){
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
};

function safeGetText(ctx, method) {
  return ctx[method]() &&
    ctx[method]().getText();
}

module.exports = { safeGetText };
