import { Box } from "@chakra-ui/react";
import React from "react";

export type wrapperVariant = "small" | "regular";

interface wrapperProps {
	variant?: wrapperVariant;
}

const Wrapper: React.FC<wrapperProps> = ({
	children,
	variant = "regular",
}) => {
	return (
		<Box
			mt={8}
			mx="auto"
			maxW={variant === "regular" ? "1400px" : "400px"}
			scrollPaddingTop="100px"
			w="100%"
			h="full"
		>
			{children}
		</Box>
	);
};
export default Wrapper;
