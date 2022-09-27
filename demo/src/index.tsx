import React from 'react';
import ReactDom from 'react-dom';

import { MarkdownEditor } from '../../src';

import 'github-markdown-css/github-markdown-light.css';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';

ReactDom.render(<MarkdownEditor cmOptions={{ mode: 'gfm' }} />, document.getElementById('root'));
