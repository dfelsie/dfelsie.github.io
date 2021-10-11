import {
	Container,
	Flex,
	Heading,
	Text,
	Box,
	useColorModeValue,
	ListItem,
	UnorderedList,
	Grid,
	SimpleGrid,
	useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import CthoderCard from "../components/CthoderCard";
import { Layout } from "../components/Layout";

const index = () => {
	return (
		<Layout>
			<Flex
				py={20}
				direction="column"
				h="full"
				m="auto"
				scrollPaddingTop="50px"
			>
				<Flex justifyContent="space-evenly" w="100%" mb={120}>
					<Flex direction="column">
						<Heading
							fontSize={{ base: `5xl`, lg: `7xl` }}
							textAlign={{ base: `center`, lg: `left` }}
						>
							Hi, I&apos;m Dan!
						</Heading>
						<Text>I do lots of cool stuff!</Text>
					</Flex>
				</Flex>
				<SimpleGrid
					w="80%"
					m="auto"
					columns={{ sm: 1, lg: 2 }}
					mt={8}
					id={"aboutMe"}
					gridColumnGap="0"
				>
					<CthoderCard
						variant="alt"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: ["32px", "64px"],
						}}
					>
						Education
					</CthoderCard>
					<CthoderCard
						style={{ textAlign: "center", marginTop: "50px" }}
					>
						Graduating from Macalester College in St. Paul <br />
						with degrees in Computer Science and Applied Math and
						Statistics.
					</CthoderCard>

					<CthoderCard
						variant={useBreakpointValue({ md: "norm", sm: "alt" })}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: ["32px", "64px"],
						}}
					>
						Experience
					</CthoderCard>
					<CthoderCard
						variant={useBreakpointValue({ sm: "norm", md: "alt" })}
						style={{ textAlign: "center" }}
					>
						<UnorderedList
							style={{
								listStylePosition: "inside",
								marginTop: "50px",
							}}
						>
							<ListItem marginBottom="2">
								July - August 2021: Foursquare, Backend Intern
								<UnorderedList>
									<UnorderedList>
										<ListItem>
											Worked in Flask and React to implement Amundsen
											at Foursquare.
										</ListItem>
										<ListItem>
											Created Python loader to pull SQL data from
											various sources, then containerized and deployed
											it through Kubernetes.
										</ListItem>
									</UnorderedList>
								</UnorderedList>
							</ListItem>
							<ListItem>
								September - October 2021: Software For Good Project
								Management Intern.
								<UnorderedList>
									<UnorderedList>
										<ListItem>
											Supported others working on hackathon projects.
										</ListItem>
									</UnorderedList>
								</UnorderedList>
							</ListItem>
						</UnorderedList>
					</CthoderCard>

					<CthoderCard
						variant={useBreakpointValue({ base: "norm", sm: "alt" })}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: ["32px", "64px"],
						}}
					>
						Skills
					</CthoderCard>
					<CthoderCard
						variant={useBreakpointValue({ sm: "norm", base: "alt" })}
						style={{ textAlign: "center" }}
					>
						<UnorderedList
							style={{
								listStylePosition: "inside",
								marginTop: "50px",
							}}
						>
							<ListItem>Python/Flask</ListItem>
							<ListItem>JS/React/CSS/HTML</ListItem>
							<ListItem>Java</ListItem>
							<ListItem>Docker</ListItem>
							<ListItem>PostgreSQL</ListItem>
							<ListItem>Agile</ListItem>
						</UnorderedList>
					</CthoderCard>
				</SimpleGrid>
			</Flex>
		</Layout>
	);
};
export default index;
