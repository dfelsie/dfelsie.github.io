import { Box } from "@chakra-ui/react";
import React from "react";

export type cthoderCardVariant = "norm" | "alt";

interface CthoderCardProps {
	variant?: cthoderCardVariant;
	style?: any;
}

const CthoderCard: React.FC<CthoderCardProps> = ({
	children,
	variant = "norm",
	style,
}) => {
	return (
		<Box
			backgroundColor={variant === "norm" ? "white" : "#9ae6b4"}
			h="325px"
			color={variant === "norm" ? "black" : "#f8eded"}
			fontFamily="ubuntu"
			{...style}
		>
			{children}
		</Box>
	);
};
export default CthoderCard;
