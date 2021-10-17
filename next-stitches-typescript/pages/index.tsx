import tw, { styled } from 'twin.macro'
import { Logo, Button } from '../components'

const Container = styled.div({
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})

const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`

const IndexPage = () => (
  <Container>
    <h1 tw="text-ribbon">HI</h1>
    <h1 tw="text-cust-cust1">HI</h1>
    <h1 tw="text-cust-cust2">HI</h1>
    <Logo />
  </Container>
)

export default IndexPage
