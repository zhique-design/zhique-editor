import React from 'react';
import ReactDom from 'react-dom';

import MarkdownEditor from '../../src';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';

ReactDom.render(<MarkdownEditor  cmOptions={{ mode: 'gfm' }} value="# 123" />, document.getElementById('root'));
