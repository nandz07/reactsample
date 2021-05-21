import {Component} from 'react'

class Header extends Component{
    render(){
        return(<h1>Hello i am {this.props.data}</h1>)
    }
}
export default Header
//function Header(props){
//    return(<h1>Hello i am {props.data}</h1>)
//}
//export default Header