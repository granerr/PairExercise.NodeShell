process.stdout.write("prompt > ");
const pwd = require("./pwd");
const fs = require("./ls");
const cat = require("./cat");

process.stdin.on("data", data => {

  //const inputArr = data.split(' ')

  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    fs();
  } else if (cmd === 'cat') {
    //cat(inputArr[1]);
    console.log(data)
  } else {
    process.stdout.write("You typed:" + cmd);
    process.stdout.write("\nprompt >");
  }
});
