import ProgressBar from '@ramonak/react-progress-bar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard() {
	return (
		<div
			style={{
				backdropFilter: 'blur(10px)', // Add this line
				backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
				borderRadius: '32px',
				margin: '20px', // Margin
				height: '90%',
				flexDirection: 'row',
				display: 'flex',
				color: '#3C4866',
				border: '3px solid #FFFFFF'
			}}
		>
			<div
				style={{
					width: '30%',
					textAlign: 'center',
					padding: '10px',
					backdropFilter: 'blur(10px)', // Add this line
					backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
					borderRadius: '30px',
					border: '3px solid #FFFFFF'
				}}
			>
				<h2> History Tracker </h2>
				<HistoryRecordComponent />
			</div>

			<div
				style={{
					width: '70%',
					textAlign: 'left',
					padding: '10px',
					flexDirection: 'column',
					display: 'flex',
					alignItems: 'center',
					gap: '30px'
				}}
			>
				<div style={{ alignSelf: 'flex-start' }}>
					<h2 style={{ marginInline: '20px' }}>My Dashboard</h2>
				</div>

				<div style={{ width: '60%', height: 'auto' }}>
					<CircularProgressbar
						text={`${66}%`}
						value={66}
						strokeWidth={15}
						styles={buildStyles({
							trailColor: '#CBD5B2',
							pathColor: `#1ACEB9`,
							textColor: '#4D5E81'
						})}
					/>
				</div>
			</div>
		</div>
	);
}

function HistoryRecordComponent() {
	return (
		<div
			style={{
				backgroundColor: '#FFFFFF',
				borderRadius: '30px',
				padding: '10px',
				marginTop: '20px',
				gap: '20px',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			{/* First Row */}
			<div
				style={{
					display: 'inline-flex'
				}}
			>
				{/* First Col */}
				<div
					style={{
						color: '#4D5E81'
					}}
				>
					<h3>January 21, 2021</h3>
					<div
						style={{
							display: 'inline-flex'
						}}
					>
						<h3>12:03pm</h3>

						<div
							style={{
								fontSize: '10px',
								marginLeft: '20px',
								marginTop: '5px'
							}}
						>
							View Details
						</div>
					</div>
				</div>
				{/* Second Col */}
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						marginLeft: '20px',
						color: '#17BAA2'
					}}
				>
					<h2>50%</h2>
				</div>
			</div>
			{/* Second row */}
			<ProgressBar
				className=""
				completed={60}
				bgColor="linear-gradient(90deg, #45F8C0 0%, #297FD9 100%)"
				isLabelVisible={false}
			/>
		</div>
	);
}
