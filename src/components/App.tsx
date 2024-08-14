import React from "react";
import myData from "../data.json";
import "./App.css";

import Wise from "./Wise";

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
				<p>밤 하늘의 별</p>
				<img className="proPhoto" src={process.env.PUBLIC_URL + "/imgs/logo_two.png"} alt="Img Error!" />

				<div className="proDesc">
					<ul>
						{myData.myProfile.map((data) => (
							<li key={data.id}>
								{data.name}: {data.value}
							</li>
						))}
					</ul>
				</div>

				<p className="proEssay">저는 IT에 관심이 많은 학생입니다.</p>
				<Wise />
			</section>
			<section id="sec-2">
				<p>친구들</p>

				<div>
					<ul>
						{myData.friend.map((prev) => (
							<li key={prev.id}>
								<a href={prev.url}>{prev.name}</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section id="sec-3">
				<p
					style={{
						marginTop: "40px"
					}}
				>
					위치
				</p>
				<a href="https://naver.me/IDBpoplJ" target="_blank">
					<img className="mapImg" src={process.env.PUBLIC_URL + "/imgs/map.png"} alt="Image Error!" />
				</a>
			</section>
			<footer>
				<p>
					© 2024. <a href="#">GALBICCIM</a> All rights reserved.
				</p>
			</footer>
		</div>
	);
};

export default App;
