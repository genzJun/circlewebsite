const express=require("express");
const app=express();
const PORT=3000;
const calendarRouter = require ("./routes/calendar");

app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.static("public/assets"));
// ファイル指定のときは、同じ階層にフォルダを置く必要がある？



app.get("/",(req,res)=>{
    console.log("ルートurlにアクセスしました");
})

app.use("/calendar",calendarRouter);

app.listen(PORT,()=>console.log("サーバーが起動しました"));

