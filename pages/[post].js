import React from 'react'
import { useRouter } from 'next/router'
import ImagesContext from '../ImagesContext'
import Link from 'next/link'
import {Image, Box, Text } from '@chakra-ui/core'

export default function Post() {
  let posts = React.useContext(ImagesContext);
  const router = useRouter();
  const {post } = router.query;
  const index = post;
  const data = posts[index]

  return ( 
    <div>
      <Box>
        <Image src={data.image} />
        <Text>{data.text}</Text>
      </Box>
    </div>
  )
}
