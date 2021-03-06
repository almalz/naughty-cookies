import { Heading, HeadingProps, As } from '@chakra-ui/react'

export type HeadingTagType = `h${number}`

export type HProps = {
  tag: HeadingTagType
} & HeadingProps

export const H: React.FC<HProps> = ({ tag, ...props }) => {
  switch (tag) {
    case 'h1':
      return (
        <Heading size="2xl" mb={['24px', '24px', '40px', '40px']} {...props} />
      )
    case 'h2':
      return (
        <Heading size="xl" mb={['8px', '8px', '16px', '32px']} {...props} />
      )
    case 'h3':
      return (
        <Heading
          size="lg"
          mb={['4px', '4px', '8px', '16px']}
          fontWeight="500"
          {...props}
        />
      )
    case 'h4':
      return (
        <Heading
          size="lg"
          mb={['4px', '4px', '8px', '16px']}
          fontWeight="600"
          {...props}
        />
      )
    default:
      return (
        <Heading
          size="lg"
          mb={['4px', '4px', '8px', '16px']}
          fontWeight="500"
          {...props}
        />
      )
  }
}
