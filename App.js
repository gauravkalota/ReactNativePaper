import * as React from 'react';
import {Button, FAB,Text,
  Appbar, Searchbar,List,
  Avatar, Card, Title, Paragraph, Banner,
  Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';


import { View, Image,StyleSheet, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import RootNavigator from './src/navigation/index'
// function HomeScreen({ navigation }) {
//   const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

//   const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
//   const [visible, setVisible] = React.useState(true);
  
//   return (
//   <SafeAreaView>
//     <Appbar.Header>
//       <Appbar.Content title="Title" subtitle={'Subtitle'} />
//       <Appbar.Action icon="magnify" onPress={() => { }} />
//       <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
//     </Appbar.Header>
//       <Banner
//         visible={visible}
//         actions={[
//           {
//             label: 'Fix it',
//             onPress: () => setVisible(false),
//           },
//           {
//             label: 'Learn more',
//             onPress: () => setVisible(false),
//           },
//         ]}
//         icon={({ size }) => (
//           <Image
//             source={{
//               uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
//             }}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         )}>
//         There was a problem processing a transaction on your credit card.
//       </Banner>
//       <Card>
//         <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
//         <Card.Content>
//           <Title>Card title</Title>
//           <Paragraph>Card content</Paragraph>
//         </Card.Content>
//         <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//         <Card.Actions>
//           <Button>Cancel</Button>
//           <Button onPress={() => navigation.navigate('Details')} >Ok</Button>
//         </Card.Actions>
//       </Card>
//       <Paragraph>To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add react-native-paper/babel to the plugins section in your babel.config.js for production environment.</Paragraph>
//       <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Details')}>
//         Press me
//       </Button>
//   </SafeAreaView>
//   );
// }

// function DetailsScreen({navigation}) {

//   const [expanded, setExpanded] = React.useState(true);

//   const handlePress = () => setExpanded(!expanded);

//   return (
//     <SafeAreaView>
//       <List.Section title="Accordions">
//         <List.Accordion
//           title="Uncontrolled Accordion"
//           left={props => <List.Icon {...props} icon="folder" />}>
//           <List.Item title="First item" />
//           <List.Item title="Second item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />
//           <List.Item title=" item" />

          
//         </List.Accordion>

//         <List.Accordion
//           title="Controlled Accordion"
//           left={props => <List.Icon {...props} icon="folder" />}
//           expanded={expanded}
//           onPress={handlePress}>
//           <List.Item title="First item" />
//           <List.Item title="Second item" />
//         </List.Accordion>
//       </List.Section>
//       <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Profile')}>
//         Press me
//       </Button>
//     </SafeAreaView>
//   );
// }

// function ProfileScreen({ navigation }) {
//   return (
//     <View>
//       <Text>ProfileSCreen</Text>
//       <Button icon="camera" mode="contained" onPress={()=>navigation.navigate('Setting')}>
//         Press me
//       </Button>
//     </View>
//   );
// }
// function SettingScreen({ navigation }) {
//   return (
//     <View>
//       <Text>SettingSCreen</Text>
//       <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Home')}>
//         Press me
//       </Button>
//     </View>
//   );
// }
// const Stack = createNativeStackNavigator();

// function HomeComponent() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="Setting" component={SettingScreen} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//   },
// })


export default function App() {
  const fontConfig = {
    
    ios: {
      regular: {
        fontFamily: 'Glory-ThinItalic',
        fontWeight: 'normal',
      }
    },
    android: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
      },
    }
  };


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#B6EDF9',       ///// primary
      accent: '#f1c40f',
      surface: '#618CEF'    //////containertype
    },
    fonts: configureFonts(fontConfig)
  };
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>

  )
}
