# 数据迁移：将现有收藏夹迁移到 Notion Bookmarks

如果您在浏览器、其他书签管理工具或平台中已经积累了大量的书签，可以通过多种方式将它们迁移到 Notion Bookmarks 中。


## 步骤 1：导出浏览器书签

各主流浏览器的书签导出方法：

| 浏览器 | 快捷键 | 导出步骤 | 输出格式 |
|--------|--------|----------|----------|
| **Chrome** | `Ctrl+Shift+O` (Win)<br>`Cmd+Option+B` (Mac) | 1. 打开书签管理器<br>2. 点击右上角 "⋯" 菜单<br>3. 选择 "导出书签"<br>4. 保存为 HTML 文件 | HTML |
| **Edge** | `Ctrl+Shift+O` (Win)<br>`Cmd+Option+B` (Mac) | 1. 打开书签管理器<br>2. 点击右上角 "⋯" 菜单<br>3. 选择 "导出收藏夹"<br>4. 保存为 HTML 文件 | HTML |
| **Firefox** | `Ctrl+Shift+B` (Win)<br>`Cmd+Shift+B` (Mac) | 1. 打开书签管理器<br>2. 点击 "导入和备份"<br>3. 选择 "导出书签为 HTML"<br>4. 选择保存位置 | HTML |
| **Safari** | 无快捷键 | 1. 菜单栏选择 "文件"<br>2. 选择 "导出" → "书签"<br>3. 选择保存位置<br>4. 确认格式为 HTML | HTML |
| **Opera** | `Ctrl+Shift+B` (Win)<br>`Cmd+Shift+B` (Mac) | 1. 打开书签管理器<br>2. 点击 "导入/导出"<br>3. 选择 "导出书签"<br>4. 保存为 HTML 文件 | HTML |

**💡 提示：**
- 所有浏览器导出的都是标准 HTML 格式
- 导出文件通常命名为 `bookmarks.html` 或 `书签.html`
- 建议在导出前整理一下书签，删除无用的链接

## 步骤 2：转换为 CSV 格式

### 使用在线转换工具

推荐使用以下在线工具：[HTML to CSV Converter](https://www.convertcsv.com/html-links-to-csv.htm)


**操作步骤：**
1. 上传您的 `bookmarks.html` 文件
2. 选择输出格式为 CSV
3. 确保包含以下字段：
   - 标题 (Title)
   - 链接 (URL)
4. 下载转换后的 CSV 文件



### 步骤 3：导入到 Notion 数据库

#### 字段映射说明

浏览器导出的 HTML 书签文件转换为 CSV 后包含以下基础信息：

| CSV 字段 | 说明 | 对应 Notion 属性 |
|------------|------|------------------|
| URL | 网站链接 | URL 属性 |
| Title | 书签标题 | Name 属性 |

**示例数据：**
```
URL: https://example.com
Title: 示例网站
```

#### 导入步骤

1. 打开您的 Notion Bookmarks 数据库
2. 点击右上角的 `⋯` 菜单
3. 选择 **Merge with CSV**
4. 上传转换后的 CSV 文件
5. 匹配字段映射：
   - **URL** → URL 属性
   - **Title** → Name 属性
6. 点击 **Import** 完成导入

#### 导入后优化

由于浏览器书签信息有限，建议导入后进行以下优化：

- **添加描述**：为重要网站手动添加描述信息
- **设置标签**：根据网站内容添加相关标签
- **分类整理**：将网站归类到合适的 Category
- **清理重复**：删除重复或无效的书签
- **更新标题**：优化书签标题，使其更具描述性



