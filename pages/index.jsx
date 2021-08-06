import { useState } from 'react';
import { Layout } from '../components/Layout';
import { classNames } from './../util/classNames';

function checkTest(str) {
	return !/^[a-zA-Z0-9_ \!\@\#\$\%\^\&\*\(\)\"\'\+\=\|\\\;\:\/\?\>\<\,\.\[\]\{\}\~\`\-]*$/.test(
		str
	);
}

export default function Home() {
	const [checkData, setCheckData] = useState('');

	const charArray = checkData.split('');

	return (
		<Layout>
			<div className="">
				<h1 className="font-mono font-bold text-3xl">
					Character Checker
				</h1>
				<p className="text-sm md:text-base">
					Copy and paste whatever text you want to verify.
				</p>
				<textarea
					name="check_text"
					id="check_text"
					rows="3"
					className="w-full font-mono my-4"
					onChange={(event) => {
						setCheckData(event.target.value);
					}}
				></textarea>
				<div className="my-4 font-mono text-xl break-all text-gray-800">
					{charArray.map((char) => {
						if (char === '\n') return <br />;

						return (
							<span
								className={classNames(
									checkTest(char)
										? 'text-indigo-500 bg-indigo-100 px-1 border border-gray-400'
										: '',
									'hover:bg-indigo-200 hover:text-indigo-700 transition duration-200'
								)}
							>
								{char}
							</span>
						);
					})}
				</div>
				<div>
					Number of characters:{' '}
					<span className="font-mono hover:text-indigo-700 transition duration-200">
						{charArray.length}
					</span>
				</div>
				<div>
					Found:{' '}
					<span className="font-mono hover:text-indigo-700 transition duration-200">
						{charArray.find(checkTest)?.length || 0 > 0
							? 'yes'
							: 'no'}
					</span>
				</div>
			</div>
			<div className="bg-indigo-100 prose-indigo p-2 md:p-4 lg:p-8 mt-4">
				<h2>Popup or ad goes here</h2>
				<p>
					Yeah you know how it goes.{' '}
					<a href="https://ferris.gg/">Click me.</a>
				</p>
			</div>
		</Layout>
	);
}
