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

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// definition.d.ts
declare module "*.png" {
  const value: string;
  export = value;
}
