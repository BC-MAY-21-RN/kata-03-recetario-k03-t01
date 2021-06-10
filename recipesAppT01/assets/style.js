import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#363636',

    },
    searchBar: {
        margin: 10,
        fontSize: 14,
        color: 'white',
        backgroundColor: '#5e5e5e',
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
    },
    recentItemTitle: {
        color: 'white',
        fontSize: 18,
    },
});

export default style;