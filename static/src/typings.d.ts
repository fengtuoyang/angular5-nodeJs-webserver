/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

//声明高德地图，否则ts中new的时候，会报错
declare var  AMap: any;
