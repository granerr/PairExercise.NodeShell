module.exports = function() {
  process.stdout.write("prompt > ");
  console.log(`Current directory: ${process.cwd()}`);
}
