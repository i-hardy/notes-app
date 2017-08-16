function Note (text){
  this.text = text;
}

Note.prototype.print = function(){
  return this.text;
};

Note.prototype.twentyCharPrint = function(){
  return this.text.substring(0, 20) + "...";
};
