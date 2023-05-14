import React, { useState,useEffect} from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';

// import { getMe, deleteBook } from '../utils/API';
import { QUERY_USER_BOOKS } from '../utils/queries';
import Auth from '../utils/auth';
// import { removeBookId } from '../utils/localStorage';
import { useQuery } from '@apollo/client';

// useEffect(() => {
//   if(data){
//    const dataFormat = {data}.data.usersBooks.savedBooks
//   console.log(dataFormat,'hi')
//   setUserData(dataFormat)
//   }, [data])
const SavedBooks = () => {
  const { loading , data} = useQuery(QUERY_USER_BOOKS,{
    variables:{email : "email."}
  })
  
  const [userData, setUserData] = useState({});
  
  const dataFormat = data ? data.usersBooks.savedBooks : [];
  console.log(dataFormat);
//   useEffect(() => {
//     if(loading){
//     const dataFormat = {data}.data.usersBooks
//     console.log(dataFormat,'hi')
//     // console.log(data);
//     setUserData(dataFormat.savedBooks)
//   }
//   }, [data]);
//   if(loading){
// console.log(userData,"hello", )
  // }
  // userData.forEach((element) => {
  //   console.log(element);
  // });

  return (
    <>
      <div fluid className='text-light bg-dark p-5'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
   
      </div>

     
    </>
 
   );
};

export default SavedBooks;
