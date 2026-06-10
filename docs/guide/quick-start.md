# 快速开始

这一页帮你用最快的方式把 Peak Code 跑起来。

## 环境要求

| 工具 | 要求 | 用途 |
| --- | --- | --- |
| 操作系统 | macOS / Windows 10+ / Linux | 运行桌面应用 |
| AI 代理 CLI | Claude Code、Codex CLI 或其他已支持的代理 | AI 代码生成 |
| Git | 2.30+ | 版本控制集成 |
| 浏览器 | Chrome / Edge / Firefox | Web 版使用 |

::: tip 提示
如果你只想先体验一下，下载桌面应用是最简单的方式。
:::

## 方式一：下载桌面应用（推荐）

前往 [Releases 页面](https://github.com/PeakCode-AI/PeakCode/releases) 下载：

| 平台 | 格式 | 说明 |
| --- | --- | --- |
| macOS | `.dmg` | 拖入 Applications 即可 |
| Windows | `.exe` | 运行安装向导 |
| Linux | `.AppImage` | 添加执行权限后双击运行 |

安装完成后启动 Peak Code，选择一个代理，新建会话，直接开始对话。

## 方式二：从源码运行

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
bun run dev
```

::: info 需要安装
从源码运行需要先安装 [Bun](https://bun.sh/) 运行时。
:::

## 方式三：Web 版

如果你已经部署了 Web 版，直接用浏览器访问即可。部署方式见 [安装与部署](./installation)。

## 第一次使用

### 选择代理

启动 Peak Code 后，在界面中选择要使用的 AI 代理：

| 代理 | 提供商 | 说明 |
| --- | --- | --- |
| Codex | OpenAI | 通用编程代理 |
| Claude Code | Anthropic | 代码理解能力强 |
| Gemini | Google | 长上下文窗口 |
| Kilo Code | 开源 | 可自定义扩展 |
| OpenCode | 开源 | 可自定义扩展 |

### 开始对话

1. 点击 **新建会话** 按钮
2. 选择一个代理和模型
3. 在输入框中描述你想要完成的任务
4. AI 代理会帮你编写代码、执行命令、管理文件

::: warning 前置条件
使用某个代理前，需要先安装对应的 CLI 工具并配置好 API Key。详见 [Provider 配置](../config/provider-setup)。
:::

## 下一步

- [安装与部署](./installation) — 详细的安装步骤和部署方案
- [多代理支持](../features/multi-agent) — 了解如何配置和使用不同的 AI 代理
- [Provider 配置](../config/provider-setup) — 配置 API Key 和模型
- [常见问题](../faq/) — 遇到问题？先来这里看看