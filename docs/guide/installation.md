# 安装与部署

本页详细介绍 Peak Code 的安装方式和部署方案。

## 桌面应用安装

### macOS

1. 下载 `.dmg` 文件
2. 双击打开，将 Peak Code 拖入 Applications 文件夹
3. 首次打开时，如果系统提示"无法验证开发者"，请前往 **系统设置 → 隐私与安全性**，点击"仍要打开"

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

> **提示：** 部分 Linux 发行版可能需要安装 FUSE 库。如果双击无法运行，请参考 [AppImage 常见问题](https://docs.appimage.org/introduction/first-steps.html)。

## Web 版部署

Peak Code 支持自托管 Web 部署，适合团队使用。

### 前置条件

- Node.js 24+ 或 Bun
- Git 2.30+
- 已安装的 AI 代理 CLI（如 Codex CLI）

### 部署步骤

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
bun run build
bun run start
```

## 从源码构建

### 开发环境

```bash
git clone https://github.com/PeakCode-AI/PeakCode.git
cd PeakCode
bun install
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
bun run dist:desktop:dmg    # macOS DMG
bun run dist:desktop:linux  # Linux AppImage
bun run dist:desktop:win    # Windows 安装包
```

## 质量检查

```bash
bun run test        # 运行测试
bun run lint        # 代码检查
bun run fmt         # 代码格式化
bun run typecheck   # 类型检查
```
