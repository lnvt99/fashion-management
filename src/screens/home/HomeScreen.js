import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import styles from '../../css/style';

function HomeScreen({ navigation }) {

    const [account, setAccount] = useState({
        username: "",
        password: ""
    });

    const handlingDataLogin = () => {
        if (account.username === "admin" && account.password === "admin") {
            navigation.navigate('Dashboard');
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                DAISY
            </Text>
            <View style={styles.items}>
                <Text style={styles.space}>Username:</Text>
                <TextInput
                    style={styles.input}
                    autoFocus={true}
                    defaultValue={account.username}
                    onChangeText={value => setAccount({ ...account, username: value })}
                />
            </View>
            <View style={styles.items}>
                <Text style={styles.space}>Password:</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={account.password}
                    secureTextEntry={true}
                    onChangeText={value => setAccount({ ...account, password: value })}
                />
            </View>
            <Button
                title="Login"
                onPress={handlingDataLogin}
            />
        </View>
    );
}
export default HomeScreen;