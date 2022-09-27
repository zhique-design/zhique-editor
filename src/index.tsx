import React, { Component } from 'react';
import classNames from 'classnames';
import {  EditorConfiguration } from 'codemirror';

import CodeBlock from './CodeBlock';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface MarkdownEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  fullScreen?: boolean;
  cmOptions?: EditorConfiguration;
}

@observer
class MarkdownEditor extends Component<MarkdownEditorProps> {

  static defaultProps = {
    fullScreen: true
  }

  @observable text?: string;

  constructor(props: MarkdownEditorProps | Readonly<MarkdownEditorProps>) {
    super(props);
    const { value } = this.props;
    this.text = value;
  }


  render() {
    const { className, fullScreen, cmOptions, ...rest } = this.props;
    const cls = classNames('zhique-editor', {
      'zhique-editor-fullscreen': fullScreen
    })
    return (
      <div {...rest} className={cls}>
        <CodeBlock
          value={this.text}
          options={cmOptions}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
