import { Component } from 'react'
import { View } from '@tarojs/components'
import { observer} from 'mobx-react'

import './index.scss'

@observer
class Index extends Component {

  render () {

    return (
      <View className='list'>
        详细
      </View>
    )
  }
}

export default Index
