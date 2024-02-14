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
				color: '#f5f5f5'
			}}
			onClick={() => {
				window.location.href = '/dashboard';
			}}
			onMouseOver={(e) => {
				e.target.style.cursor = 'pointer';
			}}
		/>,
		<AiOutlineInfoCircle
			key={2}
			style={{
				width: '100%',
				height: '100%',
				color: '#f5f5f5'
			}}
			onClick={() => {
				window.location.href = '/about';
			}}
			onMouseOver={(e) => {
				e.target.style.cursor = 'pointer';
			}}
		/>,
		<AiOutlineShareAlt
			key={3}
			style={{
				width: '100%',
				height: '100%',
				color: '#f5f5f5'
			}}
			onClick={() => {
				window.location.href = '/contact';
			}}
			onMouseOver={(e) => {
				e.target.style.cursor = 'pointer';
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
