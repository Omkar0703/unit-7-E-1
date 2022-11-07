const express=require("express");
const dns=require("dns");

const app=express();

app.use(express.json());

function getIP(req,res,next)
{
    const payload=req.body;

    dns.lookup(payload.website_name,(err,address)=>
    {
        return res.json({IP_address:address});
    })

}


app.post("/getmeip",getIP);


app.listen(7000,()=>
{
    console.log("Server has been connected to port 7000")
})