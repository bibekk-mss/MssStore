import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
// import { messageHelper } from '@helpers/messageHelper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '@redux/slices/ProductSlice';
import { removeFromCart } from '@redux/slices/CartSlice';
const defaultImage = 'https://img.freepik.com/free-icon/user_318-159711.jpg?w=500';


const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const common = useSelector(state => state.user.userDetails);
  const [image, setImage] = useState('');

  const uploadImage = () => {
    console.log('----')
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={uploadImage}>
          <Image source={{ uri: image ? image : defaultImage }} style={styles.profileImage} />
        </TouchableOpacity>

      </View>
      <Header isBackButton isProfilePage />
    </View>
  )
}

export default Profile;