import React from 'react' 
import Link from 'next/link'
import faker, { image } from 'faker'
import ImagesContext from '../ImagesContext'
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/core";


export default function Posts(prop) {
  const posts = React.useContext(ImagesContext)
  return (           
    <Box>
      {posts.map((value, index) => (
              <Link href={`${index}`}>
                <a>
                  <Image boxSize="110px" src={value.image} />
                  <Text>{value.text}</Text>
                </a>
              </Link>
          ))}

    </Box>       
  )  
}
