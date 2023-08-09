import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function getOnePost(req, res) {
   if (req.method !== 'GET'){
      res.status(405).end();
      return;
  }
  const {text}= req.query;
    
  console.log(req.query)

   const result = await MongoDataApiReq("findOne", {
      "filter": {
         text: text
       }
   })

   res.status(200).json(result)
  }

