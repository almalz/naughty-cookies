import { As, Heading } from '@chakra-ui/react'
import clsx from 'clsx'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGemoji from 'remark-gemoji'

export type TypographyProps = {
  as?: As
  markdown?: boolean
  className?: string
}

export const Markdown: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <ReactMarkdown
    remarkPlugins={[remarkGemoji]}
    className={'markdown ' + className}
  >
    {(children as string).replaceAll('<br>', '')}
  </ReactMarkdown>
)

export const Subtitle: React.FC<TypographyProps> = ({ children, as }) => (
  <Heading className="font-subtitle text-5xl" as={as}>
    {children}
  </Heading>
)

export const H1: React.FC<TypographyProps> = ({ children }) => (
  <h1 className="font-title text-4xl">{children}</h1>
)

export const H2: React.FC<TypographyProps> = ({ children }) => (
  <h2 className="font-body text-3xl font-bold">{children}</h2>
)

export const H3: React.FC<TypographyProps> = ({ children }) => (
  <h3 className="font-body text-xl font-bold">{children}</h3>
)

export const Paragraph: React.FC<TypographyProps> = ({
  children,
  markdown,
  className,
}) => (
  <>
    {markdown ? (
      <Markdown className={clsx(className, 'font-body text-sm sm:text-base')}>
        {children}
      </Markdown>
    ) : (
      <p className={clsx(className, 'font-body text-sm sm:text-base')}>
        {children}
      </p>
    )}
  </>
)

export const ParagraphLg: React.FC<TypographyProps> = ({
  children,
  markdown,
  className,
}) => (
  <>
    {markdown ? (
      <Markdown className={clsx(className, 'font-body text-base sm:text-lg')}>
        {children}
      </Markdown>
    ) : (
      <p className={clsx(className, 'font-body text-base sm:text-lg')}>
        {children}
      </p>
    )}
  </>
)

export const ParagraphXl: React.FC<TypographyProps> = ({
  children,
  markdown,
}) => (
  <>
    {markdown ? (
      <Markdown className="font-body text-xl sm:text-2xl">{children}</Markdown>
    ) : (
      <p className="font-body text-xl sm:text-2xl">{children}</p>
    )}
  </>
)

export const Paragraph2Xl: React.FC<TypographyProps> = ({
  children,
  markdown,
}) => (
  <>
    {markdown ? (
      <Markdown className="font-body text-2xl sm:text-3xl">{children}</Markdown>
    ) : (
      <p className="font-body text-2xl sm:text-3xl">{children}</p>
    )}
  </>
)
