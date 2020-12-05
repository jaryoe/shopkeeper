///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>
///<reference path="../node_modules/@types/node/index.d.ts" />

// 在tsx官方定义的标签库上做扩展
declare namespace JSX {
  interface IntrinsicElements {
    target: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    Component: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}

//允许ts,tsx文件引入less文件
declare module '*.less' {
  var styles: any;
  export = styles;
}

//允许ts,tsx文件引入scss文件
declare module '*.scss' {
  var styles: any;
  export = styles;
}

//允许ts,tsx文件引入svg文件
declare module '*.svg' {
  const content: any;
  export default content;
}

// worker-loader
declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }
  export default WebpackWorker;
}

declare const EXCELPATH: string;
declare const ENV: string;
