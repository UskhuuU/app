import MongoDataApiReq from "@/utils/MongoDataApiReq"

export default async function handler(req, res) {
   if (req.method !== 'GET'){
      res.status(405).end();
      return;
  }

  console.log( req.method)

   const result = await MongoDataApiReq("find", {})

   res.status(200).json(result)
  }

