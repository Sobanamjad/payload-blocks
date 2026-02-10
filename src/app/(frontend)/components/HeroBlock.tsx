//  src/app/(frontent)/components/heroblock.tsx
import { Page } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'

export default function Heroblock({ block }: { block: Page['layout'][0]}) {
    return (
    <div>
        <h1>{block.heading}</h1>
        <RichText data={block.subheading}/>
        { typeof block?.image === 'object' && block.image.url && (
        <Image src={block.image.url} alt={block.image.alt} width={600} height={800} priority/>
        )}
        <a href={block.cta_button.url}>{block.cta_button.label}</a>
    </div>
    )
}