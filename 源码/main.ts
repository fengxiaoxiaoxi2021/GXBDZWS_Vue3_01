import { createApp } from 'vue'  // 导入 CreatApp 的函数；
import './style.css'  
import App from './App.vue'   //引入 App.vue --模块的主入口 文件；
import ElementPlus from 'element-plus' // 引入 ElementPlus ;
import 'element-plus/dist/index.css'   // 引入ElementPlus 的CSS； 
import router  from './router'  // 导入router文件；
import * as Icons from '@element-plus/icons-vue' // 导入所有的icon的图标；
import store from './store' // 导入 创建的 store 对象；
import zhCn  from 'element-plus/es/locale/lang/zh-cn' // 导入element-plus中文语言包


// 创建一个app 
const app = createApp(App)


app.use(store).use(router).use(ElementPlus,{locale:zhCn,}).mount('#app')  
//使用vue中的CreateApp方法，创建一个app.vue组件，并把新创建的app 放到index.html文件中id=app的div中；
// 用use 绑定；

 
// 遍历所有的icon，把每个icon图标以组件的方式 加载到app中；
Object.keys(Icons).forEach((key) =>{
    app.component(key, Icons[key as keyof typeof Icons])
})








