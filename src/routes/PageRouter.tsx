import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { AppShell, Burger, Center, Flex, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "../components/NavBar";

function PageRouter() {
	const [opened, { toggle }] = useDisclosure();
	return (
		<BrowserRouter>
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
					<NavBar />
				</AppShell.Header>
				<AppShell.Navbar p="md">Navbar</AppShell.Navbar>

				{/* routes start here */}
				<AppShell.Main>
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</AppShell.Main>
			</AppShell>
		</BrowserRouter>
	);
}

export default PageRouter;
