import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import pages from '@/collections/Pages'
import HeroBlock from './components/HeroBlock'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  const { docs: [page], } = await payload.find({
    collection : 'pages',
    where: {
      slug:  { equals : 'landing-page'},
    },
  })

  const renderBlock = (block: Page['Layout'][0]) => {
    switch(block.blockType) {
      case 'hero':
      return <HeroBlock block={block} key={block.id} />
      default: return null
    }
  }

  if(!page){
    return <div>Page not Found</div>
  }

  return (
    <div >
      {page.title}
      {/* <pre>{JSON.stringify(page.layout[0],null,2)}</pre> */}
      return <div className='page'> {page.layout?.map((block) => renderBlock(block))}</div>
    </div>
  )
}
