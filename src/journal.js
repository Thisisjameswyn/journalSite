export default function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.evalString = function() {
  let myString = this.body.split(" ").length;
  console.log(myString);
}

Journal.prototype.gimmeAte = function() {
  let myString = this.body.split(" ");
  let upToAte = [];
  for(let i = 0; i < 8; i++)  {
    if(myString[i] != undefined && myString[i] != " ") {
      upToAte.push(myString[i]);
    }
  }
  console.log(upToAte);
}

Journal.prototype.howMany = function() {
  let vCounter = 0;
  let cCounter = 0;
  let oCounter = 0;
  let vowel = this.body.split("");
  console.log(vowel);
  const compVowel = ["a", "e", "i", "o", "u", "y"];
  const compOthers = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  vowel.forEach(function (element) {
    if (compVowel.includes(element)) {
      vCounter ++;
    } else if (compOthers.includes(element)) {
      oCounter ++;
    } else {
      cCounter ++;
    }
  });
    console.log(vCounter, oCounter, cCounter);
};

// var myStringArray = ["Hello","World"];
// var arrayLength = myStringArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myStringArray[i]);
    //Do something
// 