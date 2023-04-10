/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef, useContext } from 'react'
import { View, Text, BackHandler } from 'react-native';
import { Formik } from 'formik';
import * as yup from "yup";
import AppStatusBar from '../../components/AppStatusBar'
import registerStyle from '../../styles/auth/registerStyle'
import AppDarkHeader from '../../components/AppDarkHeader'
import AppSubHeaderLight from '../../components/AppSubHeaderLight'
import AppButton from '../../components/AppButton'
import LocationInput from '../../components/LocationInput'
import UserFlatIcon from '../../assets/images/svgs/auths/user-outlined.svg';
import RegTextInput from '../../components/RegTextInput'
import EmailIcon from '../../assets/images/svgs/auths/outline-email.svg'
import PassLockIcon from '../../assets/images/svgs/auths/pass-lock.svg'
import UserIcon from '../../assets/images/svgs/auths/user-outlined.svg'
import PhoneIcon from '../../assets/images/svgs/auths/call-outline.svg'
import SFVContainer from '../../components/SFVcontainer';
import { locationPermission, getCurrentLocation } from '../../helpers/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncLoader from '../../components/AsyncLoader';
import { messageHelper } from '../../helpers/messageHelper';
import env from '../../env';
import { AuthContext } from '../../navigation/contexts/AuthContexts';
const RegisterDriver1 = ({ navigation }) => {

  function handleBackButtonClick() {
    navigation.navigate('Login');
    return true;
  }
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);
  // Use Context
  const { login } = useContext(AuthContext);
  async function reviewStatusFetch() {
    // setLoading(true);
    const access_token = await AsyncStorage.getItem("access_token");
    console.log('access_token ' + access_token)
    if (access_token != '') {
      try {
        fetch(`${env.base_url}/TruckOwner/fetchTruckOwnerDetails`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
          },
          method: "GET",
        }).then((response) => response.json())
          .then((data) => {
            // setLoading(false);
            if (data.status == 200) {
              if (data.data != '') {
                console.log('AddTruckSuccess ' + JSON.stringify(data.data, null, 1));
                let status = data.data?.reviewStatus.toString()
                if (status == 0) {
                  console.log('reviewStatus==> under review');
                  navigation.navigate('RegisterSuccess');
                } else {
                  const token = AsyncStorage.getItem("token");
                  if (token !== "" || null) {
                    login(token)
                  }
                  console.log('reviewStatus==> successfully done');
                }
              }
              const res = data.msg;
              const success = res?.toString();
              messageHelper.success(success);
            } else {
              console.log(JSON.stringify(data))
              const res = data?.msg;
              const error = res?.toString();
              messageHelper.error(error);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      } catch (error) {
        console.error(error);
      }
    }

  }


  useEffect(() => {
    getInitialLocation();
    reviewStatusFetch();
  }, [])

  async function getInitialLocation() {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const { latitude, longitude } = await getCurrentLocation();
      setLatitude(latitude)
      setLongitude(longitude)
    }
  }

  const ref_email = useRef("");
  const ref_phone = useRef("");
  // const ref_fname = useRef("");
  // const ref_lname = useRef("");
  // const ref_pass = useRef("");
  // const ref_con_pass = useRef("");
  // const [fullName, setFullName] = useState('');
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [rePassword, setRePassword] = useState('');
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const registerCheck = async (value) => {
    var obj = new Object();
    obj.fullName = value.fullName;
    obj.email = value.email;
    obj.phoneNo = value.phoneNo;
    obj.latitude = latitude.toString();
    obj.longitude = longitude.toString();
    // obj.password = password;
    // obj.repass = rePassword;
    // obj.location = location;
    console.log('Register userData ==> ' + JSON.stringify(obj, null, 2))
    setLoading(true);
    try {
      fetch(
        `${env.base_url}/TruckOwner/register`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
      }).then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.status == 200) {
            if (data.data != '') {
              console.log('TruckOwner success response ' + JSON.stringify(data.data));
              AsyncStorage.setItem("PersonalDetailsDone", JSON.stringify(data.data));
            }
            const res = data.msg;
            const success = res?.toString() || "";
            messageHelper.success(success);
            navigation.navigate('RegisterDriverOtp', { phoneNumber: value?.phoneNo });
          } else {
            console.log(JSON.stringify(data))
            const res = data?.msg;
            const error = res?.toString();
            messageHelper.error(error);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SFVContainer>
      {loading ? <AsyncLoader /> :
        <>
          <AppDarkHeader
            backIconText={'Register as a driver'}
            backOnPress={() => console.log('back press')}
            rightLinkOnPress={() => navigation.navigate('Login')}
          />

          <AppSubHeaderLight
            leftIcon={<UserFlatIcon height={25} width={25} />}
            mainTitle={'Personal Details'}
            subTitle={'Vehicle Details'}
            steps={'1'}
          />

          <View style={registerStyle.inputContainer}>
            <Formik
              validationSchema={signupValidationSchema}
              initialValues={{
                fullName: "",
                phoneNo: "",
                email: "",
                // password: "",
                // confirm_password: "",
                // latitude: latitude,
                // longitude: longitude,
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
                  <View style={registerStyle.TextInputCon}>
                    <RegTextInput
                      placeholderText={"Full name"}
                      leftIcon={<UserIcon height={'55%'} width={'55%'} />}
                      // onChangeText={(v) => { setFullName(v) }}
                      // value={fullName}
                      onBlur={handleBlur("fullName")}
                      value={values.fullName}
                      keyboardType="default"
                      onChangeText={handleChange("fullName")}
                      onSubmitEditing={() => ref_phone.current.focus()}
                    />

                    {errors.fullName && touched.fullName && (
                      <Text style={registerStyle.errorText}>
                        {errors.fullName}
                      </Text>
                    )}

                    <RegTextInput
                      placeholderText={"Phone"}
                      leftIcon={<PhoneIcon height={'55%'} width={'55%'} />}
                      // onChangeText={(v) => { setPhone(v) }}
                      // value={phone}
                      onBlur={handleBlur("phoneNo")}
                      value={values.phoneNo}
                      keyboardType="default"
                      onChangeText={handleChange("phoneNo")}
                      onSubmitEditing={() => ref_email.current.focus()}
                      isPhone />

                    {errors.phoneNo && touched.phoneNo && (
                      <Text style={registerStyle.errorText}>
                        {errors.phoneNo}
                      </Text>
                    )}

                    <RegTextInput
                      placeholderText={"Email"}
                      leftIcon={<EmailIcon height={'55%'} width={'55%'} />}
                      // onChangeText={(v) => { setEmail(v) }}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="default"
                      onChangeText={handleChange("email")}
                    // onSubmitEditing={() => ref_email.current.focus()}
                    // value={email}
                    />

                    {errors.email && touched.email && (
                      <Text style={registerStyle.errorText}>
                        {errors.email}
                      </Text>
                    )}

                    {/* <RegTextInput placeholderText={"Password"}
                  leftIcon={<PassLockIcon height={'55%'} width={'55%'} />}
                  onChangeText={(v) => { setPassword(v) }} isPassword
                  value={password} /> */}

                    {/* <RegTextInput placeholderText={"Confirm password"}
                  leftIcon={<PassLockIcon height={'55%'} width={'55%'} />}
                  onChangeText={(v) => { setRePassword(v) }} isPassword
                  value={rePassword} /> */}

                    <LocationInput onChangeText={(v) => { setLocation(v) }} value={location} />

                  </View>

                  <View style={registerStyle.btnDiv}>
                    <AppButton width={'100%'} title={'Next'} lite onPress={handleSubmit} />
                  </View>

                </>
              )}
            </Formik>
          </View>
        </>}
      <AppStatusBar />
    </SFVContainer>
  )
}



const signupValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .matches(/^[aA-zZ\s]+$/, "Full name is invalid")
    .required("Full name is required"),
  //   last_name: yup
  //     .string()
  //     .trim()
  //     .matches(/^[aA-zZ\s]+$/, string.INVALID_LASTNAME)
  //     .required(string.REQUIRED_LASTNAME),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9][a-zA-Z0-9-_\.]+@([a-zA-Z]|[a-zA-Z0-9]?[a-zA-Z0-9-]+[a-zA-Z0-9])\.[a-zA-Z0-9]{2,10}(?:\.[a-zA-Z]{2,10})?$/,
      "Email is invalid"
    )
    .required("Email is required"),
  phoneNo: yup
    .string()
    .min(6, "Phone no is invalid")
    .max(11, "Phone no is invalid")
    .required("Phone no is required"),
  //   password: yup
  //     .string()
  //     .matches(/\w*[a-z]\w*/, string.INVALID_PASSWORD)
  //     .matches(/\w*[A-Z]\w*/, string.INVALID_PASSWORD)
  //     .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, string.INVALID_PASSWORD)
  //     .matches(/\d/, string.INVALID_PASSWORD)
  //     .min(6, ({ min }) => string.INVALID_PASSWORD)
  //     .required(string.REQUIRED_PASSWORD),
  //   confirm_password: yup
  //     .string()
  //     .oneOf([yup.ref("password")], string.INVALID_CONFIRMPASSWORD)
  //     .required(string.REQUIRED_CONFRIMPASSWORD),
});

export default RegisterDriver1;