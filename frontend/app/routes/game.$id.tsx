import React from 'react'
import { useParams } from 'react-router';

const Page = () => {
    let {id} = useParams();
  return (
    <div>{id}</div>
  )
}

export default Page