import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({ onClick, icon, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            {icon ?
                <Icon name={icon} size={20} color={palette.WHITE} /> :
                <Text style={styles.text}>{title}</Text>
            }
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        color: palette.WHITE,
        fontSize: 20,
        fontFamily: fonts.heavy,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: palette.GREEN_SEA,
        borderRadius: 50,
        padding: 10,
        elevation: 10,
    },
});
export default Button;