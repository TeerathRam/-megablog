import React from "react";
import { Container, Logo, LogoutBtn, Button } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();

	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus, // if user is not authenticated
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Post",
			slug: "/all-post",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	const hiddenNavLinks = ["Add Post"];

	return (
		<header className="py-8 bg-white border-b-transparent sticky top-0 z-20">
			<Container>
				<nav className="flex items-center px-2">
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>
					<ul className="flex ml-auto">
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<Button
										classname="hidden px-6 py-2 duration-200 hover:bg-blue-200 rounded-full ml-3 font-medium focus:ring-2 ring-gray-600"
										textColor="text-pink-700"
										onClick={() => navigate(item.slug)}
									>
										{item.name}
									</Button>
								</li>
							) : null,
						)}
						{authStatus && (
							<li>
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
