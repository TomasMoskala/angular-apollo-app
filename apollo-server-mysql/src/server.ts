require('dotenv').config()
import { ApolloServer} from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'
const port = process.env.PORT;

new ApolloServer({
  schema,
  context: ({ req }) => createContext(req),
}).listen(
  { port: port },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:${port}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-apollo-server#using-the-graphql-api`,
    ),
)
