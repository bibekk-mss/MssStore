import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";
import MSS_LOGO from "@assets/svg/MSS_LOGO.svg";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ isBackButton, isCartPage, isSearch, isProfilePage }) => {
  const navigation = useNavigation();
  const common = useSelector(state => state.cart);
  const user = useSelector((state) => state.user);
  // console.log(user);

  function handleBackButtonClick() {
    navigation.goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
    };
  }, []);

  goBack = () => {
    navigation.goBack();
  }

  goCart = () => {
    navigation.navigate('CartPage');
  }

  goPage = () => {
    navigation.navigate('CartPage');
  }

  goProfilePage = () => {
    navigation.navigate('ProfilePage');
  }

  return (
    <View style={styles.header}>
      {!isBackButton &&
        <View style={styles.logoDiv}>
          <MSS_LOGO width={70} height={60} />
          <Text style={styles.headerText}>store</Text>
        </View>
      }

      {isBackButton &&
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>{`< back`}</Text>
        </TouchableOpacity>
      }

      {(!isSearch && !isProfilePage) &&
        <TouchableOpacity style={styles.cartCountButton} onPress={goProfilePage}>
          <Icon name="user" size={15} color={palette.WHITE} />
        </TouchableOpacity>
      }

      {isCartPage &&
        <TouchableOpacity onPress={goCart}
          style={[styles.cartCountButton, {
            backgroundColor: palette.POMEGRANATE
          }]}>
          <Text style={[styles.cartCountButtonText, {
            color: palette.WHITE
          }]}>{`$ ${parseInt(common?.totalPrice)}`}</Text>
        </TouchableOpacity>
      }

      {isSearch &&
        <TouchableOpacity style={styles.searchDiv} onPress={goPage}>
          <Text style={styles.searchPlaceholder}>Search</Text>
          <Icon name="search" size={15} color={palette.WHITE} />
        </TouchableOpacity>
      }


      {!isCartPage &&
        <TouchableOpacity onPress={goCart}
          style={[styles.cartCountButton, { flexDirection: 'row' }]}
        >
          <Icon name="shopping-cart" size={15} color={palette.WHITE} />
          <Text style={styles.cartCountButtonText}>{" "}{common.cartCount}</Text>
        </TouchableOpacity>
      }

    </View>
  )
}
const styles = StyleSheet.create({

  headerText: {
    color: palette.WHITE,
    fontSize: 11,
    fontFamily: fonts.regular,
    marginTop: -22,
    textTransform: 'uppercase',
  },
  logoDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'green',
    marginTop: -10
  },
  header: {
    backgroundColor: palette.PETER_RIVER,
    elevation: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  backButton: {
    backgroundColor: palette.WET_ASPHALT,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    borderRadius: 50
  },
  backButtonText: {
    fontFamily: fonts.bold,
    color: palette.WHITE,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1
  },

  cartCountButton: {
    backgroundColor: palette.AMETHYST,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginHorizontal: '3%',
    borderRadius: 50
  },
  cartCountButtonText: {
    fontFamily: fonts.heavy,
    color: palette.WHITE,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  searchDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 25,
    width: '30%',
    borderWidth: 1,
    borderColor: palette.WHITE,
    borderRadius: 50,
    paddingHorizontal: '2%'
  },
  searchPlaceholder: {
    fontFamily: fonts.regular,
    color: palette.WHITE,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginRight: 'auto',
    marginLeft: '2%'

  }

});
export default Header;