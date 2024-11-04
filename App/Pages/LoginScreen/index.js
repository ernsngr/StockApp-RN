import React, { useState } from 'react'
import { 
    View, 
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from '../../styles'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        Keyboard.dismiss();
        navigation.navigate("Register")
    }


    return(
        <View style={styles.container}>
            <KeyboardAvoidingView 
                behavior='padding' 
                style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}  >
                <InputBox
                    label="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder="E-mail Giriniz"
                />
                <InputBox
                    label="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Password Giriniz"
                />
                <Button
                    text="Giriş Yap"
                    onPress={() => {}}
                />
                <TouchableOpacity onPress={handleRegister} style={{marginTop: 20}}>
                    <Text>
                        Bir Hesabın Yok Mu?
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            
        </View>
    )
}

export default LoginScreen