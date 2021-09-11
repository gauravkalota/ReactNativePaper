import * as React from 'react';
import {
    Button, FAB, Text,Subheading,Caption,
    Appbar, Searchbar, List, Chip, DataTable,
    Avatar, Card, Title, Paragraph, Banner, HelperText, TextInput,
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';
import { View } from 'react-native';
import CustomButton from '../components/CusButton';



function SettingScreen({ navigation }) {
   
   
    return (
        <View>
            <Title>WhatsApp will finally let users encrypt their chat backups in the cloud</Title>
            <Subheading>The Facebook-owned service has end-to-end encrypted chats between users for more than a decade.</Subheading>
            <Paragraph>WhatsApp is the first global messaging service at this scale to offer end-to-end encrypted messaging and backups, and getting there was a really hard technical challenge that required an entirely new framework for key storage and cloud storage across operating systems,” said Facebook’s chief executive Mark Zuckerberg in a post announcing the new feature.</Paragraph>
            <Caption>Store your own encryption keys</Caption>
            <View>
            <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1622929610564-87f6bee76d33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80' }} />
            </View>
            <CustomButton text='Press me' onpress={() => navigation.navigate('Home')} />

        </View>
    );
}
export default SettingScreen