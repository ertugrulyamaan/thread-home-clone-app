import {useState, useCallback, useContext} from 'react'
import { StyleSheet, Image,RefreshControl, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUser } from '../../utils/data';
import {View, Text} from '../../components/Themed';
import { ThreadsContext } from '../../context/threadContext';
import ThreadsItem from '../../components/ThreadsItem';

export default function TabOneScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const threads = useContext(ThreadsContext)

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 40,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      >
        <Image
          source={require('../../assets/images/thread-logo.jpeg')}
          style={styles.image}
          />
        {threads.map(thread =>(
          <ThreadsItem key={thread.id} {...thread}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 50, 
    height: 50, 
    alignSelf: 'center'
  },
});
