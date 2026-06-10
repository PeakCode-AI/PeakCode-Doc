# Provider 配置

本页介绍如何配置各个 AI 代理提供商。

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

### 在 Peak Code 中启用

1. 启动 PeakCode 桌面应用
2. 点击左下角 **⚙️ 设置**
3. 找到 **Claude Agent** 配置区域
4. 确保 `enabled` 为 `true`

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

1. 启动 PeakCode 桌面应用
2. 点击左下角 **⚙️ 设置**
3. 找到 **Codex** 配置区域
4. 确保 `enabled` 为 `true`

---

## 使用第三方模型

如果你想使用 OpenAI 兼容的第三方模型（如 DeepSeek、Moonshot 等），需要额外配置 Codex CLI 的自定义 Provider。

详细步骤请参考：

- [DeepSeek 配置指南](./deepseek)
- [Claude Code 配置](./claude-code)

---

## 配置文件位置汇总

| 文件 | 路径 | 用途 |
|------|------|------|
| config.toml | %USERPROFILE%\.codex\config.toml | Codex 模型和 provider 配置 |
| auth.json | %USERPROFILE%\.codex\auth.json | API Key 存储 |
| settings.json | %USERPROFILE%\.peakcode\userdata\settings.json | PeakCode 界面配置 |
| settings.json | %USERPROFILE%\.claude\settings.json | Claude Code 配置 |