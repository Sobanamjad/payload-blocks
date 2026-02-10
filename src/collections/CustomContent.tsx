// collections/CustomContent.tsx

import { CollectionConfig } from 'payload'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import  AddBlockHelper  from '../components/AddBlockHelper'   // ← yahan import karo

export const CustomContent: CollectionConfig = {
  slug: 'custom-content',
  labels: {
    singular: 'Custom Content',
    plural: 'Custom Contents',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout',
      required: true,
      blocks: [
        {
          slug: 'richText',
          labels: {
            singular: 'Rich Text',
            plural: 'Rich Text Sections',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              required: true,
              label: 'Content',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures.filter(f => f.key !== 'inlineToolbar'),
                  FixedToolbarFeature(),
                ],
              }),
            },

            {
              name: 'addBlockHelper',
              type: 'ui',
              admin: {
                components: {
                  Field: AddBlockHelper as any   // ← imported component ka naam
                }
              }
            }
          ]
        },

        // hero aur cta blocks...
        {
          slug: 'hero',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'richText' }
          ]
        },
        {
          slug: 'cta',
          fields: [
            { name: 'text', type: 'text' },
            { name: 'buttonLabel', type: 'text' },
            { name: 'buttonUrl', type: 'text' }
          ]
        }
      ]
    }
  ]
}