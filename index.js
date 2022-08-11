// You are going to write three `static` methods in the `Formatter` class. Write
// your code in the `index.js` file. Let the tests guide you through the process.

// 1. Write a method `static capitalize` that takes in a string and capitalizes the
//    first letter.
class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
    // 2. Write a method `static sanitize` that takes in a string and removes all
//    non-alphanumeric characters except for dashes, single quotes and spaces.
  static sanitize(string) {
    return string.replace(/[^a-z0-9-' ]/gi, '');
  }
// 3. Write a method `static titleize` that takes in a string and capitalizes all
//    words in a sentence except the, a, an, but, of, and, for, at, by, and from;
//    and always capitalizes the first word.
  static titleize(string) {
    let stringArray = string.trim().split(' ')
    let titledStringArray = []
    for (let i = 0; i<stringArray.length; i++) {
      if (i > 0 && (stringArray[i] === 'the' || stringArray[i] === 'a' || stringArray[i] === 'an' || stringArray[i] === 'but' || stringArray[i] === 'of' || stringArray[i] === 'and' || stringArray[i] === 'for' || stringArray[i] === 'at' || stringArray[i] === 'by' || stringArray[i] === 'from')) {
        titledStringArray.push(stringArray[i])
      } else {
        titledStringArray.push(this.capitalize(stringArray[i]))
      }
    }
    return titledStringArray.join(' ')
  }
}