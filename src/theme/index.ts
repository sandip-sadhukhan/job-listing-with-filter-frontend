
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        darkCyan: {
            500: "#5ba4a4"
        },
        backgroundCyan: {
            500: "#effafa"
        },
        filterTabletsCyan: {
            500: "#eef6f6"
        },
        grayishCyan: {
            500: "#7b8e8e"
        },
        darkGrayishCyan: {
            500: "#2c3a3a"
        }
    },
    fonts: {
        heading: `'League Spartan', sans-serif`,
        body: `'League Spartan', sans-serif`,
    }
})

export default theme;