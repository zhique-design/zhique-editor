zhique-editor
======================
[![Build Status](https://app.travis-ci.com/zhique-design/zhique-editor.svg?branch=master)](https://app.travis-ci.com/zhique-design/zhique-editor)
[![Build Status](https://github.com/zhique-design/zhique-editor/actions/workflows/gh-pages.yml/badge.svg?branch=master)](https://zhique-design.github.io/zhique-editor)


**zhique-editor** : The open source online code editor (component), based on [react](https://reactjs.org/ "react") & [react-markdown](http://rexxars.github.io/react-markdown/ "react-markdown") & [codemirror](https://codemirror.net/ "codemirror").

## Features

- Support Standard Markdown / CommonMark and GFM (GitHub Flavored Markdown)
- Real-time Preview, Code fold, Code syntax highlighting...
- Synchronized scrolling

## Installing

- npm

```
npm install zhique-editor codemirror@^5.65.9 github-markdown-css
```

- yarn

```
yarn add zhique-editor codemirror@^5.65.9 github-markdown-css
```

------------
MarkdownEditor
--------------
1. **Basic usage**

  ```typescript jsx
  import React from 'react';
  import ReactDom from 'react-dom';
  import { MarkdownEditor } from 'zhique-editor';
  import 'codemirror/lib/codemirror';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/mode/gfm/gfm';
  import 'github-markdown-css/github-markdown.css';
  ReactDom.render(<MarkdownEditor />, document.getElementById('app'));
  ```
2. **props**

  |  prop	 | description | type  | default  |
  | :------------: | :------------: | :------------: | :------------: |
  |  `width` |  component width |  string or number |  `90%` |
  |  `height` |  component height |  string or number | `500`  |
  |  `watch` |  Real-time Preview |  bool | `true`  |
  |  `fullScreen` |  fullScreen mode |  bool |  `false` |
  |  `value` | component value  |  string | `''`  |
  | `options` | the options of codeMirror | object | - |
  |  `onChange` |  the component value has been changed |  function(value) |  - |

4. **options**

  ```clike
  {
    mode: 'gfm',
    theme: 'default',
    lineWrapping: true,
    lineNumbers: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    matchBrackets: true,
    autofocus: true,
    autoCloseBrackets: true,
    matchTags: true,
    autoCloseTags: true,
    styleActiveLine: true,
    styleSelectedText: true
  }
  ```
  click [codemirror configuration](https://codemirror.net/doc/manual.html#config "codemirror configuration") for more info.
