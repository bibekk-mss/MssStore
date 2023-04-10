import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";

const Input = ({ placeholder, onChangeText, touched, required, error, value }) => {

  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={error ? styles.inputError : styles.input}
        placeholderTextColor={error ? '#ff4444' : '#bdc3c7'}
        cursorColor='#2980b9'
        onChangeText={onChangeText}
        value={value}
      />
    </>
  )
}

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginBottom: '5%',
    backgroundColor: palette.CLOUDS,
    color: palette.ASBESTOS,
    fontFamily: fonts.regular
  },
  inputError: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    paddingLeft: 20,
    fontSize: 15,
    marginBottom: '5%',
    backgroundColor: palette.CLOUDS,
    color: palette.ERROR,
    fontFamily: fonts.regular,
    borderWidth: 1,
    borderColor: palette.ERROR
  }
})