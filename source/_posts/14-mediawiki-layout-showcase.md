---
title: MediaWiki 风格排版演示
date: 2026-08-17 19:45:00
updated: 2026-08-17 19:45:00
tags: [站点相关, 排版]
categories: [站点相关]
cover: /img/default-banner.png
description: 本站 MediaWiki 风格排版方案的效果演示，包括 wikitable 表格、可排序表格、infobox 信息框、hatnote 顶注、note 提示框、折叠面板与脚注引用。
toc: true
---

>需要注意，该文档相当程度使用AI生成，定位为展示用文档  
>但这句确实是我手写的。

<p class="hatnote">本页用于集中展示本站已启用的 MediaWiki 风格排版元素：wikitable 表格、可排序表格（点击表头排序）、infobox 信息框、hatnote 顶注、note 提示框、折叠面板与脚注引用。</p>

## 一、Infobox 信息框

<table class="infobox">
  <caption>令制国石高制度</caption>
  <tr><th>起源</th><td>太阁检地（文禄元年／1592年）</td></tr>
  <tr><th>确立</th><td>江户幕府（庆长年间）</td></tr>
  <tr><th>废除</th><td>明治4年（1871年）废藩置县</td></tr>
  <tr><th>计算单位</th><td>石（大米单位）</td></tr>
</table>

石高制是日本近世（安土桃山～江户时代）的土地生产力表示制度[^1]。太阁检地在文禄年间对全国土地进行丈量，以稻米产量评定土地价值，并在此基础上确立了兵役、赋税与知行分配的标准[^2]。

## 二、wikitable 表格

下方表格由 `wikitable` 标签渲染，与 MediaWiki 的 `wikitable` 外观一致：

{% wikitable 江户幕府历代将军天领石高 %}
| 将军     | 时期     | 天领石高（石） | 占全国比例 |
|----------|----------|---------------|-----------|
| 德川家康 | 庆长年间 | 约2,000,000   | 约10%     |
| 德川家光 | 宽永年间 | 约4,000,000   | 约15%     |
| 德川吉宗 | 享保年间 | 约4,500,000   | 约17%     |
{% endwikitable %}

## 三、wikitable sortable 可排序表格

点击表头即可按该列排序：

{% wikitable sortable 令制国主要数据对比 %}
| 国名   | 石高（石） | 郡数 | 所属道 | 对应现代地区   |
|--------|-----------|------|--------|----------------|
| 陆奥国 | 1,672,806 | 35   | 东山道 | 东北地方       |
| 武藏国 | 1,112,700 | 22   | 东海道 | 东京都、埼玉县 |
| 近江国 | 832,088   | 12   | 东山道 | 滋贺县         |
| 大和国 | 469,368   | 15   | 畿内   | 奈良县         |
{% endwikitable %}

## 四、note 提示框

{% note info %}
江户幕府直辖领（天领／てんりょう）约400万石，占全国总石高约15%，分布在全国各地，因此也被称为“飞地天领”。
{% endnote %}

{% note warning %}
石高数并非完全准确反映实际生产力。江户中期以后，新田开发导致“表高”（公称石高）与“实高”（实际产量）的差距日益扩大。
{% endnote %}

## 五、折叠面板

{% folding 点击查看：本方案的实现文件 %}
- `source/css/wikitable.css`：wikitable、infobox、hatnote 全套 CSS
- `source/js/sorttable.js`：本地托管的可排序表格脚本
- `themes/butterfly/scripts/tag-wikitable.js`：wikitable 标签插件
{% endfolding %}

## 脚注

[^1]: 太阁检地，正式名称为“文禄・庆长之检地”，始于文禄元年（1592年）。
[^2]: 胁田修『近世封建制成立史论』东京大学出版会、1977年、第3章。
