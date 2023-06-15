import React from 'react'
import styled from 'styled-components';
import header from "/home/dev/Documents/React/Blenspark/src/assets/pngs/blender1.png";


const Card = (props) => {
    const { Icon, disc, title } = props;
  return (
    <Container className='bg-opacity-50 text-slate-800 '>
        <img src={header} alt="" />
        <h1>{title}</h1>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`