import "./App.css";

const App: React.FC = () => {
	return (
		<div className="main-container">
			<header>
				<p>타이틀</p>

				<div>
					<ul>
						<li>
							<a href="#">메뉴 1</a>
						</li>
						<li>
							<a href="#">메뉴 2</a>
						</li>
						<li>
							<a href="#">메뉴 3</a>
						</li>
					</ul>
				</div>
			</header>
			<section id="sec-1">
				<p>아름다운 바다</p>
				<img src={process.env.PUBLIC_URL + "/logo_two.png"} alt="Img Error!" />
			</section>
			<section id="sec-2"></section>
			<section id="sec-3"></section>
		</div>
	);
};

export default App;
