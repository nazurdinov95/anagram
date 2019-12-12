function anagramStr(str) {
  return str.split("").reverse().join("");
}
alert(anagramStr("Hello world!"));