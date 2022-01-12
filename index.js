class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase()+ str.slice(1)
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-']+/g, '')
  }
  static titleize(sentence) {
    if(!sentence.split) return sentence;
    var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [];
    sentence.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
  }
  
} 

//if w = (the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from').toLowerCase()
// but I have no idea how to do this