import { Component } from 'react'
import { View } from '@tarojs/components'
import { observer} from 'mobx-react'
import Taro from '@tarojs/taro'
import {AtIcon, AtSearchBar} from 'taro-ui'

import './index.scss'




@observer
class Index extends Component {

  state={
    value:'',
    isFollow:false,
    isHead:true,
    isHot:false,
    isTopic:false,
    isQa:false,
    style:{
      color:'#3fd0d5'
    },

  }

  onChange=()=>{

  }
  onActionClick=()=>{

  }

  followClick =()=>{
    this.setState({isFollow:true,isHead:false,isHot:false,isTopic:false,isQa:false})
  }
  headClick =()=>{
    this.setState({isFollow:false,isHead:true,isHot:false,isTopic:false,isQa:false})

  }
  hotClick =()=>{
    this.setState({isFollow:false,isHead:false,isHot:true,isTopic:false,isQa:false})

  }
  topicClick =()=>{
    this.setState({isFollow:false,isHead:false,isHot:false,isTopic:true,isQa:false})

  }
  qaClick =()=>{
    this.setState({isFollow:false,isHead:false,isHot:false,isTopic:false,isQa:true})

  }



  render () {

    return (
      <View className='main'>
        <View className='header'>
          <View className='headPortrait'></View>
          <View className='search'>
            <AtSearchBar
              showActionButton={false}
              placeholder='搜索'
              inputType='text'
              value={this.state.value}
              onChange={this.onChange}
              onActionClick={this.onActionClick}
            />
          </View>

        </View>
        <View className='main_bar'>
          <View style={this.state.isFollow && { color:'#3fd0d5'}} className='bar' onClick={this.followClick}>
            关注<View className={this.state.isFollow && 'temp'}></View>
          </View>
          <View style={this.state.isHead && { color:'#3fd0d5'}} className='bar' onClick={this.headClick}>
            头条<View  className={this.state.isHead && 'temp'}></View>
          </View>
          <View style={this.state.isHot && { color:'#3fd0d5'}} className='bar' onClick={this.hotClick}>
            热榜<View className={this.state.isHot && 'temp'}></View>
          </View>
          <View style={this.state.isTopic && { color:'#3fd0d5'}} className='bar' onClick={this.topicClick}>
            话题<View className={this.state.isTopic && 'temp'}></View>
          </View>
          <View style={this.state.isQa && { color:'#3fd0d5'}} className='bar' onClick={this.qaClick}>
            问答<View className={this.state.isQa && 'temp'}></View>
          </View>
        </View>
        {
          this.state.isFollow &&
          <View className='content'>
            关注
          </View>
        }
        {
          this.state.isHead &&
          <View className='content'>
            头条
          </View>
        }
        {
          this.state.isHot &&
          <View className='content'>
            热门
          </View>
        }
        {
          this.state.isTopic &&
          <View className='content'>
            话题
          </View>
        }
        {
          this.state.isQa &&
          <View className='content'>
            问答
          </View>
        }
      </View>
    )
  }
}

export default Index
