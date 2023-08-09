import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function handler(req, res) {

   if (req.method !== 'POST'){
      res.status(405).end();
      return;
  }

  const {text}= req.body;

  console.log(req.body)

   const result = await MongoDataApiReq("deleteOne", {
    filter: {
      text: text
   }
   })

   res.status(200).json(result)
  }

