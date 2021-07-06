import { Component } from 'react'
import { View ,Button,Input} from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction ,AtInput,AtButton} from "taro-ui"
import { observer} from 'mobx-react'
import Taro from '@tarojs/taro'
import counter from "../../store/counter";


import './index.scss'
import phone from "../../utils/phone";



@observer
class Index extends Component {

  state={
    isOpened:false,
    searchValue:'',
  }
  componentDidMount() {

    counter.setPhone('dataList',0)
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
  }
  deleteClick=(index)=>{
    counter.deletePhone(index)
  }
  confirmClick=()=>{

    this.setState({isOpened:false})
    Object.keys(phone).slice(2).map((item)=>{
      phone[item].map((detailItem,index)=>{
        if(detailItem.name === this.state.searchValue){
          counter.setPhone(item,index)
        }
      })
    })
  }
  inputValue = (e)=>{
    this.setState({searchValue : e.target.value})

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

          <View >
            <View className='sc1'>
              {
                counter.phoneArr.map((item,index) => {
                  return(
                    <View style={{position:'relative'}}>
                      <View className='delete' onClick={()=>{this.deleteClick(index)}}>x</View>
                      {item.id}
                    </View>
                  )
                })
              }
            </View>
            {
              counter.select.map((name)=>{
                return(
                  <View className='sc1'>
                    {
                      counter.phoneArr.map((item)=>{
                        return(
                          <View>
                            {item[name]}
                          </View>
                        )
                      })
                    }
                  </View>
                )
              })
            }

          </View>

          {
            counter.phoneArr.length <  6 &&
            <View className='lastAdd' onClick={this.addClick}>添加机型</View>
          }

          <AtModal isOpened={this.state.isOpened}>
            <AtModalHeader>请输入想要对比的手机</AtModalHeader>
            <AtModalContent>
              <input className='addInput'  list='search' defaultValue='' onInput={this.inputValue}  />
              <datalist id='search' >
                {
                  Object.keys(phone).slice(2).map((item)=>{
                     return phone[item].map((detailItem)=>(
                       <option value={detailItem.name}>{detailItem.name}</option>
                     ))
                  })
                }
              </datalist>
            </AtModalContent>
            <AtModalAction>
              <AtButton customStyle={{width:'40%'}} onClick={this.cancelClick}>取消</AtButton>
              <AtButton customStyle={{width:'40%'}} onClick={this.confirmClick}>确定</AtButton>
            </AtModalAction>
          </AtModal>
        </View>

        {/*<View className='auto'>*/}
        {/*  {*/}
        {/*   this.state.select.map((temp)=>{*/}
        {/*     return(*/}
        {/*       <View className='ceshi'>*/}
        {/*         {*/}
        {/*           counter.phoneArr.map((item)=>{*/}
        {/*             return(*/}
        {/*               <View>*/}
        {/*                 {item[temp]}*/}
        {/*                 /!*{temp}*!/*/}
        {/*               </View>*/}
        {/*             )*/}
        {/*           })*/}
        {/*         }*/}
        {/*       </View>*/}
        {/*     )*/}
        {/*   })*/}
        {/*  }*/}

        {/*</View>*/}

      </View>
    )
  }
}

export default Index
