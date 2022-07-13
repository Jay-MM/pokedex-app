const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express')
const connection = require('./config/connection')
const { typeDefs, resolvers } = require('./schemas')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

connection.once('open', async () => {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()
  server.applyMiddleware({ app })
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}!`);
    console.log(`Visit graphql playground at http://localhost:${PORT}${server.graphqlPath}`)
  });
})
