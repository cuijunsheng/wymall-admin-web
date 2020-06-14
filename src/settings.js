import variables from 'assets/styles/element-variables.scss'

export default {
  /**
   * 网站标题
   */
  title: '忘忧商城',

  /**
   * 主题风格
   */
  theme: variables.theme,

  /**
   * 是否显示设置选项
   */
  showSettings: true,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: true,
  /**
   * 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,
  /**
   * 记住密码状态下的密码在Cookie中存储的天数，默认1天s
   */
  passCookieExpires: 1,
  /**
   * 是否显示侧边栏logo
   */
  sidebarLogo: true,

  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,

  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2019 Zheng Jie <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>',

  /**
   * 备案号
   */
  caseNumber: '浙ICP备18005431号'
}
