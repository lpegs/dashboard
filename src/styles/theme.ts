import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        gray: {
            "400": "#929292",
            "800": "#292929",
            "900": "#161616",
        }
    },
    fonts: {
        heading: "Roboto",
        body: "Roboto",
    },
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "gray.50",
                
            }
        }
    }
})