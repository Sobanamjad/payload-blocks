// src/collection/Pages.tsx
import { CollectionConfig } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { ContentWithMedia } from '../blocks/ContentWithMedia';


const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
        },
        {
            name: 'layout',
            type: 'blocks',
            required: false,
            blocks: [
                {
                    slug: 'hero',
                    fields: [
                        {
                            name: 'heading',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'subheading',
                            type: 'richText',
                            required: true,
                        },
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'cta_button',
                            label: 'CTA Button',
                            type: 'group',
                            required: true,
                            fields: [
                                {
                                    name: 'label',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'url',
                                    type: 'text',
                                    required: true,
                                }
                            ]
                        },
                    ]
                },

                {
                    slug: 'text-content',          
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'content',
                            type: 'richText',
                            required: true,
                            editor: lexicalEditor({
                                features: ({defaultFeatures}) => [
                                    ...defaultFeatures,
                                    BlocksFeature({
                                        blocks: [ContentWithMedia],
                                    }),
                                    FixedToolbarFeature()
                                ]
                            })
                        },
                    ]
                },
                {
                    slug: 'image-gallery',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            minRows: 1,
                            maxRows: 6,
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: false
                                },
                                {
                                    name: 'caption',
                                    type: 'text'
                                }
                            ]
                        }
                    ]
                },
                //  Block Innside Block
                {
                    slug: 'Car-image-gallery',
                    fields: [
                        {
                            name: 'items',
                            type: 'array',
                            minRows: 1,
                            maxRows: 6,
                            fields: [
                                {
                                    name: 'image',
                                    type: 'upload',
                                    relationTo: 'media',
                                    required: false,
                                },
                                {
                                    name: 'caption',
                                    type: 'text',
                                },
                                {
                                    name: 'content',
                                    type: 'blocks',
                                    blocks: [
                                        {
                                            slug: 'text-block',
                                            fields: [
                                                {
                                                    name: 'text',
                                                    type: 'richText',
                                                },
                                            ],
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    slug: 'contact-form',
                    fields: [
                        {
                            name: 'heading',
                            type: 'text',
                        },
                        {
                            name: 'description',
                            type: 'textarea',
                        },
                        {
                            name: 'formFields',
                            type: 'blocks',
                            blocks: [
                                {
                                    slug: 'inputField',
                                    fields: [
                                        {
                                            name: 'label',
                                            type: 'text',
                                        },
                                        {
                                            name: 'name',
                                            type: 'text',
                                        },
                                        {
                                            name: 'type',
                                            type: 'select',
                                            options: [
                                                {
                                                    label: 'Text',
                                                    value: 'text',
                                                },
                                                {
                                                    label: 'Email',
                                                    value: 'email',
                                                },
                                                {
                                                    label: 'Number',
                                                    value: 'number',
                                                },
                                            ],
                                            // overall required kyny ky liya 
                                            // required: true
                                        },
                                        {
                                            name: 'required',
                                            type: 'checkbox',
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            name: 'submitButtonLabel',
                            type: 'text',
                            defaultValue: 'Send',
                        },
                    ],
                },
                // {
                //     slug: 'richText',
                //     fields: [
                //         {
                //             name: 'content',
                //             type: 'richText',
                //             required: true,
                //             label: 'Content',

                //             editor: lexicalEditor({
                //                 features: ({ defaultFeatures }) => [
                //                     ...defaultFeatures.filter(f => f.key !== 'inlineToolbar'), // floating/select pe aane wala toolbar hata rahe hain (optional)
                //                     FixedToolbarFeature(),                                     // permanent upar wala toolbar on kar rahe hain

                //                 ],
                //             }),
                //         },
                //     ],
                // }
                // {
                //   slug: 'richText',
                //   fields: [
                //     {
                //       name: 'content',
                //       type: 'richText',
                //       required: true,
                //       label: 'Content',

                //       // Use shared rich text editor config with custom node + + toolbar
                //       editor: CustomRichTextEditor,
                //     },
                //   ],
                // }
            ]
        },

    ]
}

export default Pages