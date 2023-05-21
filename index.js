const app = require("./src/app");

const port = 3000; 

app.listen(port, (req,res) => {
console.log(`сервер рабоотает на порте ${port}`);
})

