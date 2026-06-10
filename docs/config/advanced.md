# 高级配置

本页介绍 Peak Code 的高级配置选项。

## 环境变量

Peak Code 支持通过环境变量进行配置：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `PEAKCODE_PORT_OFFSET` | 端口偏移量，用于隔离开发 | `0` |
| `PEAKCODE_NO_BROWSER` | 启动时不自动打开浏览器 | `0` |
| `PEAKCODE_AUTH_TOKEN` | 认证 Token | 自动生成 |

## 隔离开发

如果你想同时运行多个 Peak Code 实例，避免端口冲突：

```bash
# Windows
set PEAKCODE_PORT_OFFSET=3158
set PEAKCODE_NO_BROWSER=1
bun run dev -- --home-dir ./.peakcode-dev --port 58090

# macOS / Linux
PEAKCODE_PORT_OFFSET=3158 PEAKCODE_NO_BROWSER=1 \
  bun run dev -- --home-dir ./.peakcode-dev --port 58090
```

## 自定义模型

在 PeakCode 设置中，你可以添加自定义模型：

1. 打开设置 → Codex 配置
2. 在 `customModels` 数组中添加模型名
3. 重启 PeakCode

示例：

```json
"codex": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": [
    "deepseek-chat",
    "deepseek-reasoner",
    "moonshot-v1-8k"
  ],
  "homePath": ""
}
```

## 家目录配置

PeakCode 默认使用 `~/.peakcode/` 作为家目录。你可以通过 `homePath` 自定义：

```json
"codex": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": [],
  "homePath": "/custom/path/to/peakcode"
}
```

## 架构概览

PeakCode 采用分层客户端-服务器架构：

```
浏览器 / 桌面 (React + Vite + Electron)
        │ WebSocket
        ▼
   Node.js 服务器
        │ JSON-RPC over stdio
        ▼
   AI 代理运行时 (codex app-server)
```

| 层 | 关键组件 |
|----|----------|
| 展示层 | React UI、Zustand 状态管理、主题系统 |
| 应用层 | Native API、事件处理器、WebSocket 传输 |
| 领域层 | 编排引擎、领域事件、状态投影 |
| 基础设施层 | 提供商服务、Git 服务、终端服务 |
