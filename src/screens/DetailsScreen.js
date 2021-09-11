import * as React from 'react';
import {
     FAB, Text,
    Appbar, Searchbar, List,
    Avatar, Card, Title, Paragraph, Banner,
    Provider as PaperProvider, DefaultTheme, configureFonts
} from 'react-native-paper';
import CustomButton from '../components/CusButton';



import { View, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';
function DetailsScreen({ navigation }) {

const [expanded, setExpanded] = React.useState(true);

const handlePress = () => setExpanded(!expanded);

return (
    <SafeAreaView>
        <List.Section title="Accordions">
            <List.Accordion
                title="Uncontrolled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />
                <List.Item title=" item" />


            </List.Accordion>

            <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </List.Section>
        {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Profile')}>
            Press me
        </Button> */}
        <CustomButton text='Press me' onpress={() => navigation.navigate('Profile')} />


    </SafeAreaView>
);
}

export default DetailsScreen