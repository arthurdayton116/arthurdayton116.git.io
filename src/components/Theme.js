// https://coolors.co/993955-ae76a6-a3c3d9-ccd6eb-e9ecf5
const primarybackground = '#a3c3d9'
const primarydarkshade1 = '#305873'
const primarydarkshade2 = '#6EA2C4'
const primarytext = '#e9ecf5'
const primarytexthover = '#ccd6eb'
const primaryFontFamily = 'Arial, sans-serif'

export default {
    breakpoints: ['599px','900px','1200px'],
    fontSizes: [
        12, 14, 16, 24, 32, 48, 64
    ],
    fontFamily: primaryFontFamily,
    colors: {
        primary: '#007bff',
        background: '#e9ecf5',
    },
    navbar: {
        background: primarybackground,
        text: primarytext,
        hover: primarytexthover,
    },
    h1: {
        text: primarydarkshade2,
    },
    h4: {
        text: primarydarkshade1,
    },
    text: {
        primary: '#007bff',
        background: '#e9ecf5',
    },
    buttons: {
        primary: {
            color: 'blue',
            bg: 'primary',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 2px'
        },
    },
    variants : {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 9999,
        }
    }
}
