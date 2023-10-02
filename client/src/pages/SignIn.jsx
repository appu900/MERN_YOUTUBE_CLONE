import React from 'react'
import styled  from 'styled-components'


const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  background-color: #232425;
  width: 300px;
  height: 500px;
  padding: 20px 30px;
  margin-left: 30%;

 
  
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 450px;
  gap: 9px;
 
 
  
`

const Title = styled.h1`

   font-size: 24px;
 
`

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
`
  
const Input = styled.input`
  border: 1px solid #5c5a5a;
  border-radius: 3px;
  padding: 5px;
  background-color: transparent ;

`

const Button = styled.button``
const More = styled.div``




const SignIn = () => {
  return (
    <Conatiner className='text-white rounded-md shadow-lg'>
      <Wrapper className=''>
        <Title className=''>
          Sign In
        </Title>
        <SubTitle>to continue to youtube</SubTitle>
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
        <Button
        className=' px-4 py-2 w-[200px] border border-gray-500 rounded-md bg-gray-500 hover:bg-gray-600'
        >sign in</Button>
        <Title>Or</Title>
        <Input type='text' placeholder='Username' />
        <Input type='email' placeholder='Email' />
        <Input type='password' placeholder='Password' />
        <Button
        className=' px-4 py-2 w-[200px] border border-gray-500 rounded-md bg-gray-500 hover:bg-gray-600'
        >Sign up</Button>
      </Wrapper>
    </Conatiner>
  )
}

export default SignIn