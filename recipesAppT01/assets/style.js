/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#363636',
    },
    searchSection: {
        flex: 0,
        flexDirection: 'row',
        margin: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e5e5e',
    },
    searchIcon: {
        fontSize: 18,
        color: 'white',
        padding: 10,
    },
    searchBar: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        fontSize: 16,
        color: 'white',
        // backgroundColor: '#5e5e5e',
        borderRadius: 4,
    },
    listTitle: {
        marginLeft: 10,
        marginTop: 60,
        fontSize: 18,
        color: '#f40083',
    },
    recentItemImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        margin: 10,
    },
    trendingItemImage: {
        width: 110,
        height: 110,
        borderRadius: 10,
        margin: 10,
    },
    trendingItemTitle: {
        color: 'white',
        fontSize: 14,
        maxWidth: 110,
        marginLeft: 12,
    },
    recentItemTitle: {
        color: 'white',
        fontSize: 18,
        maxWidth: 150,
        marginLeft: 12,
    },
});

export default style;
