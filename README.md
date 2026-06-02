# IELTS 机考练习系统

> 内部部署版 · Developed by **Jimmy**
> 仿照雅思官方机考界面的本地化练习平台,支持阅读、听力训练、词汇背诵与练习记录管理。

---

## 一、系统简介

IELTS 机考练习系统是一套**纯前端**的本地化雅思练习平台,采用 HTML5 + CSS3 + JavaScript (ES6+) 构建,**无需后端服务器**即可运行。系统主要包含以下能力:

| 模块 | 主要功能 |
| ---- | -------- |
| 📊 学习总览 | 按 P1 / P2 / P3 分类显示题库统计与练习概况 |
| 📚 题库浏览 | 支持阅读 / 听力切换、关键词搜索、频率排序、单题快速预览 |
| 📝 练习记录 | 自动保存每次练习的得分、用时、答题对比;支持过滤、批量删除、Markdown 导出 |
| ✨ 更多工具 | 全屏时钟、SM-2 单词背诵、成就徽章 |
| ⚙️ 系统设置 | 题库加载、配置切换、缓存清除、备份导入导出、引导回放 |

主要数据全部存于浏览器 `localStorage`,**任何题目数据都不会上传到外部服务器**,适合公司内部、教研机构、家庭练习等隐私敏感场景。

---

## 二、系统要求

| 项目 | 要求 |
| ---- | ---- |
| 操作系统 | Windows 10 / 11、macOS 12+、主流 Linux 桌面发行版 |
| 浏览器 | Chrome 90+ / Edge 90+(推荐)、Firefox 100+、Safari 15+ |
| 屏幕分辨率 | 建议 1366 × 768 及以上,机考体验 1920 × 1080 最佳 |
| 网络环境 | 部署到局域网服务器后,练习端无需公网,仅需访问内部地址 |
| 磁盘空间 | 程序本体 ~30 MB,题库视体量另计(典型 500 MB ~ 2 GB) |

---

## 三、目录结构

```
网页版机考部署/
├── index.html                  # 主入口页面(本系统的"考试桌面")
├── css/                        # 样式文件(已应用绿色 + IELTS CBT 风格)
│   ├── main.css
│   ├── heroui-bridge.css
│   └── onboarding.css
├── js/                         # 应用逻辑(模块化)
│   ├── app.js
│   ├── components/
│   ├── core/
│   ├── data/
│   ├── services/
│   ├── presentation/
│   └── ...
├── assets/                     # 静态资源
│   ├── images/favicon.svg      # 浏览器标签页图标(IELTS · CBT)
│   ├── fonts/                  # 中文字体
│   ├── generated/              # 自动生成的阅读题目缓存
│   └── vendor/three.min.js     # 背景渲染
├── LICENSE                     # GPL-3.0 许可证
└── README.md                   # 本文档
```

---

## 四、快速开始(单机使用)

### 1. 下载与解压
1. 把整个 `网页版机考部署` 文件夹完整放到本地路径(路径中**不要有特殊符号**,但允许中文)。
2. 不要单独移动 `css/`、`js/`、`assets/` 子目录,保持原始结构。

### 2. 启动方式 A:直接双击(最简单)
1. 双击 `index.html`,默认浏览器打开。
2. 首次访问会弹出 **GPL 许可须知**,点击「我已了解」进入主界面。
3. 顶部绿色横栏显示「IELTS Computer-delivered Practice」即表示加载成功。

> ⚠️ 双击方式使用的是 `file://` 协议,部分浏览器在该协议下会限制 `localStorage` 隔离与文件夹读取,**推荐使用下文第五节的"本地 HTTP 服务器"方式**。

### 3. 启动方式 B:通过本地 HTTP 服务器(推荐)
任选一种语言均可:

| 工具 | 启动命令(在 `网页版机考部署` 目录下执行) |
| ---- | ---------------------------------------- |
| Python 3 | `python -m http.server 8080` |
| Node.js | `npx http-server -p 8080 -c-1` |
| PowerShell + IIS Express | 见第六节 |

启动后浏览器访问 `http://127.0.0.1:8080` 即可。

### 4. 加载题库
1. 进入「⚙️ 设置」→「📂 加载题库」。
2. 在弹窗中选择阅读题库或听力题库根目录(例如 `D:\IELTS-Reading-Library`)。
3. 系统会自动扫描并生成索引,完成后在「📊 总览」中可见各级数量。
4. 支持**多套题库切换**:同一台机器可加载多套不同来源的题目,通过「⚙️ 题库配置切换」切换。

---

## 五、公司局域网部署教程(重点)

### 5.1 部署目标
- 部署一台**内网服务器**(Windows / Linux 均可),所有员工 / 学员通过浏览器访问。
- 所有练习数据保存在**各自浏览器**中,互不影响。
- 题库仅放在服务器上,统一更新维护。

### 5.2 网络规划
| 角色 | 说明 |
| ---- | ---- |
| 服务器主机 | 一台常开的 PC / 服务器,内网 IP 例:`192.168.1.50` |
| 客户端 | 公司内任何能 ping 通服务器的电脑 |
| 推荐端口 | 80(免去手动加端口号) 或 8080 (避开冲突) |
| 防火墙 | 需要在服务器上开放对应端口的入站连接 |

---

### 5.3 部署方法 A:Windows + Python(零依赖,3 分钟搞定)

适合临时部署或测试用途。

1. **安装 Python 3**(https://www.python.org/downloads/)。安装时勾选 *Add Python to PATH*。
2. **复制项目目录**到服务器,例如 `C:\IELTS-CBT\`。
3. 在该目录下**右键 → 在终端中打开**(PowerShell),执行:
   ```powershell
   python -m http.server 80
   ```
   > 80 端口需要管理员权限;若提示权限错误,改用 `python -m http.server 8080`。
4. 打开 Windows 防火墙:
   - `控制面板 → Windows Defender 防火墙 → 高级设置 → 入站规则 → 新建规则`
   - 选 **端口 → TCP → 特定本地端口 80**(或 8080)→ 允许连接 → 命名为 `IELTS-CBT`。
5. 在服务器上查询内网 IP:`ipconfig`,记下 `IPv4 地址`(例:`192.168.1.50`)。
6. 客户端浏览器访问 `http://192.168.1.50/` 或 `http://192.168.1.50:8080/`。

**保持长期运行**:把上面那条 Python 命令保存为 `start-ielts.bat`,放进开机自启文件夹(`Win + R` → `shell:startup`)。

---

### 5.4 部署方法 B:Windows + IIS(推荐生产用途)

IIS 是 Windows 自带的 Web 服务器,稳定且开箱即用。

1. **启用 IIS**:`控制面板 → 程序与功能 → 启用或关闭 Windows 功能 → 勾选「Internet Information Services」`,确保 *静态内容* 子项已勾选。
2. **复制项目**到 `C:\inetpub\wwwroot\ielts-cbt\`。
3. 打开 *Internet Information Services (IIS) 管理器*:
   - 右键 `网站` → `添加网站`
   - 网站名称:`IELTS-CBT`
   - 物理路径:`C:\inetpub\wwwroot\ielts-cbt\`
   - 绑定:类型 `http`,IP `全部未分配`,端口 `80`(可改),主机名留空
   - 点击 *确定*
4. **配置 MIME**:确认 IIS 已注册 `.woff2`(应用程序 → MIME 类型):
   - `.woff2` → `font/woff2`
   - `.svg` → `image/svg+xml`
   (默认通常已含。)
5. **防火墙放行 80 端口**(同 5.3 第 4 步)。
6. 客户端浏览器访问 `http://<服务器内网IP>/`。

如需 HTTPS,可在 IIS 中导入企业内部 CA 颁发的证书,或使用 *win-acme* 自动签发。

---

### 5.5 部署方法 C:Linux + Nginx(企业级 / 长期使用)

适合已有 Linux 服务器的环境。

1. **安装 Nginx**:
   ```bash
   sudo apt update && sudo apt install -y nginx        # Debian / Ubuntu
   # 或
   sudo yum install -y nginx                            # CentOS / RHEL
   ```
2. **复制项目**到 `/var/www/ielts-cbt/`(并确保权限):
   ```bash
   sudo mkdir -p /var/www/ielts-cbt
   sudo cp -r ./网页版机考部署/* /var/www/ielts-cbt/
   sudo chown -R www-data:www-data /var/www/ielts-cbt
   ```
3. **新增站点配置** `/etc/nginx/conf.d/ielts-cbt.conf`:
   ```nginx
   server {
       listen 80;
       server_name ielts.lan;          # 或直接用 server IP
       root  /var/www/ielts-cbt;
       index index.html;

       # 关闭强缓存,方便课程更新后立刻生效
       location / {
           try_files $uri $uri/ =404;
           add_header Cache-Control "no-cache";
       }

       # 字体/图片可以长缓存
       location ~* \.(woff2|svg|png|jpg|webp)$ {
           expires 30d;
           add_header Cache-Control "public, immutable";
       }
   }
   ```
4. **测试并启动**:
   ```bash
   sudo nginx -t && sudo systemctl reload nginx
   sudo systemctl enable --now nginx
   ```
5. **开放防火墙**(若使用 firewalld):
   ```bash
   sudo firewall-cmd --add-service=http --permanent
   sudo firewall-cmd --reload
   ```
6. 客户端浏览器访问 `http://<服务器IP>/` 或 `http://ielts.lan/`。

> 推荐结合公司内部 DNS,把 `ielts.lan` 解析到服务器 IP,学员只要记一个域名即可。

---

### 5.6 部署方法 D:Node.js(适合开发同学)

```bash
cd 网页版机考部署
npx http-server -p 80 -c-1 --cors
```
- `-c-1`:关闭缓存,改完即生效。
- `--cors`:开启跨域,部分浏览器加载本地资源更友好。

把命令封装到 `pm2` 即可后台常驻:
```bash
npm install -g pm2 http-server
pm2 start "http-server -p 80 -c-1 --cors" --name ielts-cbt
pm2 save && pm2 startup
```

---

### 5.7 题库放置策略(局域网内的两种典型方式)

题库路径可以在「⚙️ 设置 → 📂 加载题库」中由用户从本地选择,**也可以**让管理员把题库放在服务器上,由学员直接打开,常见做法:

1. **把题库放到 web 根目录的子文件夹**(适合阅读题目都是 HTML 的情况):
   - 例如:`/var/www/ielts-cbt/library/`
   - 学员第一次使用时,从「📂 加载题库」选择浏览器中的题库文件夹,系统会缓存索引。
2. **题库放在内网共享盘**(NAS / SMB):
   - 把 `\\server\share\IELTS-Library\` 映射到所有客户端的同一盘符(如 `Z:`)。
   - 通过组策略统一映射,学员加载时选择 `Z:\IELTS-Library` 即可。

---

### 5.8 客户端使用须知
1. 第一次访问会弹出 GPL 协议说明,点击「我已了解」即可。
2. 系统会在浏览器 `localStorage` 中保存:
   - `exam_system_practice_records`:练习记录数组
   - `exam_system_user_stats`:统计汇总
   - `exam_system_settings`:用户偏好
3. 清除浏览器数据 = 清除练习记录,**重要数据请定期通过「💾 创建备份」导出 JSON**。
4. 若学员需要换电脑,把导出的 JSON 在新机器「📥 导入数据」即可迁移。

---

## 六、日常使用说明

### 6.1 主界面导航
顶部绿色横栏是 IELTS CBT 风格的考试信息栏,显示:
- 左上角:**IELTS** Logo + 系统名称(中英双语)
- 右上角:考生标签 / 当前时间 / **Developed by Jimmy** 标识

下面的圆角导航条对应 5 个模块,鼠标点击切换。

### 6.2 开始一场练习
1. 进入「📚 题库浏览」。
2. 顶部用「全部 / 阅读 / 听力」过滤,搜索框输入关键词(支持中英文标题)。
3. 点击题目卡片右侧「开始练习」:
   - HTML 题:**新窗口**打开,自动注入计时与答案采集脚本(`practice-page-enhancer.js`)。
   - PDF 题:浏览器内嵌查看,可全屏。
4. 答题过程中,可在新窗口中:
   - 上方查看剩余时间
   - 中间区域作答
   - 右侧 / 底部跳转题号
5. 提交后,主窗口自动接收消息并写入「📝 练习记录」。

### 6.3 查看与导出记录
1. 进入「📝 练习记录」。
2. 顶部统计卡片显示:已练题数 / 平均正确率 / 学习时长 / 连续学习天数。
3. 「练习历史」列表支持:
   - 过滤(全部 / 阅读 / 听力)
   - 点击展开查看题目级答题对比
   - 「📝 批量删除」勾选清理
   - 「📄 导出 Markdown」生成可读报告
   - 「🗑️ 清除记录」一键清空(操作不可恢复,请先备份)

### 6.4 备份与迁移
| 操作 | 路径 | 说明 |
| ---- | ---- | ---- |
| 创建备份 | 设置 → 数据管理 → 💾 创建备份 | 浏览器下载 JSON 文件,含校验和 |
| 备份列表 | 设置 → 数据管理 → 📋 备份列表 | 查看 / 恢复最近 20 份备份 |
| 导出数据 | 设置 → 数据管理 → 📤 导出数据 | 全量 JSON(含题库索引) |
| 导入数据 | 设置 → 数据管理 → 📥 导入数据 | 选择合并 / 替换 / 跳过策略 |

### 6.5 词汇背诵
1. 进入「✨ 更多」→「🧠 单词背诵」。
2. 系统内置 SM-2 算法的间隔重复;每次答对会延长复习周期。
3. 可在词表选择器中切换不同的词表(`assets/wordlists/` 下的 JSON)。

### 6.6 主题与界面
- 系统已经定制为**深绿色 + 雅思机考风格**,顶栏配色 `#14532d → #1f7a4d`,黄色装饰条强调当前页。
- 字体使用 Arial + Helvetica + Microsoft YaHei 组合,接近雅思官方 CBT。
- 不建议再切换内置的「晨雾群山 / 深海孤航 / 落日雾花」主题,这些是旧版可视化背景,与机考绿色风格不一致。

---

## 七、常见问题(FAQ)

**Q1. 双击 `index.html` 后界面卡在「正在启动...」?**
A. 多数是 `file://` 协议下脚本加载顺序问题。改用第五节中的 HTTP 服务方式,刷新即可。

**Q2. 局域网客户端访问超时?**
A. 依次检查:
1. 服务器防火墙是否放行端口?
2. 客户端能否 ping 通服务器 IP?
3. 服务器上的 HTTP 服务是否仍在运行?(`netstat -ano | findstr :80`)

**Q3. 加载题库后没有题目?**
A. 在「⚙️ 设置 → 📊 系统信息」中查看「题库状态」与「题目总数」。若为 0,通常是题目文件夹结构不规范(必须按 `P1 - 标题/index.html` 之类的格式)。重新选择正确根目录即可。

**Q4. 跨电脑同步进度?**
A. 本系统不内置云同步。请使用「📤 导出数据」+「📥 导入数据」手工迁移,或写一个脚本把 `localStorage` 备份到内网共享盘。

**Q5. 想自定义品牌名(改回公司名 / 部门名)?**
A. 修改 `index.html` 中的:
- `<title>` 标签
- `.ielts-topbar__title / __subtitle / __badge` 文本
- 底部 `.ielts-footer-credit__author` 中的 `<strong>Jimmy</strong>`

颜色统一调整入口在 `css/heroui-bridge.css` 顶部 `:root` 中的 `--ielts-topbar-bg` 与 `--color-brand-*` 系列变量。

**Q6. 浏览器存储满了 (`QuotaExceededError`)?**
A. 一份完整练习记录约 2~10 KB,理论上限 5 MB(约 500~2500 份)。请先「📤 导出数据」备份,然后到设置中「🗑️ 清除记录」释放空间。

---

## 八、技术栈与维护

- **前端**:原生 JavaScript ES6+,无构建步骤,**无依赖运行时**。
- **可视化**:`assets/vendor/three.min.js` 用于背景,与功能解耦,可移除以提速。
- **数据**:浏览器 `localStorage` + IndexedDB(部分缓存)。
- **跨窗口通信**:`postMessage`(主窗口 ↔ 题目子窗口)。
- **构建**:无须 Webpack / Vite / npm install,直接放到 Web 服务器即可。

## 九、许可证

本项目沿用上游 **GPL-3.0** 协议(见 `LICENSE`)。任何二次分发都必须开源并保留许可声明。
界面与品牌定制(绿色配色、IELTS CBT 风格顶栏、署名)由 **Jimmy** 完成,仅作为内部使用版本。

---

## 联系方式

部署与内部技术支持:**Jimmy**(内部联系方式请询贵司管理员)
