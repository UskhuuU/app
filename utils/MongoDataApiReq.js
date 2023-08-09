export default async function MongoDataApiReq (action, document){
    const result = await fetch (`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-hjnsd/endpoint/data/v1/action/${action}`, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'api-key': '2fDFC78HcMC8cOwTiMQJfhGTX4bd7Pl54sc2Qc3Uf7S8ecZFsr3HJVTrfecfm1DK' 
        },
        body:JSON.stringify({
            dataSource: "Cluster0",
            database: "Nest",
            collection: "app",
            ...document
        }),
       }).then((res)=>res.json());
       return result
       
}