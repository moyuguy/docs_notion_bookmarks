# 快速上手

欢迎使用 Notion Bookmarks！本指南将帮助您在 3 分钟内完成所有设置，并拥有一个属于您自己的、由 Notion 驱动的个人导航站。

## 准备工作

在开始之前，请确保您拥有以下账号：

-   一个 **GitHub** 账号
-   一个 **Notion** 账号
-   一个 **Vercel** 账号 (推荐使用 GitHub 账号登录)

## 步骤一：Fork 项目与复制模板

1.  访问 [Notion Bookmarks 的 GitHub 仓库](https://github.com/moyuguy/notion_bookmarks) 并点击 **Fork** 按钮，将项目复制到您自己的仓库中。
2.  访问 [Notion 模板](https://www.notion.so/your-template-link) 并点击 **Duplicate**，将其复制到您的 Notion 工作区。

## 步骤二：创建 Notion 集成

1.  前往 [Notion 的集成管理页面](https://www.notion.so/my-integrations) 创建一个新的集成。
2.  获取您的 **Internal Integration Token** (集成密钥)，并妥善保管。
3.  回到您复制的 Notion 数据库页面，点击右上角的 `...`，选择 **Add connections**，然后选择您刚刚创建的集成，授予其访问权限。

## 步骤三：Vercel 部署

1.  登录 Vercel，选择 **Import Project**。
2.  从您的 GitHub 仓库中选择 `notion-bookmarks` 项目并导入。
3.  在 **Environment Variables** (环境变量) 部分，配置以下变量：
    -   `NOTION_TOKEN`: 您在上一步中获取的集成密钥。
    -   `NOTION_LINKS_DB_ID`: 您 “导航链接” 数据库的 ID (可以从 Notion 页面 URL 中获取)。
    -   `NOTION_WEBSITE_CONFIG_ID`: 您 “网站配置” 数据库的 ID。
    -   `NOTION_CATEGORIES_DB_ID`: 您 “分类配置” 数据库的 ID。
4.  点击 **Deploy**，等待部署完成。

恭喜！您现在已经拥有了一个功能齐全的个人导航站。