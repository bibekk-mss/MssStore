import { StyleSheet } from "react-native";
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '16%',
    backgroundColor: palette.CLOUDS,
  },
  profileContainer: {
    height: '60%',
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: palette.WHITE,
    marginTop: '5%',
    elevation: 10
  },
  profileImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    marginBottom: 'auto',
    marginTop: '8%'

  },










  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: '2%'
  },
  textContainer: {
    width: 200,
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: fonts.heavy,
    fontSize: 15,
    // flexShrink: 1,
    color: palette.WET_ASPHALT,
  },
  category: {
    fontFamily: fonts.regular,
    fontSize: 12,
    flexShrink: 1,
    color: palette.BLACK,
  },
  price: {
    fontFamily: fonts.heavy,
    fontSize: 15,
    flexShrink: 1,
    color: palette.AMETHYST,
  },
  item: {
    height: 150,
    width: '100%',
    backgroundColor: palette.WHITE,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '5%',
    padding: '3%'
  },
  rightDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: '100%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '30%',
  },
  addCartButton: {
    backgroundColor: palette.GREEN_SEA,
    width: '55%',
    height: '80%',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCartButtonText: {
    color: palette.WHITE,
    fontFamily: fonts.regular,
  },
  addWishButton: {
    backgroundColor: palette.BITTERSWEET,
    width: '40%',
    height: '80%',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addWishButtonText: {
    color: palette.WHITE,
    fontFamily: fonts.regular,
  },
  noDataFoundText: {
    color: palette.DIM_GRAY,
    fontFamily: fonts.regular,
    textAlign: 'center'
  }
});
export default styles;