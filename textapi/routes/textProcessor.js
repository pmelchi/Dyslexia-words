function processText(text) {
  //Tokenize the text by spaces
  let tokens = text.split(' ');
  
  //Load the map
  const map = loadMap();
  
  //Iterate through the tokens and add the text with an underline if it is in the map
  for (let i = 0; i < tokens.length; i++) {
    console.log(tokens[i].toLowerCase());


    if (map.has(tokens[i].toLowerCase())) {

      //Add the text with underline and a tooltip
      tokens[i] = '<span style="text-decoration: underline; text-decoration-color: blue;" title="' + map.get(tokens[i].toLowerCase()) + '">' + tokens[i] + '</span>';
    } else {

    }
  }
  
  // Highlight words ending with 'ing'
 //text = text.replace(/\b(\w*ing)\b/g, '<span style="background-color: yellow;">$1</span>');

  // Underline words ending with 'ed'
  //text = text.replace(/\b(\w*ed)\b/g, '<span style="text-decoration: underline; text-decoration-color: blue;">$1</span>');

  //Return the processed text
  return tokens.join(' ');
}

//Write a function that loads a json file that contains key/pair combinations and load it to a map
function loadMap() {
  const fs = require('fs');
  const map = new Map();
  const data = fs.readFileSync('./db/words.json', 'utf8');
  const json = JSON.parse(data);
  for (let key in json) {
    map.set(key, json[key]);
  }
  return map;
}

module.exports = {
  processText
};
