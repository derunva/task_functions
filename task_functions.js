const functions = {
  add: function (num1, num2) {
    return num1 + num2
  },
  square: function (num1, num2) {
    return num1 * num2
  },
  getFirstTagPosition (text) {
    var x1 = -1
    var x2 = -1
    var isTagStarted = false
    for (var i = 0; i < text.length; i++) {
      if (text[i] == '<') {
        isTagStarted = true
        x1 = i
      }
      if (isTagStarted && text[i] == '>') {
        isTagStarted = false
        x2 = i
        return [x1, x2]
      }
    }
    return [x1, x2]
  },


  searchSubStringIgnoringTags: function (string, substring) {
    var comparePosStart = -1
    
    return comparePosStart;
  }
}
module.exports = functions
