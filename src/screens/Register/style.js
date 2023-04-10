import { StyleSheet } from "react-native";
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.TURQUOISE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginCard: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: palette.WHITE,
    width: '80%',
    height: 'auto',
    borderRadius: 10,
    padding: '3%',
    elevation: 5
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 'auto',
  },
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
  button: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: palette.PETER_RIVER,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '3%'
  },
  buttonText: {
    fontFamily: fonts.heavy,
    fontSize: 15,
    color: palette.WHITE,
  },
  errorText: {
    color: palette.ERROR,
    fontFamily: fonts.regular,
    fontSize: 13,
    marginTop: -8,
    marginBottom: 8,
    //marginLeft: -100
  },
  goSignInBtn: {
    backgroundColor: palette.WHITE,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: '2%',
    zIndex: -2,
    marginRight: -150
  },
  goSignInBtnText: {
    fontFamily: fonts.heavy,
    fontSize: 15,
    color: palette.TURQUOISE,
    padding: '1%'
  }
});
export default styles;