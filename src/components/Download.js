import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import React from "react";
import cvdownload from "../assets/downloads/download1.pdf";

export const Download = () => {
	const onButtonClick = () => {
		fetch(cvdownload).then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Marcus Mahlatjie CV.pdf';
				alink.click();
			})
		})
	}
	return (
		<>
			<center className="project" id = "downloadables">
				<Row className="align-items-center">
				<h1>Curriculum Vitae</h1>
				<button id = "downloadables" onClick={onButtonClick}>
				CLICK HERE TO DOWNLOAD MY CV
				</button>
				</Row>
			</center>
		</>
	);
};