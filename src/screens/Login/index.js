import React from 'react';
import * as yup from "yup";
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import MSS_LOGO from "@assets/svg/MSS_LOGO_BLUE.svg";
import { userLogin } from '@redux/slices/UserSlice';
import Input from '@components/Input';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginCheck = (values) => {
    // dispatch(userLogin(values));
    console.log('=======', values);

  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>

      <View style={styles.container}>
        <View style={styles.loginCard}>
          <MSS_LOGO height={150} />

          <Formik
            validationSchema={loginSchema}
            initialValues={{
              userName: "",
              password: "",
            }}
            onSubmit={(values) => loginCheck(values)}
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

                  <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={!isValid}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>

        </View>

        <TouchableOpacity style={styles.goSignupBtn} onPress={() => { navigation.navigate('Register') }}>
          <Text style={styles.goSignupBtnText}>Signup</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

const loginSchema = yup.object().shape({
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
    .required("Password is required")
});

export default Login;