import { gql } from "@apollo/client";

export const QUERY_USER_BOOKS = gql`
query usersBooks($email: String!){
    usersBooks(email: $email){
        savedBooks {
      link
    }   
    }
}

`



export const QUERY_BOOKS = gql`
query getBooks{
    books{
        _id
    }
}
`