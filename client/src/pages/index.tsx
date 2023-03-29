import { Typography } from '@mui/material'
import Head from 'next/head'
import { useId } from 'react'

export default function Home() {
  const id = useId()

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>

      <main>
        <Typography component="h1" variant="h1">
          Todo App
        </Typography>
      </main>
    </>
  )
}
