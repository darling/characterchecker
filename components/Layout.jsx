import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { classNames } from './../util/classNames';

const pages = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about' },
];

const Layout = (props) => {
	const router = useRouter();

	return (
		<div className="w-full min-h-screen flex flex-col py-12 sm:px-6 lg:px-8 lg:pt-40">
			<div
				className="flex flex-row space-x-4 justify-center"
				aria-label="tabs"
			>
				{pages.map((page) => {
					return (
						<div>
							<Link href={page.url}>
								<a
									className={classNames(
										router.asPath == page.url
											? 'bg-indigo-100 text-indigo-700'
											: 'text-gray-500 hover:text-gray-700',
										'px-3 py-2 font-medium text-sm rounded-md'
									)}
								>
									{page.name}
								</a>
							</Link>
						</div>
					);
				})}
			</div>
			<div className="container mx-auto p-4 w-full md:w-4/6">
				<div className="md:rounded-lg md:shadow-lg p-4 md:p-6 lg:p-8">
					{props.children}
				</div>
			</div>
		</div>
	);
};

export { Layout };
