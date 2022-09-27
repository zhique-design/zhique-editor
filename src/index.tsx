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
  width?: string | number;
  height?: string | number;
  fullScreen?: boolean;
  watch?: boolean;
  cmOptions?: EditorConfiguration;
}

type EditorUIProps = {
  width?: string | number;
  height?: string | number;
  watch?: boolean;
  fullScreen?: boolean;
}

@observer
class MarkdownEditor extends Component<MarkdownEditorProps> {

  static defaultProps = {
    width: '90%',
    height: 500,
    watch: true,
  }

  @observable text?: string;

  @observable editorUIProps: EditorUIProps;

  previewBlock: HTMLDivElement | null = null;
  codeBlock: CodeBlock | null = null;

  constructor(props: MarkdownEditorProps | Readonly<MarkdownEditorProps>) {
    super(props);
    const { value, watch, fullScreen, width, height } = this.props;
    this.text = value;
    this.editorUIProps = {
      width,
      height,
      watch,
      fullScreen
    }
  }

  /**
   * 处理编辑器值得变化
   * @param value 编辑器值
   */
  handleCodeBlockValueChange = value => {
    this.text = value;
    const { onChange } = this.props;
    if (onChange) onChange(value);
  }

  /**
   * 当编辑器滚动时，预览部分同步滚动
   * @param top 编辑器滚动位置
   * @param scrollHeight 编辑器滚动高度
   * @param height 编辑器高度
   * @param percent 编辑器滚动百分比
   */
  previewBlockSyncScroll = (top, scrollHeight, height, percent) => {
    const { watch } = this.editorUIProps;
    if (watch) {
      if (top === 0) {
        this.previewBlock?.scrollTo({ top: 0 });
      } else if (top + height >= scrollHeight - 16) {
        this.previewBlock?.scrollTo({ top: this.previewBlock?.scrollHeight });
      } else {
        this.previewBlock?.scrollTo({
          top: this.previewBlock?.scrollHeight * percent,
        });
      }
    }
  }

  /**
   * 编辑器同步滚动
   */
  codeBlockSyncScroll = () => {
    if (this.previewBlock) {
      const { clientHeight: height, scrollTop, scrollHeight } = this.previewBlock;
      const percent = scrollTop / scrollHeight;
      const codeScroller = this.codeBlock?.cm?.display.scroller;
      if (codeScroller) {
        if (scrollTop === 0) {
          codeScroller.scrollTop = 0;
        } else if (scrollTop + height >= scrollHeight) {
          codeScroller.scrollTop = codeScroller.scrollHeight;
        } else {
          codeScroller.scrollTop = codeScroller.scrollHeight * percent;
        }
      }
    }
  };

  /**
   * 绑定滚动事件
   */
  bindSyncScroll = () => {
    this.previewBlock?.addEventListener('scroll', this.codeBlockSyncScroll);
  };

  /**
   * 卸载滚动事件
   */
  unbindSyncScroll = () => {
    this.previewBlock?.removeEventListener('scroll', this.codeBlockSyncScroll);
  };


  render() {
    const {
      className,
      cmOptions,
      ...rest
    } = this.props;
    const { watch, fullScreen, width, height } = this.editorUIProps;
    const cls = classNames('zhique-editor', {
      'zhique-editor-fullscreen': fullScreen
    })
    const styles = {
      width: fullScreen ? window.innerWidth : width,
      height: fullScreen ? window.innerHeight : height
    }
    return (
      <div {...rest} className={cls} style={styles}>
        <CodeBlock
          value={this.text}
          options={cmOptions}
          onChange={this.handleCodeBlockValueChange}
          onCmScroll={this.previewBlockSyncScroll}
          ref={(node) => {
            this.codeBlock = node;
          }}
        />
        {watch && (
          <div
            className={`zhique-editor-preview`}
            style={{ width: '50%', height: '100%' }}
            ref={(node) => {
              this.previewBlock = node;
            }}
            onMouseOver={this.bindSyncScroll}
            onTouchStart={this.bindSyncScroll}
            onMouseOut={this.unbindSyncScroll}
            onTouchEnd={this.unbindSyncScroll}
          >
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
