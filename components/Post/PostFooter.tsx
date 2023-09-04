import React from 'react'
import { Text, View } from '../Themed'

interface PostFooter{
    replies: number | undefined,
    likes: number
}

const PostFooter = ({replies,likes}:PostFooter) => {
  return (
    <View>
      <Text style={{color:'#7777'}}>
        {replies} replies . {likes} likes
      </Text>
    </View>
  )
}

export default PostFooter