import React, { useState } from 'react'
import { 
    View, 
    Text,
    TextInput
} from 'react-native'
import styles from "../../styles"

const StorePage = () => {

    const [search, setSearch] = useState("");

    return(
        <View style={[styles.container, {justifyContent: "", paddingTop: 20}]}>
            <TextInput
                placeholder='Search Anything...'
                value={search}
                onChangeText={text => setSearch(text)}
                style={styles.searchBar}
            />

            <View>

            </View>

        </View>
    )
}

export default StorePage