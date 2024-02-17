import { Center, Flex, SimpleGrid, Text, Title } from "@mantine/core";

function Hero() {
	return (
		<Flex justify={"center"} h={"100dvh"}>
			<SimpleGrid cols={{ sm: 1, md: 2, lg: 2 }} w={"100%"} maw={"1200px"}>
				<Flex bg={"green"} p={"8px"} direction={"column"}>
					<Title size={"4rem"}>
						A new way to learn <br></br>& get knowledge
					</Title>
					<Text>
						EduFax is here for you with variouse courses & <br></br>
						from skilled tutors all around the world
					</Text>
				</Flex>
				<Flex bg={"yellow"} p={"8px"}>
					sos
				</Flex>
			</SimpleGrid>
		</Flex>
	);
}

export default Hero;
