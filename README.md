# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 提交规范

按照规范来提交代码可以大大增加提交时的可读性

提交规范的语法为 git commit -m "feat: 你的内容" 可以根据不同的情况来提交。

- feat: 新功能（feature）
- fix: 修补 bug
- docs: 文档（documentation）
- style: 格式（不影响代码运行的变动）
- refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- chore: 构建过程或辅助工具的变动
- revert: 撤销，版本回退
- perf: 性能优化
- test：测试
- improvement: 改进
- build: 打包
- ci: 持续集成

### 解决 commit 无法检测问题

```
npm run prepare
或
chmod 777 .husky/*
```
