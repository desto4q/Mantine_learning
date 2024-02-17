import { AppShell, Burger, Center, Flex, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useRequest, { UseRequestStatus } from "use-request";
import Hero from "../components/Hero";

let fetcher = async () => {
	let data = await fetch("https://dummyjson.com/products").then((res) =>
		res.json()
	);
	console.log(data);
	return data;
};
function Home() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened, desktop: !opened },
			}}
			padding="md"
		>
			<AppShell.Header display={"flex"}>
				<Center h={"100%"} w={"100%"}>
					<Flex
						h={"100%"}
						w={"100%"}
						align={"center"}
						bg={"red"}
						maw={"1200px"}
					>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<div>Logo</div>
					</Flex>
				</Center>
			</AppShell.Header>

			<AppShell.Navbar p="md">Navbar</AppShell.Navbar>

			<AppShell.Main>
				<Hero />
			</AppShell.Main>
		</AppShell>
	);
}

export default Home;
