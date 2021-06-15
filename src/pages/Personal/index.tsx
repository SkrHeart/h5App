import { Component } from 'react'
import { View } from '@tarojs/components'
import {AtDivider} from "taro-ui";
import Taro from '@tarojs/taro'
import { observer} from 'mobx-react'
import './index.scss'


const text = '用户id'
@observer
class Index extends Component {

  backTo=()=>{
    Taro.navigateBack()
  }

  render () {

    return (
      <View className='personal'>

        <View className='personal_top'>
          {/*<View className='personal_top_back' onClick={this.backTo}>*/}
          {/*  <View className='at-icon at-icon-arrow-left'></View>*/}
          {/*</View>*/}
          <View className='personal_top_text'> {text} </View>

        </View>
        <View className='personal_one'>
          没有更多了
        </View>
        <View className='personal_two'></View>
        <View className='personal_thr'></View>
        <View className='contact'>
          <View>---开发者联系方式---</View>
          <View>QQ：1780192762</View>
        </View>
      </View>
    )
  }
}

export default Index
