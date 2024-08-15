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
				<img className="pro-photo" src={process.env.PUBLIC_URL + "/imgs/logo_two.png"} alt="Img Error!" />

				<div className="pro-desc">
					<ul>
						{myData.myProfile.map((data) => (
							<li key={data.id}>
								{data.name}: {data.value}
							</li>
						))}
					</ul>
				</div>

				<p className="pro-essay">저는 IT에 관심이 많은 학생입니다.</p>
				<Wise />
			</section>
			<section id="sec-2">
				<p>친구들</p>

				<div>
					<ul className="friend-list">
						{myData.friend.map((prev) => (
							<li key={prev.id}>
								<a href={prev.url} target="_blank">
									<span className="friend-name">{prev.name}</span>
								</a>
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
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1432683726207!2d126.94942191121255!3d37.55168822486317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c989ec9569761%3A0x9eb569d21b56c211!2z7ZWc7IS47IKs7J2067KE67O07JWI6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1723610783022!5m2!1sko!2skr"
						width="500"
						height="450"
						loading="lazy"
					></iframe>
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
