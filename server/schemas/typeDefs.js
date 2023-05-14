const { gql } = require('apollo-server-express');

const typeDefs = gql`
type bookSchema{
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type User{
    _id: ID
    username: String!
    email: String!
    savedBooks: [bookSchema]

}
type Auth{
    token:ID!
    user: User
}
type Query {
#    user:[User]
   usersBooks(email: String!): User
# #    me(ID: String!): User
  }
type Mutation{
   addUser(username: String!, email:String!, password: String!):Auth
   login(email: String!, password:String!):Auth
   saveBook(author: [String!], title: String!, bookId: String!,image:String!,link:String!):User
}

`
module.exports = typeDefs;