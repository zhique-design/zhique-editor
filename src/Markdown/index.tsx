import React, { PureComponent } from 'react';
import ReactMarkdown, { ReactMarkdownPropsBase } from 'react-markdown';
import gfm from 'remark-gfm';
import Code from './renderer/Code';

interface MarkdownProps extends ReactMarkdownPropsBase {
  readonly value?: string;
  className?: string;
  linkTarget?: string;
}

class Markdown extends PureComponent<MarkdownProps> {
  static defaultProps = {
    className: 'markdown-body',
    linkTarget: '_blank',
  };

  render() {
    const { value, ...rest } = this.props;
    return (
      <ReactMarkdown
        plugins={[gfm]}
        renderers={{
          code: Code,
        }}
        {...rest}
      >
        {value || ''}
      </ReactMarkdown>
    );
  }
}

export default Markdown;
