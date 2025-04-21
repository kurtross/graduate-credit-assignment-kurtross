async function sayHi() {
    return "Hi, World!";
  }
  
  async function main() {
    const message = await sayHi();
    console.log(message);
  }
  
  main();