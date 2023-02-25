import { gql } from "@apollo/client"



export const queryBooks = gql`
{ books{
    name
   genre
   id
   authorId{
    name
    age
   }
}
   
    
}
`

export const queryAuthors = gql`
{
    authors{
        name
        id
    }
}
`

export const addBook = gql`
mutation($name:String!, $authorId:ID! , $genre:String!) {
    addBook(name:$name, authorId:$authorId , genre:$genre){
        name
        genre
    }
}
`

export const getSingleBook = gql`
    query($id:ID){
        book(id:$id){
           name
           genre
           authorId{
            name
            age
            books{
                name
                genre
            }
           }
        }
    }
`