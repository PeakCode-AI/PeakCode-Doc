# 快速开始

本页帮你用最快的方式上手 Peak Code。

---

## 环境要求

- macOS / Windows 10/11 / Linux
- 已安装对应的 AI 代理 CLI（Claude Code、Codex CLI 等）
- Git 2.30 或更高版本

---

## 方式一：下载桌面应用（推荐）

前往 [Releases 页面](https://github.com/PeakCode-AI/PeakCode/releases) 下载对应安装包：

| 平台 | 格式 |
|------|------|
| macOS | .dmg |
| Windows | .exe |
| Linux | .AppImage |

安装完成后启动 Peak Code，选择一个代理，新建会话，直接开始对话。

---

## 方式二：从源码运行

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
bun run dev
```

> 需要先安装 [Bun](https://bun.sh/) 运行时。

---

## 方式三：Web 版

如果你已经部署了 Web 版，直接用浏览器访问即可。部署方式见 [安装与部署](./installation)。

---

## 第一次使用

### 1. 选择代理

启动 Peak Code 后，在界面中选择要使用的 AI 代理：

| 代理 | 提供商 |
|------|--------|
| Codex | OpenAI |
| Claude Code | Anthropic |
| Gemini | Google |
| Kilo Code | 开源 |
| OpenCode | 开源 |

### 2. 创建会话

点击 **新建会话** 按钮，选择一个代理和模型。

### 3. 开始编程

在输入框中描述你想要完成的任务，AI 代理会帮你编写代码、执行命令、管理文件。

> 使用某个代理前，需要先安装对应的 CLI 工具并配置好 API Key。详见 [Provider 配置](../config/provider-setup)。

---

## 下一步

- [安装与部署](./installation) — 详细的安装步骤
- [DeepSeek 配置指南](../config/deepseek) — 使用 DeepSeek 模型
- [常见问题](../faq/) — 遇到问题先来这里看看