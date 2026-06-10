# Claude Code 配置

本页介绍如何在 Peak Code 中配置 Claude Code 代理。

## 前置条件

| 项目 | 要求 |
| --- | --- |
| Node.js | v18+ |
| Anthropic API Key | 有效的 API Key |

## 安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

## 配置 API Key

### 方式一：命令行登录（推荐）

```bash
claude login
```

按照提示完成登录，API Key 会自动保存。

### 方式二：手动配置

编辑配置文件：

```bash
# Windows
notepad %USERPROFILE%\.claude\settings.json

# macOS / Linux
nano ~/.claude/settings.json
```

写入：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "你的API Key"
  }
}
```

## 在 PeakCode 中启用

1. 打开 PeakCode **设置**
2. 找到 **Claude Agent** 配置区域
3. 确保 `enabled` 为 `true`
4. 设置 `binaryPath` 为 `claude`

配置示例：

```json
"claudeAgent": {
  "enabled": true,
  "binaryPath": "claude",
  "customModels": [],
  "launchArgs": ""
}
```

## 让 Claude Code 使用其他模型

如果你想让 Claude Code 使用非 Anthropic 模型（如 DeepSeek），可以修改环境变量：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/v1",
    "ANTHROPIC_API_KEY": "你的API Key"
  }
}
```

::: warning
非 Anthropic 模型可能不完全兼容 Claude Code 的所有功能。
详细配置请参考 [DeepSeek 配置指南](./deepseek)。
:::