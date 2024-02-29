import prototypeLogo from '../assets/prototype.png';
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
					width: '100%'
				}}
			>
				<h1 style={{ color: '#FEC536' }}> - About</h1>
				<p>
					Welcome to the Latex DRC Measurement System, a user-friendly web
					interface designed to measure the Dry Rubber Content (DRC) of pure
					latex using a Light Dependent Resistor (LDR) connected to a Raspberry
					Pi microcontroller. This innovative system allows you to accurately
					determine the DRC percentage, monitor the temperature of the latex,
					and measure the distance between the sample and the LDR.
				</p>
				<h1 style={{ color: '#FEC536' }}> - How to Use</h1>
				<div
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around'
					}}
				>
					<ol
						style={{
							width: '50%'
						}}
					>
						<li>
							Setup:
							<ul>
								<li> Place latex on the lifting stage.</li>
								<li>Ensure the latex temperature is 25-39°C.</li>
								<li>Set the distance between the latex and LDR to 3.4 cm. </li>
							</ul>
						</li>
						<li>
							Power On:
							<ul>
								<li>Turn on the system to initialize the Raspberry Pi.</li>
								<li>
									Access Web Interface: Open the web interface from any platform
									using the system's IP or domain.
								</li>
								<li>Set the distance between the latex and LDR to 3.4 cm. </li>
							</ul>
						</li>
						<li>
							Dashboard:
							<ul>
								<li>View real-time DRC, temperature, and distance data.</li>
							</ul>
						</li>
						<li>
							Run Measurement:
							<ul>
								<li>Click "Run Measurement" to calculate and display DRC.</li>
							</ul>
						</li>
					</ol>
					<div
						style={{
							width: '50%'
						}}
					>
						<img
							style={{
								width: '450px',
								height: 'auto'
							}}
							src={prototypeLogo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
