
import React,{Component} from 'react'
import {
    NavigatorIOS,
} from 'react-native'

import RepositoryUtils from '../expand/dao/RepositoryUtils'
import WelcomePage from './WelcomePage'

function setup(){

    RepositoryUtils.init(true);

    class Root extends Component {

        constructor(props) {
            super(props);
            this.state = {
            };
        }
        _renderScene(route, navigator) {
            let Component = route.component;
            return (
                <Component {...route.params} navigator={navigator}/>
            );
        }
        render() {
            new ThemeDao().getTheme().then((data=>{
            this.theme=data;
        }));
            return (
                <NavigatorIOS
                    style = {{flex: 1}}
                    initialRoute={{
                        title: 'Welcome',
                        component: WelcomePage,
                        passProps: {
                            theme: this.theme
                        },
                        navigationBarHidden: true,
                    }}
                    renderScene={(e, i)=>this._renderScene(e, i)}
                />
            );
        }
    }

    return <Root/>;
}

module.exports = setup;