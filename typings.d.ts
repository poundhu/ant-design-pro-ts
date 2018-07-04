declare module 'dva';
declare module '*.css';
declare module '*.less';
declare module '*.svg';
declare module '*.png';
declare module "*.json" {
  const content: object;
  export default content;
}

// 给window上扩展属性
declare interface Window {
  APP: any;
  __state__: any;
  g_app: any;
}

interface CommonElement {
  styleName?: string;
  [propName: string]: any;
}

interface System {
  import<T = any>(module: string): Promise<T>
}

declare const System: System
