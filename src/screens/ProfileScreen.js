import * as React from 'react';
import {
 FAB, Text, IconButton,
    Appbar, Searchbar, List,
    Avatar, Card, Title, Paragraph, Banner,
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';
import {View} from 'react-native';
import CustomButton from '../components/CusButton';

 
function ProfileScreen({ navigation }) {
    return (
        <View>
            <Text>ProfileSCreen</Text>
            <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                right={(props) => <IconButton {...props} icon="more" onPress={() => { }} />}
            />
            <Card>
                <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80' }} />
            </Card>
            <Card>
                <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80' }} />
            </Card>
            <Card>
                <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80' }} />
            </Card>
            {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Setting')}>
                Press me
            </Button> */}
            <CustomButton text='Press me' onpress={() => navigation.navigate('Setting')} />

        </View>
    );
}

export default ProfileScreen