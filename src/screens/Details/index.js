import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
// import { messageHelper } from '@helpers/messageHelper';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '@redux/slices/CartSlice';
import { getProductById } from '@redux/slices/ProductSlice';
import { addToCart } from '@redux/slices/CartSlice';

const Details = ({ route }) => {
  const dispatch = useDispatch();
  const common = useSelector(state => state.product);
  const id = route.params.productId;

  useEffect(() => {
    dispatch(getProductById({ productId: id }));
  }, [id])


  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  }

  return (
    <View style={styles.container}>

      {common.loading ?
        <ActivityIndicator size="large" color='#3498db' /> :
        <View style={styles.item}>
          <Image source={{
            uri: common.product.image
              ? common.product.image
              : 'https://via.placeholder.com/200'
          }} style={styles.image} />

          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{common.product.title}</Text>
            <Text style={styles.category}>{common.product.category}</Text>
            <Text style={styles.description} numberOfLines={11}>{common.product.description}</Text>
            <Text style={styles.price}>$ {common.product.price}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addCartButton} onPress={() => addItemToCart(common.product)}>
              <Text style={styles.addCartButtonText}>ADD TO CART</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addWishButton}>
              <Text style={styles.addWishButtonText}>WISHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      <Header isBackButton />
    </View>
  );
};

export default Details;