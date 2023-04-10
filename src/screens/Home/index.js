import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import Button from '@components/Button/Button';
import Header from '@components/Header/Header';
// import { messageHelper } from '@helpers/messageHelper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from '@redux/slices/ProductSlice';
import { addToCart } from '@redux/slices/CartSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const common = useSelector(state => state.product);

  // console.log(JSON.stringify(common.productsList, null, 1));

  useEffect(() => {
    dispatch(getAllProducts({}))
  }, [])

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  }

  const goToDetailsPage = (id) => {
    navigation.navigate('DetailsScreen', { productId: id });
  }

  const buttonClick = () => {
    // Toast.show({
    //   type: 'error',
    //   props: {
    //     title: 'This is an error message'
    //   }
    // });

    // Toast.show({
    //   type: 'info',
    //   props: {
    //     title: 'This is an error message'
    //   }
    // });

    // Toast.show({
    //   type: 'info',
    //   props: {
    //     title: 'This is an error message'
    //   }
    // });
  }

  return (
    <View style={styles.container}>
      {/* <Button onClick={buttonClick} title="Get" /> */}
      {common.loading ?
        <ActivityIndicator size="large" color='#3498db' /> :
        <FlatList
          data={common.productsList}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: '4%', paddingTop: '3%' }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.item} onPress={() => goToDetailsPage(item.id)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.rightDiv}>
                <View style={styles.textContainer}>
                  <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                  <Text style={styles.category}>{item.category}</Text>
                  <Text style={styles.price}>$ {item.price}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.addCartButton} onPress={() => addItemToCart(item)}>
                    <Text style={styles.addCartButtonText}>ADD TO CART</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.addWishButton}>
                    <Text style={styles.addWishButtonText}>WISHLIST</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text style={styles.noDataFoundText}>No data found</Text>}
        />
      }
      <Header isSearch />
    </View>
  );
};

export default Home;