import { gql } from "@apollo/client";

export const QUERY_USER_BOOKS = gql`
query getUserBooks{
    user{
        books
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