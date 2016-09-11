/**
 * Created by Thinkpad on 2016/7/11.
 */
//这个是头部的各个框架数据
myApp.service("headernav",function(){
    return [
        {
            "name":"在线测试",
            "class":"onlinetext"
        },
        {
            "name":"其他内容",
            "class":"other"
        },
        {
            "name":"Nodejs",
            "class":"node"
        },
        {
            "name":"Angular1.0",
            "class":"angular"
        },
        {
            "name":"Javascript权威指南",
            "class":"js"
        },
        {
            "name":"Css权威指南",
            "class":"css"
        }
    ];
});

//这个是css下面的各个章节
myApp.factory("cssdirectory",function(){
    return [
        {
            "name":"第一章 css和文档",
            "directory":[
                {
                    "thirdlevel":["web的衰落","css做救星","元素","结合css和xhtml"]
                }
            ]
        },
        {
            "name":"第二章 选择器",
            "directory":[
                {
                    "thirdlevel":["基本规则","分组","类选择器和ID选择器","属性选择器","使用文档结构","伪类和伪元素"]
                }
            ]
        },
        {
            "name":"第三章 结构和层叠",
            "directory":[
                {
                    "thirdlevel":["特殊性","继承","层叠"]
                }
            ]
        },
        {
            "name":"第四章 值和单位",
            "directory":[
                {
                    "thirdlevel":["数字","百分比","颜色","长度单位","url","css2单位"]
                }
            ]
        },
        {
            "name":"第五章 字体",
            "directory":[
                {
                    "thirdlevel":["字体系列","字体加粗","字体大小","风格和变形","拉伸和调整字体","font属性","字体匹配"]
                }
            ]
        },
        {
            "name":"第六章 文本属性",
            "directory":[
                {
                    "thirdlevel":["缩进和水平对齐","垂直对齐","字间距和字母间距","文本转换","文本修饰","文本阴影"]
                }
            ]
        },
        {
            "name":"第七章 基本视觉格式化",
            "directory":[
                {
                    "thirdlevel":["基本框","块级元素","行内元素","改变元素显示"]
                }
            ]
        },
        {
            "name":"第八章 内边距、边框和外边距",
            "directory":[
                {
                    "thirdlevel":["基本元素框","外边距","边框","内边距"]
                }
            ]
        },
        {
            "name":"第九章 颜色和背景",
            "directory":[
                {
                    "thirdlevel":["颜色","前景色","背景"]
                }
            ]
        },
        {
            "name":"第十章 浮动和定位",
            "directory":[
                {
                    "thirdlevel":["浮动","定位"]
                }
            ]
        },
        {
            "name":"第十一章 表布局",
            "directory":[
                {
                    "thirdlevel":["表格式化","表单元格边框","表大小"]
                }
            ]
        },
        {
            "name":"第十二章 列表和生成内容",
            "directory":[
                {
                    "thirdlevel":["列表","生成内容"]
                }
            ]
        },
        {
            "name":"第十四章 非屏幕媒体",
            "directory":[
                {
                    "thirdlevel":["设计特定于媒体的样式表","分页媒体","声音样式"]
                }
            ]
        }
    ]
});

//这个是javascript下面的各个章节
myApp.factory("javascriptdirectory",function(){
    return [
        {
            "name":"第一部分",
            "directory":[
                {
                    "secondname":"第一章 javascript语言核心",
                    "thirdlevel":["1.1 javascript语言核心","1.2 客户端javascript"]
                },
                {
                    "secondname":"第二章 词法结构",
                    "thirdlevel":["2.1 字符集","2.2 注释","2.3 直接量","2.4 标识符和保留字","2.5 可选的分号"]
                },
                {
                    "secondname":"第三章 类型、值和变量",
                    "thirdlevel":["3.1 数字","3.2 文字","3.3 布尔值","3.4 null和undefined","3.5全局变量","3.6 包装对象","3.7 不可变的原始值和可变的对象引用","3.8 类型转换","3.9 变量声明","3.10 变量作用域"]
                },
                {
                    "secondname":"第四章 表达式和运算符",
                    "thirdlevel":["4.1 原始表达式","4.2 对象和数组","4.3 函数定义表达式","4.4 属性访问表达式","4.5 调用表达式","4.6 对象创建表达式","4.7 运算符钙素","4.8 算术表达式","4.9关系表达式","4.10 逻辑表达式","4.11 赋值表达式","4.12表达式计算","4.13其他运算符"]
                },
                {
                    "secondname":"第五章 语句",
                    "thirdlevel":["5.1 表达式语句","5.2 复合语句和空语句","5.3 声明语句","5.4 条件语句","5.5 循环","5.6 跳转","5.7 其他语句类型","5.8 javascript语句小结"]
                },
                {
                    "secondname":"第六章 对象",
                    "thirdlevel":["6.1 创建对象","6.2 属性的查询和设置","6.3 删除属性","6.4 检测属性","6.5 枚举属性","6.6属性getter和setter","6.7 属性的特性","6.8 对象的三个属性","6.9 序列化对象","6.10 对象方法"]
                },
                {
                    "secondname":"第七章 数组",
                    "thirdlevel":["7.1 创建数组","7.2 数组元素的读和写","7.3 稀疏数组","7.4 数组长度","7.5 数组元素的添加和删除","7.6 数组历遍","7.7 多维数组","7.8 数组方法","7.9 ecmascript5中的数组方法","7.10 数组类型","7.11 类数组对象","7.12 作为数组的字符串"]
                },
                {
                    "secondname":"第八章 函数",
                    "thirdlevel":["8.1 函数定义","8.2 函数调用","8.3 函数的实参和形参","8.4 作为值的函数","8.5 作为命名空间的函数","8.6 闭包","8.7 函数属性、方法和构造函数","8.8 函数式编程"]
                },
                {
                    "secondname":"第九章 类和模块",
                    "thirdlevel":["9.1 类和原型","9.2 类和构造函数","9.3 javascript中java式的类继承","9.4 类的扩充","9.5 类和类型","9.6 javascript中的面对对象技术","9.7 子类","9.8 ecmascript 5中的类","9.9 模块"]
                },
                {
                    "secondname":"第十章 正则表达式的模式匹配",
                    "thirdlevel":["10.1 正则表达式的定义","10.2 用于模式匹配的string方法"]
                },
                {
                    "secondname":"第十一章 javascript的子集和扩展",
                    "thirdlevel":["11.1 javascript的子集","11.2 常量和局部变量","11.3 解构赋值","11.4 迭代","11.5 函数简写","11.6 多catch从句","11.7 e4x：ecmascript for xml"]
                },
                {
                    "secondname":"第十二章 服务器端javascript",
                    "thirdlevel":["12.1 用rhino校本化java","12.2 用node实现一步i/o"]
                },
            ],
        },
        {
            "name":"第二部分",
            "directory":[
                {
                    "secondname": "第十三章 web浏览器中的javascript",
                    "thirdlevel":["13.1 客户端javascript","13.2 在html里嵌入javascript","13.3 javascript程序的执行","13.4 兼容性和互用性","13.5 可访问行","13.6 安全性","13.7 客户端框架"]
                },
                {
                    "secondname":"第十四章 window对象",
                    "thirdlevel":["14.1 计时器","14.2 浏览器定位和导航","14.3 浏览历史","14.4 浏览器和屏幕信息","14.5 对话框","14.6 错误处理","14.7 作为window对象属性的文档元素","14.8 多窗口和窗体"]
                },
                {
                    "secondname":"第十五章 脚本化文档",
                    "thirdlevel":["15.1 dom概览","15.2 选取文档元素","15.3 文档结构和遍历","15.4 属性","15.5 元素的内容","15.6 创建、插入和删除节点","15.7 例子：生成目录表","15.8 文档和元素的几何图形和滚动","15.9 html表单","15.10 其他文档特性"]
                },
                {
                    "secondname":"第十六章 脚本化css",
                    "thirdlevel":["16.1 css概述","16.2 重要的css属性","16.3 脚本化内联样式","16.4 查询计算出的样式","16.5 脚本化css类","16.6脚本化样式表"]
                },
                {
                    "secondname":"第十七章 事件处理",
                    "thirdlevel":["17.1 事件类型","17.2 注册事件处理程序","17.3 事件处理程序的调用","17.4 文档加载事件","17.5 鼠标事件","17.6 鼠标滚动事件","17.7 拖放事件","17.8 文本事件","17.9 键盘事件"]
                },
                {
                    "secondname":"第十八章 脚本化http",
                    "thirdlevel":["18.1 使用xmlhttprequest","18.2 借助[script]发送http请求：jsonp","18.3 基于服务器端推送事件的comet技术"]
                },
                {
                    "secondname":"第十九章 jquery类库",
                    "thirdlevel":["19.1 jquery基础","19.2 jquery的getter和setter","19.3 修改文档结构","19.4 使用jquery处理事件","19.5 动画效果","19.6 jquery中的ajax","19.7 工具函数","19.8 jquery选择器和选取方法","19.9 jquery的插件扩展","19.10 jquery ui类库"]
                },
                {
                    "secondname":"第二十章 客户端存储",
                    "thirdlevel":["20.1 localstorage和sessionstorage","20.2 cookie","20.3 利用ieuserdata持久化数据","20.4 应用陈旭存储和离线web应用"]
                },
                {
                    "secondname":"第二十一章 多媒体和图形编程",
                    "thirdlevel":["21.1 脚本化图片","21.2 脚本化音频和视频","21.3 svg:可伸缩的矢量图形","21.4 [canvas]中的图形"]
                },
                {
                    "secondname":"第二十二章 html5api",
                    "thirdlevel":["22.1 地理位置","22.2 历史记录管理","22.3 跨域消息传递","22.4 web worker","22.5 类型化数组和arraybuffer","22.6 blob","22.7 文件系统api","22.8 客户端数据库","22.9 web套接字"]
                }
            ]
        },
        {
            "name":"第三部分",
            "directory":[
                {
                "secondname":"javascript核心参考",
            }
            ]
        },
        {
            "name":"第四部分",
            "directory":[
                {
                    "secondname":"客户端javascript参考",
                }
            ]
        }
    ]
})

//这个是angular下面的各个章节
myApp.factory("angulardirectory",function(){
    return [
        1,2,3,4
    ]
});

//这个是nodejs下面的各个章节
myApp.factory("nodedirectory",function(){
    return [
        1,2,3,4,5
    ]
});

