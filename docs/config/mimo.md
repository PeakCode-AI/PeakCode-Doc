# MiMo 模型配置指南（Windows）

本指南介绍如何在 Peak Code 中配置小米 MiMo 模型，分别通过 Codex Agent 和 Claude Agent 使用。

## 前置条件

- Windows 10/11 系统
- 已安装 Node.js（v18 或更高版本）
- 已安装 PeakCode 桌面版
- 已安装 Codex CLI（`npm install -g @openai/codex`）
- 已注册 MiMo 账号，获取 API Key

---

## 方式一：通过 Codex Agent 使用 MiMo

### 第一步：配置 Codex CLI

打开终端，编辑配置文件：

```powershell
notepad %USERPROFILE%\.codex\config.toml
```

写入以下内容：

```toml
model_provider = "custom"
model = "mimo-v2.5"

[model_providers.custom]
name = "mimo"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://token-plan-cn.xiaomimimo.com/v1"
```

保存并关闭。

### 第二步：配置 API Key

```powershell
notepad %USERPROFILE%\.codex\auth.json
```

写入以下内容（把 你的API Key 替换成真实 Key）：

```json
{
  "OPENAI_API_KEY": "你的API Key"
}
```

保存并关闭。

### 第三步：配置 PeakCode 添加模型

```powershell
notepad %USERPROFILE%\.peakcode\userdata\settings.json
```

找到 codex 部分，修改为：

```json
"codex": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": ["mimo-v2.5"],
  "homePath": ""
}
```

保存并关闭。

### 第四步：重启并测试

1. **完全退出** PeakCode（右键系统托盘图标 → 退出）
2. 重新打开 PeakCode
3. 新建一个会话，选择 **Codex Agent**
4. 在模型选择栏中，选择 `mimo-v2.5`
5. 发送消息测试，例如：「你好，请介绍一下自己」

如果能正常回复，说明配置成功。

---

## 方式二：通过 Claude Agent 使用 MiMo

### 第一步：配置 Claude Agent 环境变量

MiMo 官方提供了兼容 Anthropic 接口协议的端点，所以 Claude Agent 可以直接调用。

编辑配置文件：

```powershell
notepad %USERPROFILE%\.claude\settings.json
```

写入以下内容（把 你的API Key 替换成真实 Key）：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://token-plan-cn.xiaomimimo.com/anthropic",
    "ANTHROPIC_API_KEY": "你的API Key"
  }
}
```

保存并关闭。

### 第二步：配置 PeakCode Claude Agent

```powershell
notepad %USERPROFILE%\.peakcode\userdata\settings.json
```

找到 claudeAgent 部分，修改为：

```json
"claudeAgent": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": ["mimo-v2.5"],
  "launchArgs": ""
}
```

> 这里的 binaryPath 指向 codex 是因为 PeakCode 内置了 claude-agent-sdk，实际调用链路是：
> PeakCode → claude-agent-sdk → mimo Anthropic 端点 → mimo-v2.5 模型

保存并关闭。

### 第三步：重启并测试

1. **完全退出** PeakCode（右键系统托盘图标 → 退出）
2. 重新打开 PeakCode
3. 新建一个会话，选择 **Claude Agent**
4. 在模型选择栏中，选择 `mimo-v2.5`
5. 发送消息测试

> 注意：mimo 的 Anthropic 端点只认 `mimo-v2.5` 这个模型名，不认 Claude 模型名（如 claude-sonnet-4）。选择模型时一定要选 `mimo-v2.5`。

如果能正常回复，说明配置成功。

---

## 配置总结

| 组件 | Codex Agent | Claude Agent |
|------|-------------|--------------|
| API 端点 | https://token-plan-cn.xiaomimimo.com/v1 | https://token-plan-cn.xiaomimimo.com/anthropic |
| 模型名 | mimo-v2.5 | mimo-v2.5 |
| 认证方式 | OPENAI_API_KEY | ANTHROPIC_API_KEY (x-api-key header) |
| 配置文件 | ~/.codex/config.toml + auth.json | ~/.claude/settings.json |

## 配置文件位置汇总

| 文件 | 路径 | 用途 |
|------|------|------|
| config.toml | %USERPROFILE%\.codex\config.toml | Codex 模型和 provider 配置 |
| auth.json | %USERPROFILE%\.codex\auth.json | Codex API Key 存储 |
| settings.json | %USERPROFILE%\.peakcode\userdata\settings.json | PeakCode 界面配置 |
| settings.json | %USERPROFILE%\.claude\settings.json | Claude Agent 环境变量 |

---

## 常见问题

### Q: Codex Agent 报错 "model not found"？

A: 检查 `config.toml` 中的 `model` 是否设置为 `mimo-v2.5`，`base_url` 是否正确指向 `https://token-plan-cn.xiaomimimo.com/v1`。

### Q: Claude Agent 报错 400 "Param Incorrect"？

A: Claude Agent 可能发送了 Claude 模型名（如 claude-sonnet-4）。确保在 PeakCode 模型选择栏中选择的是 `mimo-v2.5`，而不是其他模型名。mimo 的 Anthropic 端点只认 `mimo-v2.5`。

### Q: Claude Agent 报错 401 Unauthorized？

A: 检查 `~/.claude/settings.json` 中的 `ANTHROPIC_API_KEY` 是否正确。mimo 使用 Anthropic 风格的 header 认证（x-api-key）。

### Q: Codex Agent 和 Claude Agent 能同时使用吗？

A: 可以。两个 Agent 使用不同的配置文件，互不影响。你可以在 PeakCode 中自由切换。

### Q: 想同时用 DeepSeek 和 MiMo 怎么配？

A: 在 `customModels` 数组中加上多个模型名即可：

```json
"codex": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": ["mimo-v2.5", "deepseek-chat", "deepseek-reasoner"],
  "homePath": ""
}
```

切换模型时在 PeakCode 底部的模型选择栏中选择即可。注意切换模型时也需要同步修改 `config.toml` 中的 `base_url` 和 `model`，因为不同模型的 API 地址不同。