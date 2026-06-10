# Provider 配置

Peak Code 支持多种 AI 代理提供商，本页介绍如何配置它们。

## 概述

每个 AI 代理提供商需要单独配置：

1. 安装对应的 CLI 工具
2. 配置 API Key
3. 在 Peak Code 中启用

::: tip 配置文件位置
| 平台 | 配置目录 |
| --- | --- |
| macOS | `~/.peakcode/` |
| Windows | `%USERPROFILE%\.peakcode\` |
| Linux | `~/.peakcode/` |
:::

---

## Claude Code

### 安装

```bash
npm install -g @anthropic-ai/claude-code
```

### 配置 API Key

```bash
claude login
```

按照提示完成登录，API Key 会自动保存。

### 在 Peak Code 中启用

1. 打开 Peak Code **设置**
2. 找到 **Claude Agent** 配置区域
3. 确保 `enabled` 为 `true`
4. 设置 `binaryPath` 为 `claude`（或完整路径）

---

## Codex (OpenAI)

### 安装

```bash
npm install -g @openai/codex
```

### 配置 API Key

```bash
codex login
```

### 在 Peak Code 中启用

1. 打开 Peak Code **设置**
2. 找到 **Codex** 配置区域
3. 确保 `enabled` 为 `true`
4. 设置 `binaryPath` 为 `codex`

---

## Gemini

### 安装

参考 [Gemini CLI 官方文档](https://github.com/google-gemini/gemini-cli)。

### 在 Peak Code 中启用

1. 打开 Peak Code **设置**
2. 找到 **Gemini** 配置区域
3. 启用并配置路径

---

## 使用第三方模型

如果你想使用 OpenAI 兼容的第三方模型（如 DeepSeek、Moonshot 等），需要额外配置 Codex CLI 的自定义 Provider。

详细步骤请参考：

- [DeepSeek 配置指南](./deepseek) — 使用 DeepSeek V3/R1
- [Claude Code 配置](./claude-code) — 让 Claude Code 使用其他模型
- [高级配置](./advanced) — 更多自定义选项

---

## 配置文件汇总

| 文件 | 路径 | 用途 |
| --- | --- | --- |
| `config.toml` | `~/.codex/config.toml` | Codex 模型和 provider 配置 |
| `auth.json` | `~/.codex/auth.json` | Codex API Key 存储 |
| `settings.json` | `~/.peakcode/userdata/settings.json` | PeakCode 界面配置 |
| `settings.json` | `~/.claude/settings.json` | Claude Code 配置 |