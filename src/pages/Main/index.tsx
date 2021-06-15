import { Component } from 'react'
import { View ,Button,Input} from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction ,AtInput,AtButton} from "taro-ui"
import { observer} from 'mobx-react'
import Taro from '@tarojs/taro'
import counter from "../../store/counter";

import './index.scss'



@observer
class Index extends Component {

  state={
    isOpened:false
  }
  componentDidMount() {
    counter.setPhone()
  }
  componentWillUnmount() {
    counter.emptyPhone()

  }

  listClick=()=>{
    Taro.navigateTo({
      url:'/pages/Main/ListDetail/index'
    })
  }
  backTo=()=>{
    Taro.navigateBack()
  }

  addClick=()=>{
    this.setState({isOpened:true})
  }
  cancelClick=()=>{
    this.setState({isOpened:false})
    console.log('********************')
  }
  confirmClick=()=>{
    this.setState({isOpened:false})
    console.log('========================')
  }
  render () {

    return (
      <View className='index'>

        <View className='index_top'>
          对比
          {/*<View onClick={this.backTo} className='at-icon at-icon-arrow-left'></View>*/}
          {/*<View className='index_top_text'> {text} </View>*/}
          {/*<View className='index_top_search'>搜索</View>*/}
        </View>
        <View className='scrollview'>
          <View className='firstColumn'>
            {counter.infoArr.map((item) => {
              return (
                <View className='columnFlex'>
                  <View>{item}</View>
                </View>
              )
            })}
          </View>
          {counter.phoneArr.map((item) => {
            return (
              <View className='phone'>
                <View>{item.id}</View>
                <View>{item.name}</View>
                <View>{item.tags[0]}</View>
                <View>{item.tags[1]}</View>
                <View>{item.purchesMoney}</View>
              </View>
            )
          })}
          <View className='lastAdd' onClick={this.addClick}>添加机型</View>
          <AtModal isOpened={this.state.isOpened}>
            <AtModalHeader>请输入想要对比的手机</AtModalHeader>
            <AtModalContent>
              <input className='addInput'  list='search' defaultValue='111'  />
              <datalist id='search' >
                <option value='aaa'  />
                <option value='bbb'  />
                <option value='ccc'  />
                <option value='ddd'  />
              </datalist>

            </AtModalContent>
            <AtModalAction>
              <AtButton customStyle={{width:'40%'}} onClick={this.cancelClick}>取消</AtButton>
              <AtButton customStyle={{width:'40%'}} onClick={this.confirmClick}>确定</AtButton>
            </AtModalAction>
          </AtModal>
        </View>

      </View>
    )
  }
}

export default Index
