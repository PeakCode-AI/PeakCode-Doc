# PeakCode + DeepSeek 配置指南（Windows）

## 前置条件

- Windows 10/11 系统
- 已安装 Node.js（v18 或更高版本）
- 已安装 PeakCode 桌面版
- 已注册 DeepSeek 账号（https://platform.deepseek.com）

---

## 第一步：安装 Codex CLI

打开终端（PowerShell），运行：

```powershell
npm install -g @openai/codex
```

安装完成后验证：

```powershell
codex --version
```

---

## 第二步：获取 DeepSeek API Key

1. 访问 https://platform.deepseek.com
2. 注册并登录账号
3. 进入「API Keys」页面
4. 点击「创建 API Key」
5. 复制生成的 Key（格式类似 sk-xxxxxxxxxxxxxxxx）

> 注意：Key 只显示一次，务必保存好。

---

## 第三步：配置 Codex

### 3.1 创建配置文件

打开终端，编辑配置文件：

```powershell
notepad ~/.codex/config.toml
```

如果文件不存在，直接新建。写入以下内容：

```toml
model_provider = "custom"
model = "deepseek-chat"

[model_providers.custom]
name = "deepseek"
wire_api = "responses"
requires_openai_auth = true
base_url = "https://api.deepseek.com/v1"
```

保存并关闭。

### 3.2 配置 API Key

```powershell
notepad ~/.codex/auth.json
```

写入以下内容（把 你的API Key 替换成真实 Key）：

```json
{
  "OPENAI_API_KEY": "你的API Key"
}
```

保存并关闭。

---

## 第四步：配置 PeakCode

### 4.1 打开 PeakCode 设置

1. 启动 PeakCode 桌面应用
2. 点击左下角 **⚙️ 设置**
3. 找到 **Codex** 配置区域

### 4.2 添加 DeepSeek 模型

在 PeakCode 的设置界面中，找到 **Custom models** 区域，添加以下模型：

- deepseek-chat（DeepSeek V3，通用对话模型）
- deepseek-reasoner（DeepSeek R1，推理模型）

如果 PeakCode 设置界面不方便操作，可以直接编辑配置文件：

```powershell
notepad ~/.peakcode/userdata/settings.json
```

找到 codex 部分，修改为：

```json
"codex": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": ["deepseek-chat", "deepseek-reasoner"],
  "homePath": ""
}
```

保存并关闭。

---

## 第五步：重启并测试

1. **完全退出** PeakCode（右键系统托盘图标 → 退出）
2. 重新打开 PeakCode
3. 新建一个会话
4. 在底部模型选择栏中，选择 deepseek-chat
5. 发送消息测试，例如：「你好，请介绍一下自己」

如果能正常回复，说明配置成功。

---

## 可选：配置 Claude Agent 也使用 DeepSeek

如果你想在 PeakCode 里同时使用 Claude Agent 和 DeepSeek，需要额外配置。

### 安装 Claude Code CLI

```powershell
npm install -g @anthropic-ai/claude-code
```

### 配置 Claude 使用 DeepSeek

编辑 ~/.claude/settings.json：

```powershell
notepad ~/.claude/settings.json
```

写入：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/v1",
    "ANTHROPIC_API_KEY": "你的API Key"
  }
}
```

> 注意：DeepSeek 官方没有提供原生 Anthropic 协议端点。这里使用 OpenAI 兼容端点作为 ANTHROPIC_BASE_URL，
> Claude Agent 用 DeepSeek 可能会有功能限制或兼容性问题。
> 建议日常使用 Codex Agent + DeepSeek 的组合。如需通过 Claude Agent 使用第三方模型，推荐使用 MiMo（提供了原生 Anthropic 兼容端点）。

### 更新 PeakCode Claude Agent 配置

```powershell
notepad ~/.peakcode/userdata/settings.json
```

找到 claudeAgent 部分：

```json
"claudeAgent": {
  "enabled": true,
  "binaryPath": "codex",
  "customModels": ["deepseek-chat"],
  "launchArgs": ""
}
```

---

## 常见问题

### Q: 模型列表里看不到 DeepSeek？

A: 重启 PeakCode 后，确保选择了正确的 provider。如果还是看不到，检查 config.toml 和 settings.json 的格式是否正确。

### Q: 报错 "API Error: 401 Unauthorized"？

A: 检查 auth.json 中的 API Key 是否正确，有没有多余的空格或引号。

### Q: 报错 "API Error: 404 Not Found"？

A: 检查 config.toml 中的 base_url 是否正确。DeepSeek 的地址是 https://api.deepseek.com/v1。

### Q: 想切换回 OpenAI 模型？

A: 把 config.toml 中的 model_provider 改回 "openai"，然后运行 codex login 登录 OpenAI 账号。

---

## 可用模型说明

| 模型名 | 说明 | 特点 |
|--------|------|------|
| deepseek-chat | DeepSeek V3 | 通用对话，性价比高 |
| deepseek-reasoner | DeepSeek R1 | 深度推理，适合复杂问题 |

---

## 配置文件位置汇总

| 文件 | 路径 | 用途 |
|------|------|------|
| config.toml | %USERPROFILE%\.codex\config.toml | Codex 模型和 provider 配置 |
| auth.json | %USERPROFILE%\.codex\auth.json | API Key 存储 |
| settings.json | %USERPROFILE%\.peakcode\userdata\settings.json | PeakCode 界面配置 |

---

如有问题，可以在 PeakCode 社群里提问。