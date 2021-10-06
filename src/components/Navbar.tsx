import React from "react";
import NextLink from "next/link";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const body = (
		<Flex
			justifyContent="space-between"
			fontSize="large"
			w="100%"
			color="#f1fcf4"
		>
			<Flex justifyContent="space-between" mr={2}>
				<motion.h3
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{
						scale: 0.9,
					}}
				>
					Welcome
				</motion.h3>
			</Flex>
			<NextLink href="#aboutMe">
				<Link mr={2}>
					<motion.h3
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{
							scale: 0.9,
						}}
					>
						About Me
					</motion.h3>
				</Link>
			</NextLink>
			<NextLink href="#footer">
				<Link mr={2}>
					<motion.h3
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{
							scale: 0.9,
						}}
					>
						Links
					</motion.h3>
				</Link>
			</NextLink>
		</Flex>
	);
	return (
		<Flex p={4} position="sticky" zIndex={1} top={0} bg="#65d2ff">
			<Flex maxW={800} align="center" flex={1} m="auto">
				{body}
			</Flex>
		</Flex>
	);
};
export default Navbar;
