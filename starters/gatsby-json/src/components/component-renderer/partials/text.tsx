import { CodeSnippet } from '@microsoft/arbutus.code-snippet';
import { Divider } from '@microsoft/arbutus.divider';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text as ArbutusText } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';
import Markdown from 'react-markdown';

import { Image } from '../../image';
import type { TextComponentData } from '../component-renderer.types';

type TextProps = TextComponentData;

export const TextComponent: FC<TextProps> = (data) => {
  const {
    childMarkdownRemark: { rawMarkdownBody },
  } = data;

  if (!rawMarkdownBody) {
    return null;
  }

  return (
    <Markdown
      components={{
        h1: ({ children }) => (
          <ArbutusText as="h1" variant="jumbo" block>
            {children}
          </ArbutusText>
        ),
        h2: ({ children }) => (
          <ArbutusText as="h2" variant="title" block>
            {children}
          </ArbutusText>
        ),
        h3: ({ children }) => (
          <ArbutusText as="h3" variant="subtitle" block>
            {children}
          </ArbutusText>
        ),
        h4: ({ children }) => (
          <ArbutusText as="h4" variant="headline" block>
            {children}
          </ArbutusText>
        ),
        h5: ({ children }) => (
          <ArbutusText as="h5" variant="leading" block>
            {children}
          </ArbutusText>
        ),
        h6: ({ children }) => (
          <ArbutusText as="h6" variant="caption" block>
            {children}
          </ArbutusText>
        ),
        img: ({ src, alt }) => <Image isRounded src={src} alt={alt} />,
        p: ({ children }) => (
          <ArbutusText block as="p" variant="paragraph">
            {children}
          </ArbutusText>
        ),
        strong: ({ children }) => <ArbutusText variant="caption">{children}</ArbutusText>,
        ul: ({ children }) => <MarkList>{children}</MarkList>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        li: ({ children, ordered, index }) =>
          ordered ? (
            <OrderedListItem __index={index + 1}>{children}</OrderedListItem>
          ) : (
            <MarkListItem>{children}</MarkListItem>
          ),
        hr: () => <Divider />,
        code: ({ children, node, className }) => {
          const match = /language-(\w+)/.exec(className ?? '');
          const isMultiline = node?.position?.start.line !== node?.position?.end.line;

          return isMultiline ? (
            // @ts-ignore-next-line Value does exist in markdown AST.
            <CodeSnippet code={node?.children[0]?.value ?? ''} language={match[1]} /> // eslint-disable-line @typescript-eslint/no-unsafe-assignment -- Value does exist in markdown AST.
          ) : (
            <code>
              <ArbutusText variant="code">{children}</ArbutusText>
            </code>
          );
        },
      }}
    >
      {rawMarkdownBody}
    </Markdown>
  );
};
