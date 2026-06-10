# 从源码构建

## 前置条件

- [Bun](https://bun.sh/) 最新版
- [Node.js](https://nodejs.org/) 24+
- [Git](https://git-scm.com/) 2.30+
- AI 代理 CLI（Codex CLI 或 Claude Code）

## 克隆并安装

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
```

## 开发模式

```bash
bun run dev          # 完整开发环境
bun run dev:server   # 仅服务器
bun run dev:web      # 仅 Web UI
bun run dev:desktop  # 桌面应用
```

## 项目结构

```text
PeakCode/
├── apps/
│   ├── desktop/          # Electron 桌面应用
│   ├── server/           # Node.js 后端
│   └── web/              # Web 前端
├── packages/
│   ├── shared/           # 前后端共享代码
│   └── ui/               # UI 组件库
├── scripts/              # 构建脚本
└── assets/               # 静态资源
```

## 构建与打包

```bash
bun run build               # 构建 Web 版
bun run preview             # 预览构建结果
bun run dist:desktop:dmg    # macOS
bun run dist:desktop:linux  # Linux
bun run dist:desktop:win    # Windows
```

> 提交代码前建议跑一遍 `bun run test && bun run lint && bun run typecheck`。