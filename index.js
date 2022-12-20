import express from "express"
// import res from "express/lib/response";
console.log("Hello")
const app = express();
app.get("/",(req,res) => {
    res.send("API is running...");
});
app.post("/test", (req,res) =>{
console.log(req.body,"test")
res.status(200).send("working");
});
app.listen(3005, console.log("serving..."));