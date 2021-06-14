/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Text, ImageBackground, FlatList} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/style';

const Ingredient = ({ ingredient, size }) => {
    return (
      <View style={style.containerIngredient}>
        <Text style={style.textIngredient}>{ingredient}</Text>
        <Text style={style.textIngredient}>{size}</Text>
      </View>
    );
  };

const details = function({ route, navigation }) {

    console.log(route.params);
    console.log(route.params.recipe.id);
    return (
        <SafeAreaView style={style.containerTop}>
            <ImageBackground source={{uri: route.params.recipe.image}} style={style.imageBackground}>
                <View style={style.textsContainer}>
                    <View style={style.iconsContainer}>
                        <Icon style={style.topIcon} name="close" />
                        <View style={style.rightIcons}>
                            <Icon style={style.topIcon} name="ios-share" />
                            <Icon style={style.topIcon} name="favorite-border" />
                        </View>
                    </View>
                    <View style={style.textsBottom}>
                        <Text style={style.textRecipeName}>{route.params.recipe.title}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={style.containerBottom}>
                <Text style={style.textIngredients}>Ingredients for: {route.params.recipe.servings} servings</Text>
                <FlatList
                    data={route.params.recipe.ingredients}
                    renderItem={({ item }) => <Ingredient {...item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default details;
