import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [state, setState] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state === true ? "Кнопку выключи" : "Кнопку включи"}</Text>
            <StatusBar style="auto"/>
            <Button
                onPress={() => {
                    console.log('click')
                    setState((v) => !v)
                }
                }
                title={state === true ? "Active" : "NO-active"}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#841584",
        textAlign: "center",
        fontSize: '32px',
        textTransform: 'uppercase',
    }
});
