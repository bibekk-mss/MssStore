import { StyleSheet } from "react-native";
import { palette } from "@theme/colors";
import { fonts } from "@theme/fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '16%',
        backgroundColor: palette.CLOUDS,
        display: 'flex',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '45%',
        resizeMode: 'contain',
        paddingVertical: '2%',
    },
    textContainer: {
        width: '80%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    title: {
        fontFamily: fonts.heavy,
        fontSize: 16,
        lineHeight: 18,
        color: palette.WET_ASPHALT,
        marginBottom: '2%'
    },
    category: {
        fontFamily: fonts.heavy,
        fontSize: 14,
        flexShrink: 1,
        color: palette.SAN_JUAN,
        lineHeight: 20,
    },
    description: {
        fontFamily: fonts.regular,
        fontSize: 13,
        flexShrink: 1,
        color: palette.BLACK,
        lineHeight: 15,
        marginVertical: '2%'
    },
    price: {
        fontFamily: fonts.heavy,
        fontSize: 15,
        flexShrink: 1,
        color: palette.AMETHYST,
        marginVertical: '2%'
    },
    item: {
        height: 'auto',
        // maxHeight: '80%',
        width: '90%',
        backgroundColor: palette.WHITE,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: '5%',
        padding: '3%'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        height: '8%',
        marginTop: 'auto',
        marginBottom: '3%'
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