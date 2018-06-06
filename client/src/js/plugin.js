/**
 * HtmlEditorStylingHook plugin.js
 */

/* global jQuery, tinymce */

(function ($, tinymce) {
  tinymce.create('tinymce.plugins.HtmlEditorStylingHook', {
    init: function (ed) {
      let formField = $('#' + ed.id);

      if (formField.length && formField.attr('data-mce-body-class')) {
        ed.settings.body_class = ed.settings.body_class + ' ' + formField.attr('data-mce-body-class');
      }
    },

    getInfo: function () {
      return {
        longname: 'HtmlEditorStylingHook',
        author: 'Loz Calver',
        authorurl: 'https://github.com/kinglozzer',
        version: tinymce.majorVersion + "." + tinymce.minorVersion
      };
    }
  });

  // Register plugin
  tinymce.PluginManager.add('htmleditorstylinghook', tinymce.plugins.HtmlEditorStylingHook);
})(jQuery, tinymce);
