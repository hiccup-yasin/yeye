import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useState } from 'react';
export default function MyDashboard({ setHistoryRecArr }) {
	const [progress, setProgress] = useState({
		distance: 0,
		temperature: 0,
		light: 0
	});

	async function setProgressValue() {
		const intervalId = setInterval(() => {
			setProgress({
				distance: Math.floor(Math.random() * 100) + 1,
				temperature: Math.floor(Math.random() * 100) + 1,
				light: Math.floor(Math.random() * 100) + 1
			});
		}, 200);

		try {
			console.log('Fetching data . . .');

			const response = await fetch('http://192.168.254.112:4000/data');

			clearInterval(intervalId);

			const data = await response.json();

			console.log(data);

			setProgress({
				distance: data.distance,
				temperature: data.temp,
				light: Math.round(data.light * 100)
			});
		} catch (e) {
			console.log('Error Fetching data . . .');

			console.log(e, 'Error');
		} finally {
			clearInterval(intervalId);
		}
	}

	function saveData() {
		// Save the data to the database
		setHistoryRecArr((prev) => {
			return [
				...prev,
				{
					date: new Date(),
					distance: progress.distance,
					temperature: progress.temperature,
					light: progress.light
				}
			];
		});
	}

	return (
		<>
			<div
				style={{
					width: '70%',
					textAlign: 'left',
					padding: '20px',
					paddingInline: '30px',
					flexDirection: 'column',
					display: 'flex',
					alignItems: 'center',
					gap: '25px'
				}}
			>
				{/* My Dashboard */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: '100%',
						flexWrap: 'wrap',
						gap: '20px'
					}}
				>
					<h1>My Dashboard</h1>
					<div>
						<button
							style={{
								backgroundColor: '#FF4D4D',
								color: '#FFFFFF',
								borderRadius: '15px',
								border: '1px solid #3C4866',
								paddingInline: '10px'
							}}
							onClick={setProgressValue}
						>
							Run / Refresh
						</button>
						<button
							style={{
								backgroundColor: '#DAA005',
								color: '#FFFFFF',
								borderRadius: '15px',
								border: '1px solid #3C4866',
								paddingInline: '10px',
								marginLeft: '10px'
							}}
							onClick={saveData}
						>
							Save
						</button>
					</div>
				</div>
				{/* Circular Bar */}
				<div style={{ width: '250px', height: 'auto' }}>
					<CircularProgressbar
						text={`${progress.light}%`}
						value={progress.light}
						strokeWidth={15}
						styles={buildStyles({
							trailColor: '#ffffff',
							pathColor: `#1ACEB9`,
							textColor: '#4D5E81'
						})}
					/>
				</div>
				{/* Sensor Data */}
				<div style={{ alignSelf: 'flex-start' }}>
					<h2>Sensor Data</h2>
				</div>
				{/* Rectangular Data */}
				<div
					style={{
						width: '100%',
						background: 'linear-gradient(to right, #C5D5B5, #FFFFFF, #C1D5B7)',
						paddingTop: '10px',
						justifyContent: 'space-evenly',
						display: 'flex',
						flexDirection: 'row',
						borderRadius: '30px',
						flexWrap: 'wrap',
						alignItems: 'flex-start'
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row'
						}}
					>
						<div style={{ width: '75px', height: 'auto' }}>
							<CircularProgressbar
								text={`${progress.distance}cm`}
								value={progress.distance}
								strokeWidth={10}
								styles={buildStyles({
									trailColor: '#ffffff',
									pathColor: `#297FD9`,
									textColor: '#4D5E81'
								})}
							/>
						</div>
						<div
							style={{
								paddingInline: '20px'
							}}
						>
							<h2>Distance</h2>
							<p> Centimeters</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row'
						}}
					>
						<div style={{ width: '75px', height: 'auto' }}>
							<CircularProgressbar
								text={`${progress.temperature}°C`}
								value={progress.temperature}
								strokeWidth={10}
								styles={buildStyles({
									trailColor: '#ffffff',
									pathColor: `#FFC107`,
									textColor: '#4D5E81'
								})}
							/>
						</div>
						<div
							style={{
								paddingInline: '20px'
							}}
						>
							<h2>Temperature</h2>
							<p> Degree Celcius</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
