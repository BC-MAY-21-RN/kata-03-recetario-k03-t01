/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {SafeAreaView, View, Text, ImageBackground, FlatList} from 'react-native';
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

const Details = function({ route, navigation }) {

    const [liked, setLiked] = useState(false);


    return (
        <SafeAreaView style={style.containerTop}>
            <ImageBackground source={{uri: route.params.recipe.image}} style={style.imageBackground}>
                <View style={style.textsContainer}>
                    <View style={style.iconsContainer}>
                        <Icon style={style.topIcon} name="close" onPress={() => navigation.goBack()} />
                        <View style={style.rightIcons}>
                            <Icon style={style.topIcon} name="ios-share" />
                            <Icon style={style.topIcon} name={liked ? "favorite" : "favorite-border"}
                                onPress={()=> setLiked(!liked)} />
                        </View>
                    </View>
                    <View style={style.textsBottom}>
                        <Text style={style.textRecipeSection}>{route.params.recipe.section}</Text>
                        <Text style={style.textRecipeName}>{route.params.recipe.title}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={style.containerBottom}>
                <Text style={style.textIngredients}>Ingredients for: {route.params.recipe.servings} servings</Text>
                <FlatList
                    data={route.params.recipe.ingredients}
                    renderItem={({ item }) => <Ingredient {...item} />}
                    keyExtractor={(item,index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

export default Details;
