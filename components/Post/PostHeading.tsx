import { Text, View } from '../Themed'
import { StyleSheet, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from "@expo/vector-icons";
import { timeAgo } from '../../utils/timeAgo';
interface PostHeading {
    name: string,
    createdAt: string,
    verified: boolean
}

export const PostHeading = ({name, createdAt, verified}: PostHeading) => {
  return (
    <View style={styles.container}>
        <View style={styles.left}>
            <Text style={styles.name}>{name}</Text>
            {verified && (
                <MaterialIcons name='verified' size={16} color='#81afdb'/>
            )}
        </View>
        <View style={styles.right}>
            <Text>{timeAgo(createdAt)}</Text>
            <Feather name='more-horizontal' size={14} color={'#81afdb'}/>
        </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:5
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  name: {
    fontWeight: '600'
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  }
});
