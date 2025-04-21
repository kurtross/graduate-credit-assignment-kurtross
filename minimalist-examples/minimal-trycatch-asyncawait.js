async function sayHi() {
    throw new Error("Something broke!");
  }
  
  async function main() {
    try {
      const message = await sayHi();
      console.log(message);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  main();