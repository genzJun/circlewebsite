const express=require("express")
const router=express.Router();

// router.use(express.static());

// router.get("/",(req,res)=>{
//     res.send("このページにカレンダーを貼り付ける");

// });

router.use(express.static("calendar-19"));
module.exports = router;