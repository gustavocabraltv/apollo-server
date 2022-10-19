const { ApolloServer, gql } = require ('apollo-server')


    const db = {
      usuarios: [
        {id:1, nome: 'Gustavo', perfil: 1},
        {id:2, nome: 'Luana', perfil: 2}
      ],
      perfis: [
        {id:1, descricao: 'Senior'},
        {id:2, descricao: 'Junior'}
      ]
    }





    const typeDefs = gql`

      type Usuario {
        id: Int
        nome: String
        perfil: Perfil
      }

      type Perfil {
        id: Int
        descricao: String
      }

      type Query {
        usuarios: Usuario
        usuario(id:Int): Usuario
      }
    `

    const resolvers = {

      Usuario: {

        perfil(obj, args){
          console.log(obj)
          return db.perfis.find( p => p.id === obj.id)
        }
      },

      Query: {
        usuarios(){
          return db.usuarios[1]
        },
        usuario(_, args){
          const {id} = args
          return db.usuarios.find(usuario => usuario.id === id)
        }
      }
      
     
    };

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen()
