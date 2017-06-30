/**
 * 欢迎页
 * @flow
 * **/
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    InteractionManager,
    Platform,
    Image,
} from 'react-native'
import HomePage from './HomePage'
import ThemeDao from '../expand/dao/ThemeDao'
import SplashScreen from 'react-native-splash-screen'
import NavigationBar from '../common/NavigationBar';

export default class WelcomePage extends Component {

    componentDidMount() {
        const {navigator} = this.props;
        new ThemeDao().getTheme().then((data=>{
            this.theme=data;
        }));
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                SplashScreen.hide();
                navigator.resetTo({
                    component: HomePage,
                    title: 'HomePage',
                    passProps:{
                        theme: this.theme
                    },
                    navigationBarHidden: true,
                });
            });
        }, 500);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<Image style={{flex:1,width:null}} resizeMode='repeat' source={require('../../res/images/LaunchScreen.png')}/>*/}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})