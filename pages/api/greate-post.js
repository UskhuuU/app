import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function create(req, res) {

    if (req.method !== 'POST'){
        res.status(405).end();
        return;
    }

    console.log(req.body, req.method)

    const {text,name}= req.body;

    const result = await MongoDataApiReq("insertOne",{
        document:{
            name:name,
            text:text
        }
    })
    res.status(200).json(result)
   }