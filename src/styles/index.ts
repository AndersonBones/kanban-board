import { createStitches } from "@stitches/react";

export const { config,
    styled, globalCss,
    keyframes,
    getCssText,
    theme,

    createTheme } = createStitches({
        media: {
            sm: '(max-width: 35em) ', // 560px
            md: '(max-width: 65em) ', // 1040px
            lg: '(max-width: 72em) ', // 992px
            xl: '(max-width: 80em) ', // 1280px
            '2xl': '(max-width: 96em) ', // 1536px
        },

        theme: {

            colors: {
                white: '#fff',
                gpt_gray: '#212121',
                gray500:"#F1F2F6",
                gray600:"#E5E8ED",
                green: "#50A451",
                gray: "#EFEFEF",
                darkGray: "#4A525A",
                emerald_green:"#116B61",
                emerald_dark_green:"#144341",
                red:"#DE3939"
            },

            fontSizes: {
                sm: '0.80rem',
                md2: '1rem',
                md: '1.125rem',
                lg: '1.25rem',
                lx: '1.5rem',
                '2xl': "2rem"
            },

        }


    })