import Link from 'next/link';
import { Layout } from '../components/Layout';

export default function About() {
	return (
		<Layout>
			<h1 className="font-mono font-bold text-3xl">About</h1>
			<div className="prose">
				<p>
					This tool will allow you to see suspicious characters or
					even fake characters. Any suspicious chracters will display
					a purple background and be spaced out.
				</p>
				<p>
					You can use this tool to verify trades and make sure the
					text you are seeing is really what it is.
				</p>
				<p>Any questions can go to: Your mom</p>
				<Link href="/">
					<a>Return Home</a>
				</Link>
			</div>
		</Layout>
	);
}
