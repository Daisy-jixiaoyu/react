import React, { Component, Fragment } from 'react'
import './style.css'
import Header from './components/header'
import Animation from './components/animation'
import axios from 'axios'
const style = {
  cursor:"pointer"
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:'222',
      list:[]
    }
    this.inputChange = this.inputChange.bind(this)
  }
  inputChange(e){
    // console.log(e,'eeee')
    this.setState({value:this.input.value})
    this.setState({list:[...this.state.list,this.state.value]},()=>{
      
    })
    console.log(this.ul.querySelectorAll('li').length)
  }
  deleteIndex(index){
    console.log(index,'index')
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  // componentWillMount(){
  //   console.log('willMount')
  // }
  componentDidMount(){
    console.log('DidMount')
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
         .then(()=>{
           console.log('请求成功')
         })
         .catch(()=>{
           console.log('请求失败')
         })
  }
  shouldComponentUpdate(){
    console.log('shouldComponent')
    return true
  }

  // componentWillUpdate(){
  //   console.log()
  // }
  

  render() {
    return (
      <Fragment>
        <div>
          hello world
        </div>
        <div>
          <label htmlFor="inputName">shuwu</label>
          <input ref={(input)=>{this.input=input}} className="input" id="inputName" value={this.state.value} onChange={this.inputChange}/>
          <ul ref={(ul)=>{this.ul=ul}}>
            {/*  */}
            {
              this.state.list.map((item,index)=>{
                return <li key={index} style={style} onClick={this.deleteIndex.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
              })
            }
          </ul>
          <Header deleteItem ={this.deleteIndex.bind(this,1)} content={this.state.value}/>
          <Animation />
        </div>

      </Fragment>

    )
  }
  
}

export default App