function Note (text){
  this.text = text;
}

Note.prototype.print = function(){
  return this.text;
};
