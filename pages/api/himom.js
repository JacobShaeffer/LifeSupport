import clientPromise from '../../lib/mongodb'

export default async function handler(req, res){

	try{
		const client = await clientPromise;
		const data = req.body;
		console.log(data);
		const result = await client.db(process.env.MONGODB_DB).collection("Sections").insertOne(data);
		res.status(200).json({result});
	} catch(e){
		console.error(e);
		res.status(503);
	}

}