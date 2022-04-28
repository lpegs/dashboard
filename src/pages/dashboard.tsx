import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
})

const options = {
    colors: [
        "#4FD1C5",
    ],
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[400],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: "datetime",
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            "2022-04-26T00:00:00.000Z",
            "2022-04-27T00:00:00.000Z",
            "2022-04-28T00:00:00.000Z",
            "2022-04-29T00:00:00.000Z",
            "2022-04-30T00:00:00.000Z",
            "2022-05-01T00:00:00.000Z",
            "2022-05-02T00:00:00.000Z",
        ],
    },
    fill: {
        opacity: 0.3,
        type: "gradient",
        gradient: {
            shade: "dark",
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
};
const series = [
    {
        name: "series01",
        data: [31, 120, 30, 28, 51, 59, 100]
    }
];

export default function Dashboard(){
    return (
        <Flex direction="column" h="100vh">

            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px">

                    <Box p={["5", "8"]} bg="gray.800" borderRadius="8">
                        <Text fontSize="lg" mb="4">Week subscribers</Text>
                        <Chart options={options} series={series} type="area" h={160} />
                    </Box>

                    <Box p={["5", "8"]} bg="gray.800" borderRadius="8">
                        <Text fontSize="lg" mb="4">Opening rate</Text>
                        <Chart options={options} series={series} type="area" h={160} />

                    </Box>  

                </SimpleGrid>

            </Flex>
        </Flex>
    )
}