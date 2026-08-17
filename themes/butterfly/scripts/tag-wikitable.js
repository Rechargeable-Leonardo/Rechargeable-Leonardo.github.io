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
