function Note (text){
  this.text = text;
}

Note.prototype.print = function(){
  return this.text;
};

var noteTaker = new Note("hello world");

it.isEqual(1, 1);
// it.isEqual(1, 2);
// it.isEqual(it.isEqual(1, 1), it.isEqual(1, 2));
it.isEqual("hello world", noteTaker.print());
