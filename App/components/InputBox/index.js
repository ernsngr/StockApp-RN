import React from 'react'
import {
    View, 
    Text,
    TextInput,
 } from 'react-native'
import styles from '../../styles'

const InputBox = ({label, value, onChangeText, placeholder}) => {
    return(
        <View style={styles.inputContainer} >
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
             />
             
        </View>
    )
}

export default InputBox