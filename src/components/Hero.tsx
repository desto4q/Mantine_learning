import {
	Box,
	Button,
	Divider,
	Flex,
	Image,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { IconInfinity } from "@tabler/icons-react";

function Hero() {
	return (
		<Flex justify={"center"} h={"calc(100dvh - 76px)"} mah={1080}>
			<SimpleGrid cols={{ sm: 1, md: 2, lg: 2 }} w={"100%"} maw={"1200px"}>
				<Flex p={"8px"} direction={"column"} gap={"lg"} justify={"center"}>
					<Title size={"3.5rem"} ta={{ xxs: "center", lg: "left" }}>
						A new way to learn <br></br>& get knowledge
					</Title>
					<Text size="lg" ta={{ xxs: "center", lg: "left" }}>
						EduFax is here for you with variouse courses &<br></br>
						from skilled tutors all around the world
					</Text>
					<Flex gap={"lg"} justify={{ xxs: "center", lg: "left" }}>
						<Button size="md" radius={"xl"}>
							Join the Course
						</Button>
						<Button size="md" variant="outline" radius={"xl"}>
							Learn More
						</Button>
					</Flex>

					<Flex
						mt={"xl"}
						align="center"
						gap={"xl"}
						wrap={"wrap"}
						justify={{ xxs: "center", lg: "left" }}
					>
						<Flex direction={"column"} justify={"center"} align={"center"}>
							<Text size="xl" fw={700}>
								15.2k
							</Text>
							<Text size="xm" c={"grey"}>
								Active members
							</Text>
						</Flex>
						<Divider size={"sm"} orientation="vertical" />
						<Flex direction={"column"} justify={"center"} align={"center"}>
							<Text size="xl" fw={700}>
								15.2k
							</Text>
							<Text size="xm" c={"grey"}>
								Active members
							</Text>
						</Flex>
						<Divider size={"sm"} orientation="vertical" />
						<Flex direction={"column"} justify={"center"} align={"center"}>
							<Flex h={"xl"}>
								<IconInfinity height={"100%"} />
							</Flex>
							<Text size="xm" c={"grey"}>
								Resources
							</Text>
						</Flex>
					</Flex>
				</Flex>

				<Flex p={"8px"} justify={"center"} align={"center"}>
					<Image
						h={{ xxs: "100%", lg: "80%" }}
						radius={"xl"}
						src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
				</Flex>
			</SimpleGrid>
		</Flex>
	);
}

export default Hero;
