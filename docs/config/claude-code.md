# Claude Code 配置

## 前置条件

- 已安装 Node.js（v18+）
- 有效的 Anthropic API Key

---

## 安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

## 配置 API Key

```bash
claude login
```

按照提示完成登录，API Key 会自动保存。

也可以手动配置，编辑 `~/.claude/settings.json`：

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "你的API Key"
  }
}
```

## 在 PeakCode 中启用

1. 启动 PeakCode 桌面应用
2. 点击左下角 **⚙️ 设置**
3. 找到 **Claude Agent** 配置区域
4. 确保 `enabled` 为 `true`

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

> 非 Anthropic 模型可能不完全兼容 Claude Code 的所有功能。
> 详细配置请参考 [DeepSeek 配置指南](./deepseek)。