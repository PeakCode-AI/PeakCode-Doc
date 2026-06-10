# 从源码构建

如果你是开发者，想参与 Peak Code 的开发或自定义构建，可以从源码构建。

## 前置条件

| 工具 | 版本要求 |
|------|----------|
| [Bun](https://bun.sh/) | 最新版 |
| [Node.js](https://nodejs.org/) | 24+ |
| [Git](https://git-scm.com/) | 2.30+ |
| AI 代理 CLI | Codex CLI 或 Claude Code |

## 克隆并安装

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
```

## 开发模式

```bash
# 完整开发环境（Web UI + 服务器）
bun run dev

# 仅服务器
bun run dev:server

# 仅 Web UI
bun run dev:web

# 桌面应用
bun run dev:desktop
```

## 项目结构

```text
PeakCode/
├── apps/
│   ├── desktop/          # Electron 桌面应用
│   ├── server/           # Node.js 后端服务器
│   └── web/              # Web 前端
├── packages/
│   ├── shared/           # 前后端共享代码
│   └── ui/               # UI 组件库
├── scripts/              # 构建和工具脚本
└── assets/               # 静态资源
```

## 构建与打包

### Web 版

```bash
bun run build
bun run preview    # 预览构建结果
```

### 桌面版

```bash
bun run dist:desktop:dmg     # macOS
bun run dist:desktop:linux   # Linux
bun run dist:desktop:win     # Windows
```

## 代码质量

```bash
bun run test        # Vitest 测试套件
bun run lint        # oxlint 代码检查
bun run fmt         # oxfmt 格式化
bun run typecheck   # TypeScript 类型检查
```

## 隔离开发

与现有 Peak Code 实例并行运行，避免端口冲突：

```bash
PEAKCODE_PORT_OFFSET=3158 PEAKCODE_NO_BROWSER=1 \
  bun run dev -- --home-dir ./.peakcode-dev --port 58090
```
