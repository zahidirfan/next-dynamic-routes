import React from 'react'
import Posts from './Posts'
import {Heading} from '@chakra-ui/core'

export default function Blog() {
  return (
    <div>
       <Heading size="lg"> Next JS : Dynamic Routes</Heading>
       <Heading size="md">We explore the routes using the image posts</Heading>
       <Posts> </Posts>
    </div>
  )
}
