---
title: "MediaWiki 风格排版：使用指南与效果演示"
date: 2026-08-17 19:45:00
updated: 2026-08-17 20:23:00
tags: [站点相关, 排版]
categories: [站点相关]
cover: /img/default-banner.png
description: "本站 MediaWiki 风格排版的完整使用指南与效果演示：wikitable、可排序表格、infobox、hatnote、note 提示框、折叠面板与脚注引用。"
toc: true
---

>需要注意，该文档相当程度使用AI生成，定位为展示用文档  
>但这句确实是我手写的。

## 一、页面说明

本页将 MediaWiki 风格排版的“使用指南”与“实际效果演示”合并在一起。每个元素均按「语法 → 效果」组织，语法部分可以直接复制到新文章中使用。实现文件与配置说明见“十一、配置与实现源码”。

## 二、启用方式

{% note info %}
当前站点已启用本方案，以下所有元素均可直接使用。
{% endnote %}

依赖安装命令：

```bash
npm install hexo-footnotes hexo-butterfly-tag-plugins-plus --save
```

相关配置位于 `_config.butterfly.yml`，完整片段见下文“十一、配置与实现源码”。

## 三、相关文件

| 文件 | 作用 |
|------|------|
| `source/css/wikitable.css` | wikitable、infobox、hatnote 全套 CSS |
| `source/js/sorttable.js` | 可排序表格脚本（本地托管） |
| `themes/butterfly/scripts/tag-wikitable.js` | wikitable 标签插件 |
| `_config.butterfly.yml` | 注入 CSS/JS 与 tag_plugins 配置 |
| `package.json` | hexo-footnotes 与 tag-plugins-plus 依赖 |

## 四、wikitable 表格

### 语法

{% raw %}
```markdown
{% wikitable 表格标题 %}
| 列1 | 列2 |
|-----|-----|
| 数据1 | 数据2 |
{% endwikitable %}
```
{% endraw %}

### 效果

{% wikitable 江户幕府历代将军天领石高 %}
| 将军 | 时期 | 天领石高（石） | 占全国比例 |
|------|------|---------------|-----------|
| 德川家康 | 庆长年间 | 约2,000,000 | 约10% |
| 德川家光 | 宽永年间 | 约4,000,000 | 约15% |
| 德川吉宗 | 享保年间 | 约4,500,000 | 约17% |
{% endwikitable %}

## 五、wikitable sortable 可排序表格

### 语法

{% raw %}
```markdown
{% wikitable sortable 表格标题 %}
| 列1 | 列2 |
|-----|-----|
| 数据1 | 数据2 |
{% endwikitable %}
```
{% endraw %}

### 效果

点击表头可排序：

{% wikitable sortable 令制国主要数据对比 %}
| 国名 | 石高（石） | 郡数 | 所属道 | 对应现代地区 |
|------|-----------|------|--------|--------------|
| 陆奥国 | 1,672,806 | 35 | 东山道 | 东北地方 |
| 武藏国 | 1,112,700 | 22 | 东海道 | 东京都、埼玉县 |
| 近江国 | 832,088 | 12 | 东山道 | 滋贺县 |
| 大和国 | 469,368 | 15 | 畿内 | 奈良县 |
{% endwikitable %}

## 六、infobox 信息框

### 语法

```html
<table class="infobox">
  <caption>信息框标题</caption>
  <tr><th>字段1</th><td>内容1</td></tr>
  <tr><th>字段2</th><td>内容2</td></tr>
</table>
```

### 效果

<table class="infobox">
  <caption>令制国石高制度</caption>
  <tr><th>起源</th><td>太阁检地（文禄元年／1592年）</td></tr>
  <tr><th>确立</th><td>江户幕府（庆长年间）</td></tr>
  <tr><th>废除</th><td>明治4年（1871年）废藩置县</td></tr>
  <tr><th>计算单位</th><td>石（大米单位）</td></tr>
</table>

石高制是日本近世（安土桃山～江户时代）的土地生产力表示制度[^1]。

## 七、hatnote 顶注

### 语法

```html
<p class="hatnote">关于某主题，参见<a href="/posts/目标文章/">目标文章</a>。</p>
```

### 效果

<p class="hatnote">关于江户时代的石高制度，参见<a href="#四、wikitable-表格">本页 wikitable 示例</a>。</p>

## 八、note 提示框

### 语法

{% raw %}
```markdown
{% note info %}
蓝色信息提示内容。
{% endnote %}

{% note warning %}
黄色警告提示内容。
{% endnote %}
```
{% endraw %}

### 效果

{% note info %}
江户幕府直辖领（天领）约400万石，占全国总石高约15%。
{% endnote %}

{% note warning %}
石高数并非完全准确反映实际生产力，新田开发使“表高”与“实高”差距日益扩大。
{% endnote %}

## 九、folding 折叠面板

### 语法

{% raw %}
```markdown
{% folding 折叠面板标题 %}
折叠内容，支持 Markdown。
{% endfolding %}
```
{% endraw %}

### 效果

{% folding 点击查看：本方案实现文件 %}
- `source/css/wikitable.css`：wikitable、infobox、hatnote 全套 CSS
- `source/js/sorttable.js`：本地托管的可排序表格脚本
- `themes/butterfly/scripts/tag-wikitable.js`：wikitable 标签插件
{% endfolding %}

## 十、脚注引用

### 语法

```markdown
正文内容[^1]。

[^1]: 脚注说明。
```

### 效果

石高制是日本近世的土地生产力表示制度[^1]。太阁检地确立了以稻米产量评定土地价值的标准[^2]。

## 十一、配置与实现源码

### 配置片段

```yaml
inject:
  head:
    - '<link rel="stylesheet" href="/css/wikitable.css">'
  bottom:
    - '<script src="/js/sorttable.js"></script>'

tag_plugins:
  enable: true
  priority: 5
  issues: false
  CDN:
    anima: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@1.0.18/lib/assets/font-awesome-animation.min.css
    tag_plugins_css: https://unpkg.zhimg.com/hexo-butterfly-tag-plugins-plus@1.0.18/lib/tag_plugins.css
```

### tag-wikitable.js 源码

{% folding 点击查看：tag-wikitable.js 源码 %}
{% raw %}
```js
'use strict';

// MediaWiki 风格 wikitable tag plugin
// 用法：
//   {% wikitable 表格标题 %}
//   | ... |
//   {% endwikitable %}
//
// 需要可排序时传入 sortable 参数：
//   {% wikitable sortable 表格标题 %}
hexo.extend.tag.register('wikitable', function (args, content) {
  var wrapperClasses = ['wikitable'];
  var tableClasses = ['wikitable'];
  var captionText = [];

  args.forEach(function (arg) {
    if (arg === 'sortable') {
      wrapperClasses.push('sortable');
      tableClasses.push('sortable');
    } else {
      captionText.push(arg);
    }
  });

  var caption = captionText.length ? '<caption>' + captionText.join(' ') + '</caption>' : '';
  var rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });

  // 将 sortable 类放到 table 上，sorttable.js 才能识别；
  // 同时把 caption 放到 table 内部，保证 HTML 结构合法。
  var tableTag = '<table class="' + tableClasses.join(' ') + '">' + caption;
  rendered = rendered.replace('<table>', tableTag);

  return '<div class="' + wrapperClasses.join(' ') + '">' + rendered + '</div>';
}, { ends: true });
```
{% endraw %}
{% endfolding %}
### wikitable.css 源码

{% folding 点击查看：wikitable.css 源码 %}
```css
/* =========================================================
   MediaWiki 风格排版：wikitable / infobox / hatnote
   方案来源：hexo-wiki-排版方案.md
   通过 _config.butterfly.yml 的 inject.head 全局注入
   ========================================================= */

/* ===== MediaWiki 风格 wikitable ===== */
.wikitable {
  background-color: #f8f9fa;
  color: #202122;
  margin: 1em 0;
  border: 1px solid #a2a9b1;
  border-collapse: collapse;
}

.wikitable table {
  width: 100%;
  margin: 0;
}

.wikitable th {
  background-color: #eaecf0;
  border: 1px solid #a2a9b1;
  padding: 0.4em 0.6em;
  text-align: center;
  font-weight: bold;
}

.wikitable td {
  border: 1px solid #a2a9b1;
  padding: 0.3em 0.6em;
}

/* 奇偶行交替色 */
.wikitable tr:nth-child(even) td {
  background-color: #f8f9fa;
}

.wikitable tr:nth-child(odd) td {
  background-color: #ffffff;
}

/* 仍然让表头覆盖掉奇偶行规则 */
.wikitable thead th {
  background-color: #eaecf0;
}

/* 带标题的 wikitable */
.wikitable caption {
  font-weight: bold;
  padding: 0.4em;
  caption-side: top;
  text-align: left;
  background-color: #f8f9fa;
  border: 1px solid #a2a9b1;
  border-bottom: none;
}

/* 深色模式适配 */
[data-theme="dark"] .wikitable {
  background-color: #1a1a2e;
  color: #e0e0e0;
  border-color: #444;
}

[data-theme="dark"] .wikitable th {
  background-color: #2a2a3e;
  border-color: #555;
  color: #e0e0e0;
}

[data-theme="dark"] .wikitable caption {
  color: #1a1a1a;
}

[data-theme="dark"] .wikitable td {
  border-color: #444;
}

[data-theme="dark"] .wikitable tr:nth-child(even) td {
  background-color: #1e1e32;
}

[data-theme="dark"] .wikitable tr:nth-child(odd) td {
  background-color: #1a1a2e;
}

/* ===== wikitable sortable（可排序表格） ===== */
/* 排序表头样式 */
.wikitable.sortable th {
  cursor: pointer;
  user-select: none;
}

.wikitable.sortable th:hover {
  background-color: #d4d8dd;
}

[data-theme="dark"] .wikitable.sortable th:hover {
  background-color: #3a3a4e;
}

/* sorttable 默认排序指示器 */
.wikitable.sortable th.sorttable_sorted::after {
  content: " ▾";
  font-size: 80%;
}

.wikitable.sortable th.sorttable_sorted_reverse::after {
  content: " ▴";
  font-size: 80%;
}

/* ===== MediaWiki 风格 infobox ===== */
.infobox {
  float: right;
  width: 270px;
  max-width: 40%;
  margin: 0 0 1.2em 1.5em;
  border: 1px solid #a2a9b1;
  border-collapse: collapse;
  font-size: 88%;
  line-height: 1.5;
  background-color: #f8f9fa;
}

.infobox caption {
  font-size: 125%;
  font-weight: bold;
  padding: 0.4em 0.5em;
  text-align: center;
}

.infobox th {
  background-color: #eaecf0;
  text-align: left;
  padding: 0.2em 0.5em;
  width: 35%;
  white-space: nowrap;
}

.infobox td {
  border-top: 1px solid #a2a9b1;
  padding: 0.2em 0.5em;
}

.infobox th,
.infobox td {
  border: 1px solid #a2a9b1;
  vertical-align: top;
}

/* 深色模式 */
[data-theme="dark"] .infobox {
  background-color: #1a1a2e;
  border-color: #444;
  color: #e0e0e0;
}

[data-theme="dark"] .infobox th {
  background-color: #2a2a3e;
  border-color: #555;
}

[data-theme="dark"] .infobox td {
  border-color: #444;
}

/* 移动端适配（小屏时取消浮动，撑满宽度） */
@media screen and (max-width: 640px) {
  .infobox {
    float: none;
    width: 100%;
    max-width: 100%;
    margin: 1em 0;
  }
}

/* ===== MediaWiki 风格 hatnote ===== */
.hatnote {
  font-style: italic;
  font-size: 90%;
  color: #54595d;
  padding: 0.4em 0 0.4em 1.6em;
  margin: 0.5em 0;
  border-left: 3px solid #a2a9b1;
  background-color: #f8f9fa;
  border-radius: 0 4px 4px 0;
}

.hatnote a {
  color: #0645ad;
}

[data-theme="dark"] .hatnote {
  color: #a2a9b1;
  border-left-color: #555;
  background-color: #1e1e32;
}

[data-theme="dark"] .hatnote a {
  color: #6db3f2;
}
```
{% endfolding %}

## 十二、注意事项

1. Markdown 表格请使用 `wikitable` 标签包裹；若直接放在 `<div class="wikitable">` 内，部分 Markdown 渲染器不会渲染其中的表格。
2. 需要排序时传入 `sortable` 参数，标签插件会同时给外层 `div` 和 `<table>` 添加类名，确保 `sorttable.js` 能识别。
3. 深色模式由 `[data-theme="dark"]` 选择器适配；表标题（caption）在深色模式下使用偏黑字色，以保持可读性。
4. infobox 在小屏（640px 以下）会自动取消浮动并撑满宽度。
5. 所有标签语法示例在写作时要使用 `raw` 包裹，否则示例本身会被 Hexo 当作真实标签解析。

## 脚注

[^1]: 太阁检地，正式名称为“文禄・庆长之检地”，始于文禄元年（1592年）。
[^2]: 胁田修『近世封建制成立史论』东京大学出版会、1977年、第3章。