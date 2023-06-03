import { Flex } from "@chakra-ui/react";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            width="100%"
            maxWidth="1200px"
            margin="0 auto"
        >
            {children}
        </Flex>
    );
}
