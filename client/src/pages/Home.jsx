import logo from '../assets/drc-logo.svg';
import {
	AiOutlineDashboard,
	AiOutlineInfoCircle,
	AiOutlineShareAlt
} from 'react-icons/ai';

export default function Home() {
	const iconArray = [
		<AiOutlineDashboard
			key={1}
			style={{
				width: '100%',
				height: '100%',
				color: '#CBD5B2'
			}}
		/>,
		<AiOutlineInfoCircle
			key={2}
			style={{
				width: '100%',
				height: '100%',
				color: '#CBD5B2'
			}}
		/>,
		<AiOutlineShareAlt
			key={3}
			style={{
				width: '100%',
				height: '100%',
				color: '#CBD5B2'
			}}
		/>
	];

	return (
		<>
			<img
				style={{
					width: '100%',
					height: '80vh'
				}}
				src={logo}
				alt="logo"
			/>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					textAlign: 'right',
					marginRight: '10px'
				}}
			>
				{iconArray.map((icon, index) => {
					return (
						<div
							key={index}
							style={{
								width: 'auto',
								height: '25px',
								backgroundColor: '#2F7865',
								borderRadius: '50%',
								padding: '10px',
								marginInline: '25px'
							}}
						>
							{icon}
						</div>
					);
				})}
			</div>
		</>
	);
}
