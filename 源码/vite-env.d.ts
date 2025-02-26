/// <reference types="vite/client" />
import { reactive } from "vue";


// declare module '*.vue' {
//   import { DefineComponent } from "vue"
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }


declare module '*.vue' {
   import type { DefineComponent } from 'vue'
   const vueComponent: DefineComponent<{}, {}, any>
   export default vueComponent
} 



// declare module "vuex" {
//    export * from "vuex/types/index.d.ts";
//    export * from "vuex/types/helpers.d.ts";
//    export * from "vuex/types/logger.d.ts";
//    export * from "vuex/types/vue.d.ts";
// }

// declare module "*.vue" {
//   import { App, defineComponent } from "vue";
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//   };
//   export default component;
// }


// env.d.ts 
//   <reference types="vite/client" />


// 简单版 
// declare module '*.vue' 


// 推荐
// declare module '*.vue' {
//   // 引入vue模块中ts的方法
//   import type { DefineComponent } from 'vue'
//   // 定义vue组件以及类型注解
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }





