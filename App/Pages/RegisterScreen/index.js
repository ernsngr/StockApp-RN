import React, { useState } from 'react'
import { 
    View, 
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
} from 'react-native'
import styles from '../../styles'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
// Icons
import Ionicons from '@expo/vector-icons/Ionicons';

const RegisterScreen = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const goToBackPage = () => {
        Keyboard.dismiss();
        navigation.navigate("Login")
    }


    return(
        <View style={styles.container}>
            <KeyboardAvoidingView 
                behavior='padding' 
                style={{width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}  >
                <View style={{width: "90%", height: "auto", position: "absolute", top: 10, left: 10}} >
                    <TouchableOpacity onPress={goToBackPage} >
                        <Ionicons name="caret-back-outline" size={40} color="#000B58" />
                    </TouchableOpacity>
                </View>
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
                    placeholder="Şifrenizi Giriniz"
                />
                <InputBox
                    label="Password"
                    value={passwordAgain}
                    onChangeText={text => setPasswordAgain(text)}
                    placeholder="Şifrenizi Tekrar Giriniz"
                />
                <Button
                    text="Kayıt Ol"
                    onPress={() => {
                        Keyboard.dismiss()
                    }}
                />
                <TouchableOpacity onPress={goToBackPage} style={{marginTop: 20}}>
                    <Text>
                        Zaten Bir Hesabın Var Mı?
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            
        </View>
    )
}

export default RegisterScreen