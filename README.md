# luck css 

### 基础
全局采用border-box属性,所有标签均无margin，padding,border

### 1.栅格系统

采用12列布局,向容器 `.row` 中嵌入 `.col-*` 可最多将容器划分成12列。可通过添加 `.pull-*`或`.push-*`来定位列。

`.width-1 ... .width-12` 是将宽度12列等分的快捷方式。

所有class：

`.col-1 ... col-12`
`pull-1 ... pull-11`
`push-1 ... push-11`

例：
    
    <div class="row">
        <div class="col-3">我占 1/4 宽</div>
        <div class="col-4">我占 1/3 宽</div>
        <div class="col-5">我占 5/12 宽</div>
    </div>
    
---------

### 2.flex布局

添加flex类以后，子元素可实现垂直居中、自适应宽度等布局。（注：uc浏览器安卓版不能兼容部分flex属性）

相关class：`.flex-row .flex-column .flex-center .flex-middle .flex-between .flex-around .flex-strech .flex-col-auto .flex-col-1 ... .flex-col-12`

- 添加 `.flex-row` 后，子元素将横向排列。
- 添加 `.flex-column` 后，子元素将垂直排列。
- 添加 `.flex-center` 后，子元素将水平居中。
- 添加 `.flex-between` 后，子元素将两端对齐。
- 添加 `.flex-around` 后，子元素将平均分布。
- 添加 `.flex-strech` 后，子元素将。
- `.flex-col-1 ... .flex-col-12` 是类似于`.col-*` 的栅格系统，其中`.flex-col-auto`能自适应剩余的宽度

例：
        
    <div class="flex-row flex-middle flex-center">
        <div class="flex-col-3">我占 1/4 宽</div>
        <div class="flex-col-4">我占 1/3 宽</div>
        <div class="flex-col-auto">我占 剩余 宽</div>
    </div>
    
    


### 3.快捷样式

- `.clear` 清除浮动
- `.left` 左浮动
- `.right` 右浮动
- `.center` 居中（采用两边margin auto的方式）
- `.width-full` 宽度100%
- `.height-full` 高度100%（提示：仅在父容器有高度属性时有效）
- 
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
- 
- `.none` 隐藏元素（display:none）
- `.block` 块级元素
- `.inline-block` 行内块级元素
- `.inline` 行内元素
- 
- `.nowrap` 文字最多显示1行，超出部分以`...`代替
- `.nowrap-2` 文字最多显示2行，超出部分以`...`代替
- `.nowrap-3` 文字最多显示3行，超出部分以`...`代替
- 
- `.border-t` 向元素添加顶边框
- `.border-r` 向元素添加右边框
- `.border-b` 向元素添加底边框
- `.border-l` 向元素添加左边框
- 
- `.mg-t-0px ... mg-t-30px` 向元素添加对于量的margin-top值
- `.mg-r-0px ... mg-r-30px` 向元素添加对于量的margin-right值
- `.mg-b-0px ... mg-b-30px` 向元素添加对于量的margin-bottom值
- `.mg-l-0px ... mg-l-30px` 向元素添加对于量的margin-left值
- `.mg-lr-0px ... mg-lr-30px` 向元素添加对于量的margin-left值和margin-right值
- `.mg-tb-0px ... mg-tb-30px` 向元素添加对于量的margin-top值和margin-bottom值


### 4.动画
向元素添加`.animate`和`.fade-in`后，元素将执行一次淡入动画。

当然这里有多种动画类型可选`.fade-in-down,.fade-in-down-big,.fade-in-left,.fade-in-left-big,.fade-in-right,.fade-in-right-big,.fade-in-up,.fade-in-up-big,.shake`

开源的[animate.css](https://github.com/daneden/animate.css)有更多不错的效果，可以去看看。

### 5.文字
有6种大小的字体可直接使用，他们分别是：
`.font-size-h1,.font-size-h2,.font-size-h3,.font-size-h4,.font-size-h5,.font-size-h6`。 对应的是h1到h6段落的文字大小。 （通常基准文字大小与`.font-size-h5`相同的。）

另外还有文本颜色的快捷样式：
- `.color-red` 红
- `.color-green` 绿
- `.color-yellow` 黄
- `.color-blue` 蓝
- `.color-pink` 粉
- `.color-white` 白
- `.color-black` 黑
- `.color-333` 文本颜色：#333
- `.color-666` 文本颜色：#666
- `.color-999` 文本颜色：#999