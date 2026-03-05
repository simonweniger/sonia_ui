import { Heading, Highlight, Stack, Text } from '@sonia/ui'

export const HeadingWithHighlight = () => {
  return (
    <Stack>
      <Heading size="3xl" letterSpacing="tight">
        <Highlight query="Sonia UI" styles={{ color: 'accent.solid' }}>
          Build modern SaaS applications with Sonia UI
        </Highlight>
      </Heading>
      <Text fontSize="md" color="fg.muted">
        Sonia UI provides enterprise-ready components and patterns to help you
        build professional applications faster than ever.
      </Text>
    </Stack>
  )
}
