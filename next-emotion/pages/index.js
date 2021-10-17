import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const IndexPage = () => (
  <div css={styles.container({ hasBackground: false })}>
    <h1 tw="text-ribbon">HI</h1>
    <h1 tw="text-cust-cust1">HI</h1>
    <h1 tw="text-cust-cust2">HI</h1>
    <Logo />
  </div>
)

export default IndexPage
