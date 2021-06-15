import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View} from '@tarojs/components'
import { observer} from 'mobx-react'

import './index.scss'


@observer
class Index extends Component {

  state = {
    selected: 0,
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgb(227,14,14)',
    list: [
      {
        pagePath: 'pages/Main/Main',
        text: '首页',
        // iconPath: '../image/ic_home_normal.png',
        // selectedIconPath: '../image/ic_home_selected.png'
      },
      {
        pagePath: 'pages/Personal/Main',
        text: '个人',
        // iconPath: '../image/ic_me_normal.png',
        // selectedIconPath: '../image/ic_me_selected.png'
      }
    ]
  }

  switchTab = (item) => {
    const url = '/' + item.pagePath
    Taro.switchTab({
      url: url
    })
  }

  render () {

    return (
      <View className='bottom_tab'>
        {
          this.state.list.map((item, index) => {
            return <View className='bottom_tab_item' onClick={this.switchTab} data-path={item.pagePath} key={item.text}>
              {/*<Image className='bottom-tab-item-img' src={this.state.selected === Main ? item.selectedIconPath : item.iconPath} />*/}
              <View className='bottom_tab_item_text' style={{ color: this.state.selected === index ? this.state.selectedColor : this.state.color }}>
                {item.text}
              </View>
            </View>
          })
        }
      </View>
    )
  }
}

export default Index
