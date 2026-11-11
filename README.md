# 卫宏亮律师个人官网 · 当前版

为山西运城卫宏亮律师制作的个人官网设计初稿。按委托方偏好，首屏保留楼房摄影背景，真人肖像用于律师介绍区，保留原照，仅使用 CSS 裁切与排布。背景包含全页鼠标柔光、惯性跟随、曲线视差和光点响应，兼容暂停及减少动态偏好。纯 HTML、CSS 与 JavaScript，无第三方运行依赖。

## 下半页阅读设计

- 执业档案：立体档案册与信息页并排，支持概览、荣誉任职及代表事项页签和键盘切换。仅概览使用当前已确认资料，其他页签说明真实信息待完善。
- 业务方向：四个可展开的沟通专题，联动场景标题，并继续支持材料准备清单与咨询提纲流程。
- 沟通路径：横向四阶段时间线，对应不同的说明和准备内容。
- 法律札记：主文章与侧栏文章的杂志布局，支持分类筛选及弹窗阅读，维持非律师署名示例标注。
- 常见问题：两列可展开问题；结尾咨询区补充律师肖像和署名。
- 所有新布局适配 320/390 像素小屏，首屏和律师介绍布局保持原设计。

## 已由委托方提供的信息

- 姓名：卫宏亮。
- 所属律所：山西衡霄律师事务所。
- 执业地：山西运城。
- 擅长方向：民商事法律事务。
- 电话 / 微信：18535963396（同号），联系二维码已由委托方提供。

网站已移除执业年限展示。联系区提供拨打电话、复制微信号、二维码放大及原图下载；需求整理工具仍只在本地生成提纲，不会自动发送。

职业形象照已由委托方提供并接入。执业证号、荣誉、社会任职及代表案件仍待补充。未编造客户评价、案件成绩或胜诉率。常见业务分类用于沟通，具体承办范围需由律师确认。

## 图片来源

当前人物照片：委托方提供，位于 `dist/assets/wei-hongliang-portrait.jpg`。使用原文件，未进行人脸生成、修饰或背景替换。

联系卫律师的微信二维码由委托方提供，原图位于 `dist/assets/wei-hongliang-wechat.png`，保留原始内容与比例，用于联系区及放大窗口。

首屏建筑摄影：Sean Pollock，Unsplash，作品 [Taller than the Trees](https://unsplash.com/photos/PhYq704ffdA)。[Wikimedia Commons 来源记录](https://commons.wikimedia.org/wiki/File:Low_angle_view_of_skyscrapers.jpg)。资产位于 `dist/assets/architecture-editorial.jpg`，用于建筑意象，不代表实际办公场所。全部图片本地化，无远程图片依赖。

阅读及文书场景配图来自 Unsplash，非实际办公场所或服务现场：[书籍原图](https://images.unsplash.com/photo-1505664194779-8beaceb93744)、[文书原图](https://images.unsplash.com/photo-1450101499163-c8848c66ca85)。本地文件分别为 `dist/assets/legal-library.jpg` 和 `dist/assets/consultation-desk.jpg`。

## 本地运行

在此目录运行 `node server.mjs`，打开 http://127.0.0.1:4173 。也可将 `dist` 目录托管到支持静态站点的服务器。

运行 `npm run build` 检查静态资源、JavaScript 语法与部署配置。资源已在 `dist` 内，无需额外编译。

## 部署到 Vercel

当前版本已部署至 Vercel：[正式网站](https://wei-hongliang-lawyer.vercel.app)。项目为 `wei-hongliang-lawyer`，生产部署状态 READY，2026年11月8日上线。17 个线上静态文件均返回 200，SHA-256 与本地一致；线上档案页签和咨询提纲已验证。部署标识与源码快照记录在 `部署信息.json`。

当前为本地源码通过官方 CLI 发布，尚未连接 Git 自动部署。当前目录已关联到目标项目，后续更新可在确认目标后运行：

```text
npx --yes vercel project inspect --non-interactive --scope baoyue1019-gmailcoms-projects
npm run build
npx --yes vercel deploy --dry --json --prod --scope baoyue1019-gmailcoms-projects --non-interactive
npx --yes vercel deploy --prod --yes --scope baoyue1019-gmailcoms-projects --non-interactive
```

`.vercelignore` 仅允许 `dist`、`package.json`、`vercel.json` 和 `build.mjs` 上传。本地认证文件不包含在源码压缩包或部署文件中。

如需从新仓库重新导入：

1. 将本项目提交至自己的 Git 仓库，在 Vercel 导入该仓库。
2. 项目根目录选中包含本 README、`package.json` 和 `vercel.json` 的目录；若仓库根目录就是本项目，保持默认。
3. 使用 Other 框架预设，构建命令 `npm run build`，输出目录 `dist`。这些已在配置文件中指定。
4. 部署完成后，在该 Vercel 项目的 Domains 页面添加实际自有域名，并按控制台返回的 DNS 记录配置。

当前前端不依赖 ChatGPT 或 Sites 登录，没有服务端、数据库或密钥。旧 Sites 预览仍为第一版，最新效果以本地源码和预览为准。资源路径兼容直接打开本地 HTML 文件。

参考：[Vercel 项目配置官方文档](https://vercel.com/docs/project-configuration)。

## 内容与互动

正文、导航、表单和说明文字已放大，并提高对比度。四阶段沟通流程、札记分类、咨询提纲和本地下载功能继续保留。

- 响应式首页、律师介绍、业务栏目、荣誉资质、示例札记、常见问题。
- 业务筛选、业务沟通准备弹窗、文章阅读、FAQ 展开、移动端导航。
- 本地生成咨询提纲，支持复制和下载。表单不发送，不保存到服务器，不构成预约。
- 内容输入通过 textContent 输出，避免 HTML 注入。
- 新版增加缓慢悬浮、页面渐入、光晕跟随与悬停反馈，并支持减少动态效果的系统偏好。
- 四阶段沟通流程支持点选与键盘方向键切换，各阶段展示不同材料准备提示。
- 札记区支持按沟通准备、材料整理和咨询常识筛选现有示例文章。
- 页脚可暂停和恢复动态效果；遵循系统减少动态偏好。后台标签页停止光点绘制，手机减少光点数量，并限制画布像素密度。

## 正式上线前补充

1. 律师本人确认的执业证号、详细履历，以及公开肖像与个人资料的使用授权。
2. 真实承办业务和荣誉；当前栏目均有明确示意或待补充标记。
3. 持续核对电话与微信信息；当前使用 18535963396 和委托方提供的微信二维码。
4. 律师署名文章；当前为非署名沟通指南示例。
5. 自有域名和选定托管服务，以及适用的备案、隐私与公开展示信息。

如需在线接收咨询，须增加服务端接收渠道及相应隐私告知；当前不包含后台和接收能力。
