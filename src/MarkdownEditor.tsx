import React, { Component } from 'react';
import classNames from 'classnames';
import CodeMirror, {  EditorConfiguration } from 'codemirror';
import { observer } from 'mobx-react';
import { makeObservable, observable } from 'mobx';
import moment from 'moment';
import CodeBlock from './CodeBlock';
import Markdown from './Markdown';
import Icon from './Icon';

import './assets/iconfont';

import './index.less';

interface menuItemConfig {
  title: string;
  icon?: string;
  text?: string;
  // @ts-ignore
  onClick: (event: MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export type MenuListConfig = Array<menuItemConfig | '|'>;

interface MarkdownEditorProps {
  value?: string;
  width?: string | number;
  height?: string | number;
  fullScreen?: boolean;
  watch?: boolean;
  cmOptions?: EditorConfiguration;
  className?: string;
  onChange?: (value) => void;
  menuList?: (cm?: CodeMirror) => MenuListConfig;
  dateFormat?: string;
}

type EditorUIProps = {
  width?: string | number;
  height?: string | number;
  watch?: boolean;
  fullScreen?: boolean;
  toolBarHeight?: number;
}

@observer
export default class MarkdownEditor extends Component<MarkdownEditorProps> {

  static defaultProps = {
    width: '90%',
    height: 500,
    watch: true,
    dateFormat: 'YYYY年MM月DD日 dddd'
  }

  text?: string;

  editorUIProps: EditorUIProps;

  previewBlock: HTMLDivElement | null = null;
  codeBlock: CodeBlock | null = null;
  toolbar: HTMLDivElement | null = null;

  constructor(props: MarkdownEditorProps | Readonly<MarkdownEditorProps>) {
    super(props);
    const { value, watch, fullScreen, width, height } = this.props;
    this.text = value;
    this.editorUIProps = {
      width,
      height,
      watch,
      fullScreen
    };
    makeObservable(this, {
      text: observable,
      editorUIProps: observable
    })
  }

  componentDidMount() {
    if (this.toolbar) {
      this.editorUIProps.toolBarHeight = this.toolbar.clientHeight;
    }
  }

  get menuList(): MenuListConfig {
    const { menuList } = this.props;
    const cm = this.codeBlock?.cm;
    const { watch, fullScreen } = this.editorUIProps;
    const defaultMenuList: MenuListConfig = [
      {
        title: '撤销（Ctrl+Z）',
        icon: 'undo',
        onClick: () => {
          cm.focus();
          cm.undo();
        },
      },
      {
        title: '重做（Ctrl+Y）',
        icon: 'redo',
        onClick: () => {
          cm.focus();
          cm.redo();
        },
      },
      '|',
      {
        title: '粗体',
        icon: 'bold',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          cm.replaceSelection(`**${selection}**`);
          if (selection === '') {
            cm.setCursor(cursor.line, cursor.ch + 2);
          }
        },
      },
      {
        title: '删除线',
        icon: 'strikethrough',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          cm.replaceSelection(`~~${selection}~~`);

          if (selection === '') {
            cm.setCursor(cursor.line, cursor.ch + 2);
          }
        },
      },
      {
        title: '斜体',
        icon: 'italic',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          cm.replaceSelection(`*${selection}*`);
          if (selection === '') {
            cm.setCursor(cursor.line, cursor.ch + 1);
          }
        },
      },
      {
        title: '引用',
        icon: 'quote-left',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`> ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 2);
          } else {
            cm.replaceSelection(`> ${selection}`);
          }
        },
      },
      {
        title: '将每个单词首字母转成大写',
        text: 'Aa',
        onClick: () => {
          cm.focus();
          const selection = cm.getSelection();
          const selections = cm.listSelections();
          cm.replaceSelection(
            selection.toLowerCase().replace(/\b(\w)|\s(\w)/g, (char) => {
              return char.toUpperCase();
            })
          );
          cm.setSelections(selections);
        },
      },
      {
        title: '将所选转换成大写',
        text: 'A',
        onClick: () => {
          cm.focus();
          const selection = cm.getSelection();
          const selections = cm.listSelections();
          cm.replaceSelection(selection.toUpperCase());
          cm.setSelections(selections);
        },
      },
      {
        title: '将所选转换成小写',
        text: 'a',
        onClick: () => {
          cm.focus();
          const selection = cm.getSelection();
          const selections = cm.listSelections();
          cm.replaceSelection(selection.toLowerCase());
          cm.setSelections(selections);
        },
      },
      '|',
      {
        title: '标题1',
        text: 'h1',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`# ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 2);
          } else {
            cm.replaceSelection(`# ${selection}`);
          }
        },
      },
      {
        title: '标题2',
        text: 'h2',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`## ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 3);
          } else {
            cm.replaceSelection(`## ${selection}`);
          }
        },
      },
      {
        title: '标题3',
        text: 'h3',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`### ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 4);
          } else {
            cm.replaceSelection(`### ${selection}`);
          }
        },
      },
      {
        title: '标题4',
        text: 'h4',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`#### ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 5);
          } else {
            cm.replaceSelection(`#### ${selection}`);
          }
        },
      },
      {
        title: '标题5',
        text: 'h5',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`##### ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 6);
          } else {
            cm.replaceSelection(`##### ${selection}`);
          }
        },
      },
      {
        title: '标题6',
        text: 'h6',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          const selection = cm.getSelection();
          if (cursor.ch !== 0) {
            cm.setCursor(cursor.line, 0);
            cm.replaceSelection(`###### ${selection}`);
            cm.setCursor(cursor.line, cursor.ch + 7);
          } else {
            cm.replaceSelection(`###### ${selection}`);
          }
        },
      },
      '|',
      {
        title: '无序列表',
        icon: 'unorderedlist',
        onClick: () => {
          cm.focus();
          const selection = cm.getSelection();
          if (selection === '') {
            cm.replaceSelection(`- ${selection}`);
          } else {
            let selectionText = selection.split('\n');
            selectionText = selectionText.map((item) =>
              item === '' ? '' : `- ${item}`
            );
            cm.replaceSelection(selectionText.join('\n'));
          }
        },
      },
      {
        title: '有序列表',
        icon: 'orderedlist',
        onClick: () => {
          cm.focus();
          const selection = cm.getSelection();
          if (selection === '') {
            cm.replaceSelection(`1. ${selection}`);
          } else {
            let selectionText = selection.split('\n');
            selectionText = selectionText.map((item, index) =>
              item === '' ? '' : `${index + 1}. ${item}`
            );
            cm.replaceSelection(selectionText.join('\n'));
          }
        },
      },
      {
        title: '横线',
        icon: 'minus',
        onClick: () => {
          cm.focus();
          const cursor = cm.getCursor();
          cm.replaceSelection(
            `${cursor.ch !== 0 ? '\n\n' : '\n'}------------\n\n`
          );
        },
      },
      '|',
      {
        title: '日期时间',
        icon: 'time-circle',
        onClick: () => {
          const { dateFormat } = this.props;
          cm.focus();
          moment.locale(navigator.language);
          cm.replaceSelection(moment().format(dateFormat));
        }
      },
      '|',
      {
        title: fullScreen ? '退出全屏' : '全屏（按ESC还原）',
        icon: `fullscreen${fullScreen ? '-exit' : ''}`,
        onClick: () => {
          this.editorUIProps.fullScreen = !fullScreen;
        },
      },
      {
        title: `${watch ? '关闭' : '开启'}实时预览`,
        icon: `eye${watch ? '-close' : ''}`,
        onClick: () => {
          this.editorUIProps.watch = !watch;
        },
      },
    ];
    if (menuList) return [...defaultMenuList, ...menuList(cm)];
    return defaultMenuList;
  }

  /**
   * 初始化工具栏
   */
  initToolbar = () => {
    return (
      <ul className="zhique-editor-menu">
        {this.menuList.map((item, index) => {
          if (item == '|') {
            return (
              <li className={classNames('"menu-item', 'divider')} key={`menu-item-${index}`} />
            );
          }
          const { title, icon, onClick, text } = item;
          return (
            <li key={`menu-item-${index}`} onClick={onClick} title={title}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="menu-item">
                {icon ? <Icon type={icon} /> : text}
              </a>
            </li>
          );
        })}
      </ul>
    )
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
      cmOptions,
    } = this.props;
    const { watch, fullScreen, width, height, toolBarHeight } = this.editorUIProps;
    const cls = classNames('zhique-editor', {
      'zhique-editor-fullscreen': fullScreen
    })
    const styles = {
      width: fullScreen ? window.innerWidth : width,
      height: fullScreen
        ? toolBarHeight
          ? window.innerHeight - toolBarHeight
          : window.innerHeight
        : height,
      paddingTop: toolBarHeight,
    }
    return (
      <div className={cls} style={styles}>
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
        <div
          className="zhique-editor-toolbar"
          ref={(node) => {
            this.toolbar = node;
          }}
        >
          <div className="zhique-editor-toolbar-container">
            {this.initToolbar()}
          </div>
        </div>
      </div>
    );
  }
}

