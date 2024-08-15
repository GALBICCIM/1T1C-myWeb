import React, { useState } from "react";
import myData from "../data.json";
import "./Wise.css";

const Wise: React.FC = () => {
	const [num, setNum] = useState(0);
	const btnClick = () => {
		const radium = Math.floor(Math.random() * 6);
		setNum(radium);
	};

	return (
		<div className="container">
			<button className="btn-ex" onClick={btnClick}>
				명언 보기
			</button>
			<p className="quotes">{myData.wise[num].content}</p>
		</div>
	);
};

export default Wise;
