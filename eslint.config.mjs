// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'

export default withNuxt(
    {
        plugins: {
            '@stylistic': stylistic,
            perfectionist
        },
        rules: {
            // TypeScript / JavaScript
            '@stylistic/indent': ['error', 4],
            '@stylistic/member-delimiter-style': [
                'error',
                {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false
                    }
                }
            ],

            'perfectionist/sort-interfaces': ['error'],
            // Vue templates
            'vue/html-indent': ['error', 4]
        },
        settings: {
            perfectionist: {
                partitionByComment: true,
                type: 'line-length'
            }
        }
    }
)
