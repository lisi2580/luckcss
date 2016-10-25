# luck css 

### 基础
默认采用border-box盒子模型

### 1.布局

添加flex类以后，子元素可实现垂直居中、自适应宽度等布局。（注：uc浏览器安卓版不能兼容部分flex属性）

相关class：`.flex-row .flex-column .flex-center .flex-right .flex-bottom .flex-top .flex-left .flex-middle .flex-between .flex-around .flex-strech .flex-col-auto .flex-col-1 ... .flex-col-12`

- 添加 `.flex-row` 后，被设置成横向属性的flex容器。
- 添加 `.flex-column` 后，被设置成垂直属性flex容器。
- 添加 `.flex-center` 后，子元素将水平居中。
- 添加 `.flex-between` 后，子元素将两端对齐。
- 添加 `.flex-around` 后，子元素将平均分布。
- 添加 `.flex-strech` 后，子元素将拉伸填充。
- 添加 `.flex-left` 后，子元素将左对齐。
- 添加 `.flex-right` 后，子元素将右对齐。
- 添加 `.flex-top` 后，子元素将顶对齐。
- 添加 `.flex-bottom` 后，子元素将底对齐。
- `.flex-col-1 ... .flex-col-12` 是类似于`.col-*` 的栅格系统，其中`.flex-col-auto`能自适应剩余的宽度

例：
        
    <div class="flex-row flex-middle flex-center">
        <div class="flex-col-3">我占 1/4 宽</div>
        <div class="flex-col-4">我占 1/3 宽</div>
        <div class="flex-col-auto">我占 剩余 宽</div>
    </div>
    
    


### 2.快捷样式

- `.width-full` 宽度100%
- `.height-full` 高度100%（提示：仅在父容器有高度属性时有效）
- `.text-center` 文本居中对齐
- `.text-left` 文本左对齐
- `.text-right` 文本右对齐
- `.font-normal` 清除字的体斜体和粗体样式
- `.font-italic` 斜体字
- `.font-bold` 字体加粗
- `.underline` 添加下划线
- `.uppercase` 转换字母大写
- `.lowercase` 转换字母小写
- `.capitalize` 首字母大写
- `.relative` 相对定位
- `.none` 隐藏元素（display:none）
- `.block` 块级元素
- `.inline-block` 行内块级元素
- `.inline` 行内元素
- `.no-word-break` 禁止换行
- `.nowrap` 文字最多显示1行，超出部分以`...`代替
- `.nowrap-2` 文字最多显示2行，超出部分以`...`代替
- `.nowrap-3` 文字最多显示3行，超出部分以`...`代替
- `.border-t` 向元素添加顶边框
- `.border-r` 向元素添加右边框
- `.border-b` 向元素添加底边框
- `.border-l` 向元素添加左边框
- `.mg-t-0rpx ... mg-t-30rpx` 向元素添加对于量的margin-top值
- `.mg-r-0rpx ... mg-r-30rpx` 向元素添加对于量的margin-right值
- `.mg-b-0rpx ... mg-b-30rpx` 向元素添加对于量的margin-bottom值
- `.mg-l-0rpx ... mg-l-30rpx` 向元素添加对于量的margin-left值
- `.mg-lr-0rpx ... mg-lr-30rpx` 向元素添加对于量的margin-left值和margin-right值
- `.mg-tb-0rpx ... mg-tb-30rpx` 向元素添加对于量的margin-top值和margin-bottom值




### 3.文字
有8种大小的字体可直接使用，他们分别是：20, 22, 24, 26, 28, 32, 36, 40
`.font-size-20,.font-size-22,.font-size-24,.font-size-28,.font-size-32,.font-size-36 .font-size-40`。 
另外还有文本颜色的快捷样式：
- `.color-red` 红
- `.color-green` 绿
- `.color-yellow` 黄
- `.color-blue` 蓝
- `.color-white` 白
- `.color-black` 黑
- `.color-333` 文本颜色：#333
- `.color-666` 文本颜色：#666
- `.color-999` 文本颜色：#999


### 4.按钮

想view标签添加 .btn .s-orange-outlined(小-橙-空心),可设置按钮样式

其他按钮类 

- `.s-white-outlined`
- `.s-gray-outlined`
- `.m-orange-outlined`


    <view class="btn type1"></view>
    
    
    
### 5.动画
向元素添加`.animate`和`.fade-in`后，元素将执行一次淡入动画。

当然这里有多种动画类型可选`.fade-in-down,.fade-in-down-big,.fade-in-left,.fade-in-left-big,.fade-in-right,.fade-in-right-big,.fade-in-up,.fade-in-up-big,.shake`

开源的[animate.css](https://github.com/daneden/animate.css)有更多不错的效果，可以去看看。

