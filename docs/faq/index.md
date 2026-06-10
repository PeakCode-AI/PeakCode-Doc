# 常见问题

## 安装问题

### Q: 安装后无法打开 PeakCode？

**macOS**: 前往 系统设置 → 隐私与安全性，点击"仍要打开"。

**Windows**: 确保已安装所有必要的运行时依赖。

**Linux**: 确保已安装 FUSE 库（AppImage 需要）。

### Q: 提示"找不到 codex 命令"？

确保已全局安装 Codex CLI：

```bash
npm install -g @openai/codex
```

安装后重启终端和 PeakCode。

### Q: 提示"找不到 claude 命令"？

确保已全局安装 Claude Code CLI：

```bash
npm install -g @anthropic-ai/claude-code
```

---

## 配置问题

### Q: 模型列表里看不到 DeepSeek？

1. 重启 PeakCode
2. 检查 `~/.codex/config.toml` 格式是否正确
3. 检查 `~/.peakcode/userdata/settings.json` 中 `customModels` 是否包含 DeepSeek 模型名

详见 [DeepSeek 配置指南](../config/deepseek)。

### Q: 报错 "API Error: 401 Unauthorized"？

检查 API Key 配置：

- Codex: 检查 `~/.codex/auth.json` 中的 Key 是否正确
- Claude: 检查 `~/.claude/settings.json` 中的 Key 是否正确

注意不要有多余的空格或引号。

### Q: 报错 "API Error: 404 Not Found"？

检查 `base_url` 配置是否正确：

- DeepSeek: `https://api.deepseek.com/v1`
- OpenAI: `https://api.openai.com/v1`

### Q: 想切换回 OpenAI 模型？

把 `~/.codex/config.toml` 中的 `model_provider` 改回 `"openai"`，然后运行 `codex login` 登录 OpenAI 账号。

---

## 使用问题

### Q: 会话数据在哪里？

会话数据存储在 PeakCode 的家目录中：

| 平台 | 路径 |
| --- | --- |
| Windows | `%USERPROFILE%\.peakcode\` |
| macOS | `~/.peakcode/` |
| Linux | `~/.peakcode/` |

### Q: 如何更新 PeakCode？

- **桌面版**: 从 [Releases](https://github.com/PeakCode-AI/PeakCode/releases) 下载最新版本覆盖安装
- **源码版**: `git pull` 然后 `bun install`

### Q: 代码安全吗？会上传到云端吗？

PeakCode 的核心设计理念是**代码保留在本地**。你的代码不会上传到 PeakCode 的服务器。

AI 代理调用 API 时，代码片段会发送到对应的 AI 提供商（如 OpenAI、Anthropic），但 PeakCode 本身不存储你的代码。

---

## 社区与支持

遇到问题或有建议？

- [GitHub Issues](https://github.com/PeakCode-AI/PeakCode/issues) — 报告 Bug 和请求功能
- [Discord](https://discord.gg/jn4EGJjrvv) — 社区讨论