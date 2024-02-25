/* eslint-disable react/prop-types */
import ProgressBar from '@ramonak/react-progress-bar';

export default function HistoryRecord({ historyRec, openModal }) {
	return (
		<div
			style={{
				backgroundColor: '#FFFFFF',
				borderRadius: '30px',
				padding: '10px',
				marginTop: '20px',
				gap: '10px',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			{/* First Row */}
			<div style={{ display: 'inline-flex', justifyContent: 'center' }}>
				{/* First Col */}
				<div style={{ color: '#4D5E81' }}>
					<h3>
						{historyRec.date.toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'short',
							day: 'numeric'
						})}
					</h3>
					<div style={{ display: 'inline-flex' }}>
						<div style={{ fontSize: '12px' }}>
							{historyRec.date.toLocaleTimeString('en-US', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true
							})}
						</div>
						<div
							style={{
								fontSize: '10px',
								marginLeft: '20px',
								marginTop: '2px'
							}}
							onClick={() => openModal(historyRec)}
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
					<h2>{historyRec.light}%</h2>
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
