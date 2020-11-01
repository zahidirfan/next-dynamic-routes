import React from 'react';
import faker from 'faker';

var posts = [];
var i = 0;

while (i < 10) {
  let image = faker.random.image();
  let text = faker.random.words(10);
  posts.push({
    image : image, 
    text: text
  });
  i++;
}


const ImagesContext = React.createContext(posts);
export const ImagesProvider = ImagesContext.Provider;
export default ImagesContext



