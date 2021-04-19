1	import { MongoClient } from 'mongodb';
2	import nextConnect from 'next-connect';
3	
4	const client = new MongoClient('{YOUR-MONGODB-CONNECTION-STRING}', {
5	  useNewUrlParser: true,
6	  useUnifiedTopology: true,
7	});
8	
9	async function database(req, res, next) {
10	  if (!client.isConnected()) await client.connect();
11	  req.dbClient = client;
12	  req.db = client.db('MCT');
13	  return next();
14	}
15	
16	const middleware = nextConnect();
17	
18	middleware.use(database);
19	
20	export default middleware;