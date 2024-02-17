import { Box, Button, Center, Flex, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<Center w={"100%"}>
			<Flex
				w={"100%"}
				maw={"1200px"}
				h={"100%"}
				align={"center"}
				justify={"space-between"}
			>
				<Text c={"#1C7ED6"} fw={700} size="xl">
					EduFaxx
				</Text>
				<Flex align={"center"} gap={"xl"}>
					<Link to={"/"}>Course</Link>
					<Link to={"/"}>Pricing</Link>
					<Link to={"/"}>Tutor</Link>
					<Link to={"/"}>Admission</Link>
					<Link to={"/"}>About</Link>
				</Flex>
				<Link to={"/"}>
					<Button radius={"xl"} size="md" variant="outline">Contact</Button>
				</Link>
			</Flex>
		</Center>
	);
}

export default NavBar;
