export default function About() {
	return (
		<div
			style={{
				padding: '100px'
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					textAlign: 'left',
					width: '50%'
				}}
			>
				<h2 style={{ color: '#FEC536' }}> - About</h2>
				<h1 style={{ fontWeight: 'bold' }}> Know the Devices:</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the standard dummy text
					ever since the 1500s,
				</p>

				<div>
					<h2>Proponents:</h2>
					<p>Calio, Danna Lei M.</p>
					<p>Mahiluddin, Deinraisher J.</p>
					<p>Morales, Louise Allin A.</p>
					<p>Sakkalahul, Al-qamar K.</p>
				</div>
			</div>
		</div>
	);
}
