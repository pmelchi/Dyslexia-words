function processText(text) {
  // Highlight words ending with 'ing'
  text = text.replace(/\b(\w*ing)\b/g, '<span style="background-color: yellow;">$1</span>');

  // Underline words ending with 'ed'
  text = text.replace(/\b(\w*ed)\b/g, '<span style="text-decoration: underline; text-decoration-color: blue;">$1</span>');

  return text;
}

//Write a function that loads a json file that contains key/pair combinations and load it to a map
function loadMap() {
  const fs = require('fs');
  const map = new Map();
  const data = fs.readFileSync('./data.json', 'utf8');
  const json = JSON.parse(data);
  for (let key in json) {
    map.set(key, json[key]);
  }
  return map;
}

module.exports = {
  processText
};
