import * as React from 'react';
import {
    Button, FAB, Text,
    Appbar, Searchbar, List,
    Avatar, Card, Title, Paragraph, Banner,
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';
import CustomButton from '../components/CusButton';


import { View, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';

function HomeScreen({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    const [visible, setVisible] = React.useState(true);

    return (
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title="Title" subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
                <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
            </Appbar.Header>
            <Banner
                visible={visible}
                actions={[
                    {
                        label: 'Fix it',
                        onPress: () => setVisible(false),
                    },
                    {
                        label: 'Learn more',
                        onPress: () => setVisible(false),
                    },
                ]}
                icon={({ size }) => (
                    <Image
                        source={{
                            uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                        }}
                        style={{
                            width: size,
                            height: size,
                        }}
                    />
                )}>
                There was a problem processing a transaction on your credit card.
            </Banner>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button onPress={() => navigation.navigate('Details')} >Ok</Button>
                </Card.Actions>
            </Card>
            <Paragraph>To get smaller bundle size by excluding modules you don't use, you can use our optional babel plugin. The plugin automatically rewrites the import statements so that only the modules you use are imported instead of the whole library. Add react-native-paper/babel to the plugins section in your babel.config.js for production environment.</Paragraph>
            {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Details')}>
                Press me
            </Button> */}
            <CustomButton text='Press me' onpress={()=>navigation.navigate('Details')}/>
        </SafeAreaView>
    );
}

export default HomeScreen