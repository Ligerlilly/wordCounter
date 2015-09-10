var wordOrder = function (phrase) {
  var phraseWords = phrase.split(' ');
  var sortable = [];
  var foundWords = {};
  var formattedWords = [];



  // Creates new objects for each word.
  // Increments count of word if encountered again

  for (var i in phraseWords) {
    foundWordsArray = Object.keys(foundWords);
    if (typeof foundWordsArray[0] == 'undefined' ) {
      foundWordsArray[0]  = null;
    }

    for (var j in foundWordsArray) {
      if (phraseWords[i] == foundWordsArray[j]) {
        foundWords[foundWordsArray[j]] += 1;
      }
      else if (foundWords[phraseWords[i]] == null) {
        foundWords[phraseWords[i]] = 1;
      }
    }
  }

  // Pushed each object into an array to be sorted

  for (var word in foundWords){
    sortable.push([word, foundWords[word]])
  }

  // Sorts the array of word / count objects in descending order

  sortable.sort(function(a,b){return b[1] - a[1]});

  // Converts each word / count object into a formatted string.
  // Pushes converted strings into a new array, and returns the array.

  for (var i = 0; i < sortable.length; i++) {
    formattedWords.push(sortable[i][0] +  ': ' + sortable[i][1]);
  }
  console.log(foundWords);
  return formattedWords;
};

module.exports = wordOrder;
