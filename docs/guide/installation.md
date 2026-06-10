# 安装与部署

本页详细介绍 Peak Code 的各种安装方式和部署方案。

---

## 桌面应用安装

### macOS

1. 下载 `.dmg` 文件
2. 双击打开，将 Peak Code 拖入 Applications 文件夹
3. 首次打开时，如果系统提示"无法验证开发者"，前往 **系统设置 → 隐私与安全性**，点击"仍要打开"

### Windows

1. 下载 `.exe` 安装包
2. 双击运行安装向导
3. 按提示完成安装

### Linux

1. 下载 `.AppImage` 文件
2. 添加执行权限：

```bash
chmod +x PeakCode-*.AppImage
```

3. 双击运行，或通过终端启动：

```bash
./PeakCode-*.AppImage
```

::: warning FUSE 依赖
部分 Linux 发行版需要安装 FUSE 库才能运行 AppImage。
如果双击无法运行，请参考 [AppImage 常见问题](https://docs.appimage.org/introduction/first-steps.html)。
:::

---

## Web 版部署

Peak Code 支持自托管 Web 部署，适合团队使用。

### 前置条件

| 工具 | 版本要求 |
| --- | --- |
| Node.js | 24+ 或 Bun |
| Git | 2.30+ |
| AI 代理 CLI | Codex CLI 或 Claude Code |

### 部署步骤

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
bun run build
bun run start
```

构建后的静态文件在 `docs/.vitepress/dist` 目录，可部署到任何静态托管服务。

---

## 从源码构建

### 开发环境

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install

# 完整开发环境（Web UI + 服务器）
bun run dev
```

### 分模块开发

```bash
bun run dev:server    # 仅服务器
bun run dev:web       # 仅 Web UI
bun run dev:desktop   # 桌面应用
```

### 桌面应用打包

```bash
bun run dist:desktop:dmg     # macOS DMG
bun run dist:desktop:linux   # Linux AppImage
bun run dist:desktop:win     # Windows 安装包
```

---

## 隔离开发

与现有 Peak Code 实例并行运行，避免端口冲突：

```bash
# macOS / Linux
PEAKCODE_PORT_OFFSET=3158 PEAKCODE_NO_BROWSER=1 \
  bun run dev -- --home-dir ./.peakcode-dev --port 58090

# Windows
set PEAKCODE_PORT_OFFSET=3158
set PEAKCODE_NO_BROWSER=1
bun run dev -- --home-dir ./.peakcode-dev --port 58090
```

---

## 质量检查

```bash
bun run test        # Vitest 测试套件
bun run lint        # oxlint 代码检查
bun run fmt         # oxfmt 格式化
bun run typecheck   # TypeScript 类型检查
```