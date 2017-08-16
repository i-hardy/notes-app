function Note (text){
  this.text = text;
}

Note.prototype.print = function(){
  return this.text;
};

Note.prototype.twentyCharPrint = function(){
  if (this.text.length >= 20){
    return this.text.substring(0, 20) + "...";
  }else{
    return this.text;
  }
};
