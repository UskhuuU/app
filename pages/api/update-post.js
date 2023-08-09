import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function handler(req, res) {

    if (req.method !== 'POST'){
        res.status(405).end();
        return;
    }
    console.log(req.body, req.method)
    const {text}= req.body;

   const result = await MongoDataApiReq("updateOne", {
    filter: { _id: { "$oid": "6493def74863ed50f15e6e20" } },
    "update": {
        "$set": {
            text:text
        }
    }
   })

   res.status(200).json(result)
  }

