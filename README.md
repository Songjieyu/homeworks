
[![](https://travis-ci.org/rugao-web-fullstack/homeworks.svg?branch=master)](https://travis-ci.org/rugao-web-fullstack/homeworks)
---

# 作业

1. 2017-11-14 （熟悉node.js模块化机制）    
a. Fibonacci 数组实现通过node.js模块输出   
b. 汉诺塔移动信息通过node.js以数组形式输出

2. 2017-11-15 （熟悉网络服务器模型）  
a. 完成http, tcp, udp服务与客户端(udp)代码  
b. 添加tcp服务的控制功能.   1) 发送指令让服务器关掉远程连接  2) 发送指令让服务器关掉  

3. 2017-11-16 (熟悉事件模型)  
a. 在TCP基础上实现用户注册功能  
b. 在TCP基础上实现用户注册成功的通知（进行广播）   

4. 2017-11-17 (模拟邮件系统）   
a. 简单的邮件交流系统
要求: 1) 有一个用户的注册地址 2) 可以识别用户（可以考虑登录） 3) 写正文 4) 可以阅读（包括历史）5) 提醒新邮件

5. 2017-11-21   
a. 将uint32, int32(-1, 1), uint8, int8(-1, 1), float, double，放入文件，再读取出来  
b. 目录的递归读取    
c. 将2017-11-17的邮件系统的用户和邮件通过文件存储   
d. 计算200位以上π存入文件，并且可以读出  

6. 2017-11-27  
a. 使用cookie实现session机制（可能参考示例代码完成）     
b. 不使用cookie实现session机制

7. 2017-11-29  
a. 使用express改造邮件系统   
b. 今天的代码提交一下。  

8. 2017-11-30   
a. 设计邮箱数据，并以mysql导出提交

9. 2017-12-05  
a. 设计WEB页面的URL与Web API（基于VIG API规范设计），并提交  
b. 根据VIG API规范来编写相关的接口  

---
### 模块化要求
1. 低耦合
2. 高内聚
3. 避免直接打印，通过条件来开启打印信息
4. 逻辑清晰正确
5. 高扇入，低扇出

---
### 代码提交要求
1. 一天的作业，只通过一个PR完成提交
2. 多天的作业按天分开提交
3. 不包含配置信息的文件，包括.idea, .project等文件
4. 不包含node_modules这样的安装包文件
---
