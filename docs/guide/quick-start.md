# 快速开始

本页帮你用最快的方式上手 Peak Code。

## 环境要求

| 项目 | 要求 |
|------|------|
| 操作系统 | macOS、Windows 10/11 或 Linux |
| AI 代理 CLI | [Claude Code](https://docs.anthropic.com/en/docs/claude-code)、[Codex CLI](https://github.com/openai/codex) 或其他已支持的代理 |
| Git | 2.30 或更高版本 |
| 浏览器 | 现代浏览器（Web 版使用） |

## 方式一：下载桌面应用（推荐）

1. 前往 [Releases 页面](https://github.com/PeakCode-AI/PeakCode/releases)
2. 根据你的系统下载对应安装包：

| 平台 | 格式 |
|------|------|
| macOS | .dmg |
| Windows | .exe |
| Linux | .AppImage |

3. 安装并启动 Peak Code

## 方式二：Web 版

如果你已经部署了 Web 版，直接用浏览器访问即可。

## 方式三：从源码运行

`ash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
bun run dev
`

> **提示：** 需要安装 [Bun](https://bun.sh/) 运行时。

## 第一次使用

### 1. 选择代理

启动 Peak Code 后，你可以在界面中选择要使用的 AI 代理：

- **Codex** — OpenAI 的编程代理
- **Claude Code** — Anthropic 的编程代理
- **Gemini** — Google 的编程代理
- **Kilo Code** — 开源编程代理
- **OpenCode** — 开源编程代理

### 2. 创建会话

点击 **新建会话** 按钮，选择一个代理，开始对话。

### 3. 开始编程

直接在输入框中描述你想要完成的任务，AI 代理会帮你编写代码、执行命令、管理文件。

## 下一步

- [安装与部署](./installation) — 详细的安装步骤
- [多代理支持](../features/multi-agent) — 了解如何配置和使用不同的 AI 代理
- [Provider 配置](../config/provider-setup) — 配置 API Key 和模型
