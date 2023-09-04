import React from 'react'
import { Thread } from '../types'
import { Text, View } from './Themed'
import { StyleSheet } from 'react-native'
import { PostHeading } from './Post/PostHeading'
import PostFooter from './Post/PostFooter'
import BottomIcons from './Post/BottomIcons'
import { Image } from 'expo-image'
import { PostLeftSide } from './Post/PostLeftSide'


export default function ThreadsItem( thread: Thread ) {
  return (
    <View style={styles.container}>
        <PostLeftSide {...thread} />
        <View style={styles.main}>
          <PostHeading 
            name={thread.author.name} 
            createdAt={thread.createdAt} 
            verified={thread.author.verified} 
          />
          <Text>{thread.content}</Text>
          {thread.img && (
            <Image
              source={thread.img}
              style={{width:'100%', minHeight:300, borderRadius:10}}
              contentFit='cover'
            />
          )}
          <BottomIcons/>
          <PostFooter replies={thread.repliesCount} likes={thread.likesCount}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    paddingBottom: 30,
  },
  main : {
    gap: 5
  }
})