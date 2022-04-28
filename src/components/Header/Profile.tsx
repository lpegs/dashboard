import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps){
    return (
        <Flex
            align="center"
        >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Filipe Galelli Scaravonatto</Text>
                    <Text color="gray.300" fontSize="small">filipe_smo@hotmail.com</Text>
                </Box>
            ) }

            <Avatar size="md" name="Filipe Scaravonatto" src="https://github.com/lpegs.png"></Avatar>

        </Flex>
    );
}