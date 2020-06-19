import React,{Component} from 'react'
import HeaderComponent from './HeaderComponent'
import SearchEmployee from './SearchEmployee'
class MainComponent extends Component {
     
    render(){
        return (
            <div>
            <HeaderComponent />
            <SearchEmployee />
            </div>
            
        )
    }
}

export default MainComponent