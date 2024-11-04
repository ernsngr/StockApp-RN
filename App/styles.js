import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer:{
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    inputLabel:{
        width: "85%",
        height: "auto",
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: "600",
        marginBottom: 5
    },
    textInput:{
        width: "90%",
        height: 50,
        backgroundColor: "#d0d0d0",
        borderRadius: 15,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
    },
    button:{
        width: "50%",
        height: 50,
        borderRadius: 15,
        backgroundColor: "#000B58",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText:{
        color: "#f5f5f5",
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 3
    },
    orderList:{
        width: "100%",
        height: "100%",
        
        borderRadius: 20,
        backgroundColor: "#353535"
    },
    orderElement:{
        width: "100%",
        height: 50,
        backgroundColor: "#d0d0d0",
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 40,
        paddingRight: 40,
        flexDirection: "row"

    },
    orderElementText:{
        fontSize: 18,
        fontWeight: "600",
        letterSpacing: 2,

    },
    addAndRemove:{
        width: "30%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar:{
        width: "90%",
        height: 50,
        backgroundColor: "#d0d0d0",
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        
    },
})

export default styles