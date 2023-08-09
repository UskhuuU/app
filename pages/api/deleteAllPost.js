import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function handler(req, res) {

   if (req.method !== 'POST'){
      res.status(405).end();
      return;
  }

  console.log(req.method)

  const {text}= req.body;

   const result = await MongoDataApiReq("deleteMany", {
    filter: { text:text}
   })

   res.status(200).json(result)
  }

