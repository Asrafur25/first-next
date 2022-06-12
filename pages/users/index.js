import Link from 'next/link';
import React from 'react';

const index = ({user}) => {
    return (
        <div style={{marginTop:"5rem"}}>
            {user.map(user=><p key={user.id}>{user.name}<Link href={`users/${user.id}`}><a>explore</a></Link></p>)}
        </div>
    );
};

export default index;


export async function getStaticProps() {
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const user=await res.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }