const { ApolloServer, gql } = require ('apollo-server')

    const usuariosLista = [
      {id:1, nome: 'Gustavo'},
      {id:2, nome: 'Luciane'},
      {id:3, nome: 'Luana'}

    ]


    const produtosLista = [
      {
        id: 1,
        nome: 'Macbook',
        preco: 5000
      },
      {
        id:2,
        nome: 'iMac',
        preco: 9000
      }

    ]

    const typeDefs = gql`

        type Usuario {
          id:ID
          nome: String
        }
        type Produto {
          id:ID
          nome:String
          preco: Int
        }

        
        type Query {
            usuarios: [Usuario]
            produtos: [Produto]
            usuario(id: Int, nome:String): Usuario
            produto(id: Int, nome:String):Produto
        }
    `

    const resolvers = {
      // Cada query tem que ser denominada com uma função
      Query: {
        usuarios(){
          return usuariosLista
        },

        produtos(){
          return produtosLista
        },

        usuario(_, args){
          const {id, nome} = args;
          if (id) return usuariosLista.find(usuario => usuario.id === id)
          return usuariosLista.find(usuario => usuario.nome === nome)
        },

        produto(_,args){
          const {id} = args
          return produtosLista.find(produto => produto.id === id)
        }

           }
      
    };

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen()
