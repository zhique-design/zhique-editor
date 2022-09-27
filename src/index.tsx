import React, { Component } from 'react';
import classNames from 'classnames';
import {  EditorConfiguration } from 'codemirror';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import CodeBlock from '@/CodeBlock';
import Markdown from '@/Markdown';


import './index.less';

interface MarkdownEditorProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  fullScreen?: boolean;
  watch?: boolean;
  cmOptions?: EditorConfiguration;
}

type EditorUIProps = {
  watch?: boolean;
  fullScreen?: boolean;

}

@observer
class MarkdownEditor extends Component<MarkdownEditorProps> {

  static defaultProps = {
    watch: true,
  }

  @observable text?: string;

  @observable editorUIProps: EditorUIProps;

  constructor(props: MarkdownEditorProps | Readonly<MarkdownEditorProps>) {
    super(props);
    const { value, watch, fullScreen } = this.props;
    this.text = value;
    this.editorUIProps = {
      watch,
      fullScreen
    }
  }


  render() {
    const {
      className,
      cmOptions,
      ...rest
    } = this.props;
    const { watch, fullScreen } = this.editorUIProps;
    const cls = classNames('zhique-editor', {
      'zhique-editor-fullscreen': fullScreen
    })
    return (
      <div {...rest} className={cls} style={{ width: '90%' }}>
        <CodeBlock
          value={this.text}
          options={cmOptions}
          onChange={value => {
            this.text = value;
          }}
        />
        {watch && (
          <div className={`zhique-editor-preview`} style={{ width: '50%', height: '100%' }}>
            <div
              className="zhique-editor-preview-container"
            >
              <Markdown value={this.text} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MarkdownEditor;
