import express from "express";
import cors from "cors";
import Boutiques from './pages/Boutiques';

const port = process.env.port  || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/Boutiques",Boutiques);

app.listen(port, ()=> 

{
    console.log("Server listening on port ${port}");
})
