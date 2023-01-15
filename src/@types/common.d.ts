// basic type
declare type Void = void;
declare type UnDef = undefined
declare type Null = null;
declare type Unknow = unknown;
declare type Numeric = number | string

declare type AMap = Record<string, any>

declare type HashMap<Key extends string = string, Value extends any = any> = Record<Key, Value>

declare type List<Item extends any = any> = Item[]

declare type Tree<Item extends keyof any> = {
  [key in keyof Item]?: Item[key];
}

declare type Class = new (...args: any[]) => any

declare type Noop = () => void;

declare type Fn<T extends any = any, R = any> = (...args: T[]) => R

declare type IReactComponent<P = any> =
  | React.ClassicComponentClass<P>
  | React.ComponentClass<P>
  | React.FunctionComponent<P>
  | React.ForwardRefExoticComponent<P>


declare type TreeNode<Item extends keyof any> = List<Tree<Item> & {
  children?: Tree<Item> | List<Tree<Item>> | Null;
}>



declare type HooksWillUpdate<Props, State> = [
  Readonly<Props>,
  Readonly<State>,
  any
]

