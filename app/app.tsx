// @refresh reload
import { Link } from "@solidjs/router";
import { children } from "solid-js";
import { NoHydration } from "solid-js/web";

import { Counter } from "./Counter";

export default function App(props) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
				{props.assets}
			</head>
			<body>
				<section>
					<h1>Hello AgentConf with ya asdo!!!</h1>
					<Link href="/hello">Hello</Link>
					<Link href="/abc">ABC</Link>
					<Link href="/def">DEF</Link>
					<Link href="/">Home</Link>
					<Link href="/posts">Posts</Link>
				</section>
				{props.children}
				{props.scripts}
			</body>
		</html>
	);
}
