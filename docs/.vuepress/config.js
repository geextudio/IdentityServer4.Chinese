module.exports = {
    title: 'Identity Server Stories',
    description: 'Just learn something about Identity Server',
    dest: 'public',
    
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: '《Identity Server 那些事儿》',
          description: '搞清楚 Identity Server 的那些事儿是怎么回事儿.'
        },

        '/en/': {
          lang: 'en-US',
          title: 'The Identity Server Stories!',
          description: 'Just learn something about Identity Server.'
        }
      },


      themeConfig: {
        locales: {

            '/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                  updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                  }
                },
                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 导航菜单
               /*  nav: [
                  { text: '嵌套', link: '/zh/nested/' }
                ], */
                sidebar: {
                  '/zh/': [/* ... */],
                  '/zh/nested/': [/* ... */]
                }
              },  
            

            '/en/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},

                // navigator
               /*  nav: [
                { text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }
                ], */
                sidebar: {
                '/': [/* ... */],
                '/nested/': [/* ... */]
                }
            }
            
        }
      }
  };