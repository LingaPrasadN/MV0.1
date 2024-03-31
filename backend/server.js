import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    res.send("Hi, you are in / url with get method")
})
app.post("/", (req, res)=>{
    res.send("Hi, you are in / url with post method")
})

app.get("/home", (req, res)=>{
    res.send("<h1>Welcome</h1>")
})

app.listen(3030, ()=>{
    console.log("Server started")
});

