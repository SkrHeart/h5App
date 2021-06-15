export default {
  pages: [
    'pages/index/index',
    'pages/Main/index',
    'pages/Main/ListDetail/index',
    'pages/Personal/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom:true,
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgb(198,47,198)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/imgs/home.png',
        selectedIconPath: './assets/imgs/home_select.png'
      },
      {
        pagePath: 'pages/Main/index',
        text:'对比',
        iconPath: './assets/imgs/added.png',
        selectedIconPath: './assets/imgs/release.png'
      },
      {
        pagePath: 'pages/Personal/index',
        text: '我的',
        iconPath: './assets/imgs/center.png',
        selectedIconPath: './assets/imgs/center_select.png'
      }],
    usingComponents:{}
  }
}
