import MyDashboard from './components/MyDashboard';
import HistoryRecord from './components/HistoryRecord';
import Modal from 'react-modal';

import { useState } from 'react';

import 'react-circular-progressbar/dist/styles.css';
export default function Dashboard() {
	// historyReccArr is an array of objects that contain the date and the percentage
	const [historyRecArr, setHistoryRecArr] = useState([]);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState(null);

	function openModal(record) {
		setSelectedRecord(record);
		setModalIsOpen(true);
	}
	const reversedHistoryRecArr = historyRecArr.slice().reverse();

	return (
		<>
			<div
				style={{
					display: 'inline-flex',
					backgroundColor: 'rgba(255, 255, 255, 0.2)',
					borderRadius: '32px',
					flexDirection: 'row',
					color: '#3C4866',
					border: '3px solid #FFFFFF',
					width: '100%'
				}}
			>
				{/* History Component */}
				<div
					style={{
						width: '30%',
						textAlign: 'center',
						padding: '20px',
						backgroundColor: 'rgba(255, 255, 255, 0.3)',
						borderRadius: '30px',
						border: '3px solid #FFFFFF'
					}}
				>
					<h2
						style={{
							height: '10%'
						}}
					>
						History Tracker
					</h2>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '400px',
							overflowY: 'scroll',
							scrollbarWidth: 'none' // For Firefox
						}}
					>
						{historyRecArr.length === 0 ? (
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%'
								}}
							>
								<h3>No history yet</h3>
							</div>
						) : (
							reversedHistoryRecArr.map((historyRec, index) => {
								return (
									<HistoryRecord
										key={index}
										historyRec={historyRec}
										openModal={openModal}
									/>
								);
							})
						)}
					</div>
				</div>

				{/* Dashboard Component */}
				<MyDashboard setHistoryRecArr={setHistoryRecArr} />
			</div>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				contentLabel="History Record Details"
				style={{
					overlay: {
						backgroundColor: 'transparent'
					},
					content: {
						color: '#3C4866',
						position: 'absolute',
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
						backgroundColor: 'rgba(255, 255, 255, 0.9)',
						border: '3px solid #000000',
						borderRadius: '30px',
						padding: '20px',
						width: '25%', // Adjust this value to change the size of the modal
						height: '26%' // Adjust this value to change the size of the modal
					}
				}}
			>
				<h2>History Record Details </h2>
				{selectedRecord && (
					<div>
						<div>Date: {selectedRecord.date.toLocaleDateString()}</div>
						<div>DRC Value: {selectedRecord.light}%</div>
						<div>Temp Value: {selectedRecord.temperature}°C</div>
						<div>Distance Value: {selectedRecord.distance} cm</div>
					</div>
				)}
				<button
					style={{
						backgroundColor: '#FF4D4D',
						color: '#FFFFFF',
						borderRadius: '15px',
						border: '1px solid #3C4866',
						marginTop: '5px'
					}}
					onClick={() => setModalIsOpen(false)}
				>
					Close
				</button>
			</Modal>
		</>
	);
}
