1.vue中的mvvm
  什么是MVVM:model,view,viewModel
  view层:
      视图层
      在我们前端开发中，通常就是DOM层
      主要的作用是给用户展示各种信息
  Model层:
      数据层
      数据可能是我们固定的死数据，更多的是来自我们服务器，从网络上请求下来的数据
      在我们计数器的案例中，就是后面抽取出来的obj,当然,里面的数据没这么简单
  vueModel层:
      视图模型层
      视图模型层是View和Model沟通的桥梁
      一方面它实现了Data Binding，也就是数据绑定，将Model的改变实时的反应到View中
      另一方面它实现了DOM Listener，也就是DOM监听，当DOM发生一些事件(点击、滚动、touch等)时，
      可以监听到，并在需要的情况下改变对应的Data

2.vue实例中的对象options中可以包含哪些选项
    el:
      类型:string|HTMLElement
      作用:决定之后Vue实例会管理哪一个DOM
    data:
      类型:Object|Function（组件中data必须是一个函数）
      作用:Vue实例对应的数据对象
    methods:
      类型:{[key:string]:Function}
      作用:定义属于Vue的一些方法,可以在其他地方调用,也可以在指令中使用

3.v-bind绑定style
    可以利用v-bind:style来绑定一些CSS内联样式
    在写CSS属性名的时候，比如fontSize
      可以使用驼峰式(camelCase)fontSize
      或短横线分隔(kebab-case)'font-size'
    绑定class有两种方式:
      对象语法
      数组语法