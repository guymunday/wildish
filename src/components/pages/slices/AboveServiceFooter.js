import React from "react"
import styled from "styled-components"

const AboveServiceFooterContainer = styled.div`
	background-color:black;
	color: white;
	display: flex;
	padding: 100px 150px;
	@media (max-width: 991px) {
		padding: 50px 120px 50px 120px
	}
	@media (max-width: 767px) {
		flex-wrap: wrap;
		padding: 50px 100px 50px 100px
	}
	@media (max-width: 600px) {
		padding: 50px 30px 40px 30px
	}

	> div {
		flex: 0 50%;
		display: flex;
		align-items: center;
		justify-content:center;
		@media (max-width: 991px) {
			flex: 0 60%;
		}
		@media (max-width: 767px) {
			flex: 0 100%;
			text-align: center;
		}
		@media (max-width: 450px) {
			display: block;
		}
		a {
			border: 2px solid white;
			border-radius: 30px;
			background-image: none;
			padding: 12px 20px 8px 20px;
			margin: 0 10px;
			font-size:1.8rem;
			line-height: 2rem;
			&:hover {
				background-color: var(--yellow);
				color: black;
				border-color: var(--yellow);
			}
			@media (max-width: 1199px) {
				font-size:1.4rem;
				line-height: 1.5rem;
				margin: 0 5px;
			}
			@media (max-width: 991px) {
				font-size:1.2rem;
				line-height: 1.3rem;
				padding: 10px 20px 8px 20px;
			}
			@media (max-width: 768px) {
				margin: 0 15px;
			}
			@media (max-width: 450px) {
				display: block;
				width: 100%;
				box-sizing: border-box;
				margin: 0 0 15px 0;
			}
		}
		&.content {
			@media (max-width: 991px) {
				flex: 0 40%;
			}
			@media (max-width: 767px) {
				flex: 0 100%;
				margin-bottom: 30px;
			}
			p {
				font-size: 2.4rem;
				line-height: 2.8rem;
				@media (max-width: 1199px) {
					font-size:1.8rem;
					line-height: 2.2rem;
				}
				@media (max-width: 991px) {
					font-size:1.4rem;
					line-height: 1.8rem;
				}
			}
		}
	}


`

export default function AboveServiceFooter({input}) {
	return (
		<>
			<AboveServiceFooterContainer>
			<div className="content" dangerouslySetInnerHTML={{__html:input?.above}}/>
			<div>
				<a href="#">Schedule a call</a>
				<a href="mailto:hello@wildishandco.co.uk">Email us</a>
			</div>
			</AboveServiceFooterContainer>
		</>
		)
}