# 日薪计算器 Chrome 插件

一个简单而实用的 Chrome 扩展程序，帮助你实时查看当天的工资收入情况。

## 功能特点

- 💰 实时计算当日已赚工资
- ⏰ 自定义工作时间
- 📅 可调整每月工作天数
- 🔒 支持隐藏金额显示
- 📊 直观的进度条展示
- 🎨 简洁美观的界面设计

## 安装方法

### 手动安装

1. 下载此仓库的 ZIP 文件或克隆仓库
```bash
git clone https://github.com/你的用户名/money_chrome.git


## 使用说明
1. 首次使用请点击设置图标进行基本配置：
   
   - 设置月工资
   - 设置每月工作天数（默认22天）
   - 设置上下班时间
   - 选择是否默认隐藏金额
2. 日常使用：
   
   - 点击浏览器工具栏的插件图标即可查看实时工资情况
   - 可随时点击显示/隐藏按钮切换金额显示状态
   - 进度条直观显示当天工作进度
## 技术栈
- HTML5
- CSS3
- JavaScript
- Chrome Extension API
## 开发说明
项目结构：

```plaintext
money_chrome/
├── css/
│   └── style.css
├── js/
│   ├── options.js
│   └── popup.js
├── images/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── options.html
├── popup.html
└── README.md
 ```

## 贡献指南
欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 隐私说明
- 本插件不会收集任何用户数据
- 所有配置信息仅存储在用户本地
- 无需任何网络请求
## 开源协议
MIT License

## 更新日志
### v1.0.0
- 初始版本发布
- 基础工资计算功能
- 可自定义工作时间
- 支持显示/隐藏金额
