/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#363636',
    },
    // SEARCH SECTION
    searchSection: {
        flex: 0,
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e5e5e',
    },
    searchIcon: {
        fontSize: 24,
        color: 'white',
        padding: 10,
    },
    searchBar: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 18,
        color: 'white',
        borderRadius: 4,
    },
    // LIST
    listTitle: {
        marginLeft: 10,
        marginTop: 60,
        fontSize: 24,
        color: '#f40083',
    },
    bigImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        margin: 10,
    },
    smallImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        margin: 10,
    },
    smallTitle: {
        color: 'white',
        fontSize: 14,
        maxWidth: 110,
        marginLeft: 12,
    },
    bigTitle: {
        color: 'white',
        fontSize: 18,
        maxWidth: 150,
        marginLeft: 12,
    },
    // DETAILS VIEW
    containerTop: {
        flex: 1,
        flexDirection: 'column',
    },
    containerBottom: {
        flex: 1,
        backgroundColor: '#363636',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    textsContainer: {
        textAlign: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#000000a1',
    },
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 40,
    },
    topIcon: {
        color: 'white',
        fontSize: 34,
        marginLeft: 20,
    },
    rightIcons: {
        marginRight: 30,
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textsBottom: {
        marginHorizontal: 30,
        marginBottom: 50,
    },
    textRecipeSection: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 20,
    },
      textRecipeName: {
        color: 'white',
        fontSize: 26,
    },
    containerIngredient: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#969696',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    textIngredients: {
        color: 'white',
        maxWidth: 130,
        fontSize: 20,
        marginBottom: 20,
        lineHeight: 30,
    },
    textIngredient: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 30,
        maxWidth: 300,
    },
});

export default style;
