import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#003333',
            main: '#003333',
            dark: '#003333',
            contrastText: '#fff'
        },
        secondary: {
            light: '#708090',
            main: '#708090',
            dark: '#708090',
            contrastText: '#fff'
        },
        error: {
            main: red.A400
        },
        background: {
            default: '#708090'
        }
    }
})

export default MyTheme