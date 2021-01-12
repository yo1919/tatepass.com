<template>
  <footer class="footer__footer">
  	<div class="footer__infowrapper">
  		<div class="footer__infowrapper__innerleft">
  			<img src="/logo__img-text.png">
  			<div>
  				<h2>株式会社tatepass（タテパス）</h2>
  				<p>〒160-0022</p>
  				<p>東京都新宿区新宿2-12-13-2F</p>
  			</div>
  		</div>
  		<div class="footer__infowrapper__innerright">
  			<div class="footer__infowrapper__innerright__service">
  				<h2>Service</h2>
  				<ul>
  					<li><a href="/service/dna">・<span>DNA検査</span></a></li>
  					<li><a href="/service/dna">・<span>WEBサイト制作</span></a></li>
  					<li><a href="/service/dna">・<span>アプリ開発／システム開発</span></a></li>
  					<li><a href="/service/dna">・<span>WEBメディア運営</span></a></li>
  					<li><a href="/service/dna">・<span>アパレル</span></a></li>
  					<li><a href="/service/dna">・<span>IT戦略コンサルティング</span></a></li>
  				</ul>
  			</div>
  			<div class="footer__infowrapper__innerright__contact">
  				<h2>Contact Us</h2>
  				<div class="footer__infowrapper__innerright__contact__inner">
  					<div>
  						<p>・お電話でのお問い合わせはこちら</p>
  						<p>TEL：03-6822-3280</p>
  						<p>平日10:00〜19:00（営業目的のお電話はご遠慮ください。）</p>
  					</div>
  					<div>
  						<p>・メールでのお問い合わせはこちら</p>
  						<a href="/contact">お問い合わせフォーム</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
    <p class="footer__copy">&copy; Copyright 2020 tatepass Inc. All rights reserved.</p>
  </footer>
</template>

<!--footercssここから-->
<style>
.footer__footer{
  background: #333;
  color: #FFF;
}
	.footer__infowrapper{
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		max-width: 1440px;
		margin: 3.5em auto;
		flex-wrap: wrap;
	}
		.footer__infowrapper__innerleft{
			width: 95%;
			margin: 0 auto 3.5em;
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			font-size: 12px;
		}
			.footer__infowrapper__innerleft img{
				width: 20%;
			}
			.footer__infowrapper__innerleft div{
				width: 60%;
				line-height: 2;
			}
				.footer__infowrapper__innerleft div h2{
					font-size: 16px;
				}
		.footer__infowrapper__innerright{
			width: 90%;
			margin: 0 auto 3.5em;
		}
			.footer__infowrapper__innerright__service{
				margin: 0 0 2.5em;
			}
				.footer__infowrapper__innerright__service h2{
					font-size: 18px;
					margin: 0 0 1.5em;
				}
					.footer__infowrapper__innerright__service h2::after{
						content: "事業内容";
						display: block;
						font-size: 10px;
					}
				.footer__infowrapper__innerright__service ul{
					display: flex;
					justify-content: space-around;
					align-items: center;
					flex-wrap: wrap;
				}
					.footer__infowrapper__innerright__service ul li{
						width: 40%;
						font-size: 12px;
						margin: 0 0 1em;
					}
						.footer__infowrapper__innerright__service ul li a{
							color: #fff;
							text-decoration: none;
							transition: all 0.5s;
						}
							.footer__infowrapper__innerright__service ul li a span{
								border-bottom:1px solid rgba(134,189,66,0);
								transition: all 0.5s;
							}
							.footer__infowrapper__innerright__service ul li a span:hover{
								color: #86bd42;
								border-bottom:1px solid rgba(134,189,66,1);
							}
			.footer__infowrapper__innerright__contact{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				flex-direction: column;
			}
				.footer__infowrapper__innerright__contact h2{
					font-size: 18px;
					margin: 0 0 1.5em;
				}
					.footer__infowrapper__innerright__contact h2::after{
						content: "お問い合わせ";
						display: block;
						font-size: 10px;
					}
				.footer__infowrapper__innerright__contact__inner{
					width: 100%;
				}
					.footer__infowrapper__innerright__contact__inner div:nth-child(1){
						width: 100%;
						margin: 0 0 2em;
					}
						.footer__infowrapper__innerright__contact__inner div p:nth-child(1){
							font-size: 14px
						}
						.footer__infowrapper__innerright__contact__inner div p:nth-child(2){
							font-size: 20px;
						}
						.footer__infowrapper__innerright__contact__inner div p:nth-child(3){
							font-size: 12px;
						}
					.footer__infowrapper__innerright__contact__inner div:nth-child(2){
						width: 100%;
					}
						.footer__infowrapper__innerright__contact__inner div:nth-child(2) p{
							margin: 0 0 1em;
						}
						.footer__infowrapper__innerright__contact__inner div:nth-child(2) a{
							width: 50%;
							display: block;
							text-align: center;
							margin: 0;
							padding: 1.5em 2.5em;
							border: 1px solid #86bd42;
							color: #FFF;
							text-decoration: none;
							background:#86bd42;
							border-radius: 2.5px;
							transition: all .5s;
						}
							.footer__infowrapper__innerright__contact__inner div:nth-child(2) a:hover{
								background:#FFF;
								color: #86bd42;
							}


	.footer__copy{
		margin-top: auto;
  		text-align: center;
  		padding: 1em 0;
  		background: #333;
  		font-size: 12px;
	}

/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

}


/*media Queries 960
----------------------------------------------------*/

@media screen and (min-width: 960px) {

	.footer__infowrapper__innerleft,
	.footer__infowrapper__innerright{
		width: 45%;
	}

}


/*media Queries 1280
----------------------------------------------------*/

@media screen and (min-width: 1280px) {

}
</style>
<!--footercssここまで-->
