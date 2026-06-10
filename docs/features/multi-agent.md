# 多代理统一界面

Peak Code 支持多种 AI 代理，一个窗口管理所有编程工作流。

---

## 支持的代理

| 代理 | 提供商 | 说明 |
|------|--------|------|
| Claude Code | Anthropic | 代码理解能力强，适合复杂重构 |
| Codex | OpenAI | 通用编程，OpenAI 生态 |
| Gemini | Google | 长上下文窗口，适合大型项目 |
| Kilo Code | 开源 | 可自定义和扩展 |
| OpenCode | 开源 | 可自定义和扩展 |

## 切换代理

1. 在会话列表中，点击你想使用的代理
2. 选择对应的模型
3. 开始对话

每个代理可以有独立的会话历史，互不干扰。

## 同时使用多个代理

- 用 Codex 处理日常编码
- 用 Claude Code 进行代码审查
- 用 Gemini 分析大型代码库

每个代理的会话是独立的，切换代理不会影响其他会话的上下文。详见 [Provider 配置](../config/provider-setup)。