import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ 
    totalCountOfRegisters, 
    registersPerPage = 10, 
    currentPage = 1, 
    onPageChange 
}: PaginationProps){

    const firstPage = 1;
    
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

    const previousPages = currentPage - 1

    const nextPages = currentPage + 1

    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction="row" spacing="2">

                { currentPage > 2 && 
                    <>
                        <PaginationItem onPageChange={onPageChange} key={firstPage} number={firstPage} />
                        { currentPage > 3 && (
                            <Text
                                color="gray.300"
                                w="8"
                                textAlign="center"
                            >...</Text>
                        ) 
                    }
                    </> }
                
                { currentPage > 1 && <PaginationItem onPageChange={onPageChange} key={previousPages} number={previousPages} /> }
                
                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

                { currentPage < lastPage && <PaginationItem onPageChange={onPageChange} key={nextPages} number={nextPages} /> }

                { currentPage < lastPage - 1 && 
                    <>
                        { currentPage < lastPage -2 && (
                            <Text
                                color="gray.300"
                                w="8"
                                textAlign="center"
                            >...</Text>
                        ) }
                        <PaginationItem onPageChange={onPageChange} key={lastPage} number={lastPage} />
                        
                    </> 
                }
                
            </Stack>
            
        </Stack>
    );
}