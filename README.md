# Peak Code 文档

[![Deploy Status](https://github.com/PeakCode-AI/PeakCode-Doc/actions/workflows/deploy.yml/badge.svg)](https://github.com/PeakCode-AI/PeakCode-Doc/actions/workflows/deploy.yml)

> Peak Code 用户文档站点，基于 [VitePress](https://vitepress.dev/) 构建。

**在线文档：** [https://peakcode-ai.github.io/PeakCode-Doc/](https://peakcode-ai.github.io/PeakCode-Doc/)

## 文档内容

- **指南** — 快速开始、安装部署、从源码构建
- **功能介绍** — 多代理支持、流式输出、Git 集成、会话持久化、终端与编辑器
- **配置** — Provider 配置、DeepSeek 配置、MiMo 配置、Claude Code 配置
- **FAQ** — 常见问题

## 本地开发

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

构建后的静态文件在 `docs/.vitepress/dist` 目录。

## 部署

push 到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## License

MIT