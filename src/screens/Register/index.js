import React from 'react';
import * as yup from "yup";
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import styles from './style';
import MSS_LOGO from "@assets/svg/MSS_LOGO_GREEN.svg";
import Input from '@components/Input';
import { userRegister } from '@redux/slices/UserSlice';



const Register = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const registerCheck = (values) => {
    // console.log('------', values);
    dispatch(userRegister(values));
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>

      <View style={styles.container}>

        <View style={styles.loginCard}>
          <MSS_LOGO height={150} />

          <Formik
            validationSchema={registerSchema}
            initialValues={{
              userName: "",
              email: "",
              firstName: "",
              lastName: "",
              password: "",
            }}
            onSubmit={(values) => registerCheck(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles.inputContainer}>

                  <Input placeholder="Username"
                    onBlur={handleBlur("userName")}
                    value={values.userName}
                    onChangeText={handleChange("userName")}
                    error={touched.userName && !!errors.userName}
                  />

                  {touched.userName && !!errors.userName && (
                    <Text style={styles.errorText}>
                      {errors.userName}
                    </Text>
                  )}


                  <Input placeholder="Email"
                    onBlur={handleBlur("email")}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    error={touched.email && !!errors.email}
                  />

                  {touched.email && !!errors.email && (
                    <Text style={styles.errorText}>
                      {errors.email}
                    </Text>
                  )}


                  <Input placeholder="First Name"
                    onBlur={handleBlur("firstName")}
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    error={touched.firstName && !!errors.firstName}
                  />

                  {touched.firstName && !!errors.firstName && (
                    <Text style={styles.errorText}>
                      {errors.firstName}
                    </Text>
                  )}


                  <Input placeholder="Last Name"
                    onBlur={handleBlur("lastName")}
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    error={touched.lastName && !!errors.lastName}
                  />

                  {touched.lastName && !!errors.lastName && (
                    <Text style={styles.errorText}>
                      {errors.lastName}
                    </Text>
                  )}


                  <Input placeholder="Password"
                    onBlur={handleBlur("password")}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    error={touched.password && !!errors.password}
                  />

                  {touched.password && !!errors.password && (
                    <Text style={styles.errorText}>
                      {errors.password}
                    </Text>
                  )}

                  <TouchableOpacity style={styles.button} onPress={handleSubmit}
                  //disabled={!isValid}
                  >
                    <Text style={styles.buttonText}>Signup</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

        </View>

        <TouchableOpacity style={styles.goSignInBtn} onPress={() => { navigation.navigate('Login') }}>
          <Text style={styles.goSignInBtnText}>Login</Text>
        </TouchableOpacity>

      </View>
      <StatusBar barStyle="lite-content" backgroundColor={'#1abc9c'} />
    </KeyboardAvoidingView>
  )
}

const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z0-9]+$/, "User name is invalid")
    .required("User name is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password is invalid")
    .matches(/\w*[A-Z]\w*/, "Password is invalid")
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password is invalid")
    .matches(/\d/, "Password is invalid")
    .min(6, ({ min }) => "Password is invalid")
    .required("Password is required"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-zA-Z]|[a-zA-Z0-9]?[a-zA-Z0-9-]+[a-zA-Z0-9])\.[a-zA-Z0-9]{2,10}(?:\.[a-zA-Z]{2,10})?$/,
      "Email is invalid"
    )
    .required("Email is required"),
  firstName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "First Name name is invalid")
    .required("First Name name is required"),
  lastName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "Last Name name is invalid")
    .required("Last Name name is required"),
});

export default Register;