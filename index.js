const { ApolloServer, gql } = require ('apollo-server')

const books = [
  {
    titulo: 'The Awakening',
    autor: 'Kate Chopin',
  },

  {
    titulo: 'City of Glass',
    autor: 'Paul Auster',
  },
];



const typeDefs = gql`
    type Livro {
        titulo: String
        autor: String
    }

    type Query {
        livros: [Livro],
        hello: String
        
    }
`

    const resolvers = {
        Query: {
          livros: () => books,
        //   livros(){
        //     return books
        //   },
          hello: () => 'World!!'
        },
    };

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen()