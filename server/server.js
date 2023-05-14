const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const path = require('path');
const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');
const { authMiddleware} = require('./utils/auth')

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, 
  context: authMiddleware
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);
// app.get('/', (req,res)=>{
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

const startApolloServer = async(typeDefs, resolvers)=>{
  await server.start();
  server.applyMiddleware({app})
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🌍 Now listening on localhost:${PORT}`)
    console.log(`graphQL at http://localhost:${PORT}${server.graphqlPath}`)
    }
      );
  });
}

startApolloServer(typeDefs, resolvers)
