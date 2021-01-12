<template>
  <div class="container">
    <header_edit />
    <!--メインコンテンツここから-->
    <main class="main main-toppage">
      <div class="page__top__title page__top__title__contact__index">
        <h1>会社概要</h1>
      </div>
      <!--メインコンテンツ-->
      <article class="main__container">
        <ul class="pankuzu-list">
          <li><a href="/">トップページ</a></li>
          <li>会社概要</li>
        </ul>

        <section class="page__companyinfo__wrapper">
        	<h2 class="main__container__service-title">What is "tatepass" ?</h2>
          	<p class="main__container__service-subtitle">社名の由来と私たちの想い</p>
        	<div class="page__companyinfo__wrapper__namewrapper">
        		<div class="page__companyinfo__wrapper__namewrapper__innerdiv">
        			<h1>tatepass</h1>
        			<h3>タテパス</h3>
        		</div>
        		<p>＝</p>
        		<h2>縦パス</h2>
        	</div>
        	<div class="page__companyinfo__wrapper__detailwrapper">
        		<img class="company__info__image_pc" src="/company_image_pc.jpg" alt="タテパス/縦パス">
        		<img class="company__info__image_sp" src="/company_image_sp.jpg" alt="タテパス/縦パス">
        		<div class="page__companyinfo__wrapper__detailinner">
        			<h3 class="page__companyinfo__wrapper__detailinner__toph3">縦パス　＝　攻撃のスイッチを入れる</h3>
        			<p class="page__companyinfo__wrapper__detailinner__topp">
        				"縦パス"はサッカーのプレー用語の１つで、相手のゴールに向かって縦にパスを出すプレーで「攻撃のスイッチを入れる」という意味合いで使われています。<br>
        				"縦パス"は相手ゴールに向かうパスのため、うまく通ればチャンスですが横や後ろに出すパスよりも相手に奪われるリスクを負うことになります。私たちが生活をする社会でも同じかもしれません。何か新しいことや高い壁に挑戦する時には当然リスクは避けられません。そんな何かに挑戦する人たちへ最高の"縦パス"を出す存在で在りたいと願っています。<br>
        				私たちは刻一刻と変化する現代社会の中で、変化を恐れずに世界中の人に「人生における攻めのスイッチを入れる、人生が好転するキッカケ」となる価値を提供するために最高の"縦パス"を送ることにチャレンジを続けます。
        			</p>
        			<div class="page__companyinfo__wrapper__detailinner__detail">
        				<h3 class="page__companyinfo__wrapper__detailinner__detail__h3">tatepass</h3>
        				<div class="page__companyinfo__wrapper__detailinner__detail__div">
        					<img src="/page_company_arrow.png" alt="→">
        					<p>縦パス</p>
        				</div>
        				<p class="page__companyinfo__wrapper__detailinner__detail__p">お客様</p>
        			</div>
        		</div>
        	</div>
        </section>

        <!--会社概要ここから-->
        <section class="main__container__wrapper main__container__company">
          <h2 class="main__container__service-title">Company</h2>
          <p class="main__container__service-subtitle">会社概要</p>
          <div class="main__container__service-wrapper main__container__service-wrapper__outline">
            <section class="main__container__service-wrapper__outline__inner">
              <h3>会社名</h3>
              <h1>株式会社tatepass（タテパス）</h1>
            </section>
            <section class="main__container__service-wrapper__outline__inner">
              <h3>役員</h3>
              <p>
                共同創業者：代表取締役 CEO 太田洋平<br>
                共同創業者：取締役 CTO 古市丞人
              </p>
            </section>
            <section class="main__container__service-wrapper__outline__inner">
              <h3>所在地</h3>
              <p>〒160-0022 東京都新宿区新宿2-12-13-2F</p>
            </section>
            <section class="main__container__service-wrapper__outline__inner">
              <h3>設立</h3>
              <p>2020年2月</p>
            </section>
            <section class="main__container__service-wrapper__outline__inner">
              <h3>資本金</h3>
              <p>1,000,000円</p>
            </section>
            <section class="main__container__service-wrapper__outline__inner">
              <h3>主要取引銀行</h3>
              <p>みずほ銀行 渋谷支店</p>
            </section>
          </div>
        </section>
        <!--会社概要ここまで-->

        

      </article>
    </main>
    <!--メインコンテンツここまで-->
    <footer_edit />
  </div>
</template>

<script>
import header_edit from '~/components/header.vue'
import footer_edit from '~/components/footer.vue'
import contact from '~/components/contact-form.vue';
export default {
  components: {
    header_edit
    , footer_edit
    , contact
  }
  , head() {
    return {
      title: '会社概要 | 株式会社tatepass',
      meta: [
      { hid: 'description', name: 'description', content: 'テスト' }
      ]
    }
  }
}
</script>

<style>

.page__top__title__contact__index{
  background-image: url("/page__top__title__bg__company.jpg");
  color: #000;
}

/*メインコンテンツ*/

/*what is tatepass*/

.page__companyinfo__wrapper{
  	width: 90%;
    max-width: 1080px;
    margin: 2em auto 2.5em;
    line-height: 1.8;
  }

  	.main__container__service-title{
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .main__container__service-subtitle{
      text-align: center;
      margin: -8px 0 0;
    }

  	.page__companyinfo__wrapper__namewrapper{
  		width: 92.5%;
  		max-width: 900px;
    	margin: 2em auto 2.5em;
    	display: flex;
    	align-items: center;
    	flex-wrap: nowrap;
    	justify-content: space-around;
    	text-align: center;
    	background: #86bd42;
    	padding: 1em;
    	border-radius: 5px;
    	color: #FFF;
  	}
  	.page__companyinfo__wrapper__namewrapper .page__companyinfo__wrapper__namewrapper__innerdiv{
  		width: 40%;
  	}
  		.page__companyinfo__wrapper__namewrapper__innerdiv h1{
  			font-size: 1.3rem;
  		}
  		.page__companyinfo__wrapper__namewrapper__innerdiv h3{
  			font-size: .8rem;
  		}
  	.page__companyinfo__wrapper__namewrapper p{
  		width: 20%;
  		font-size: 2rem;
  	}
  	.page__companyinfo__wrapper__namewrapper h2{
  		width: 40%;
  		font-size: 1.5rem;
  	}
  	.page__companyinfo__wrapper__detailwrapper{
  		width: 100%;
    	margin: 0 auto 3em;
    	display: flex;
    	align-items: flex-start;
    	justify-content: space-between;
    	flex-wrap: wrap;
  	}
  		.company__info__image_pc{
  			width: 100%;
  			height: auto;
  			margin: 0 auto;
  			display: none;
  		}
  		.company__info__image_sp{
  			width: 100%;
  			height: auto;
  			margin: 0 auto;
  			display: block;
  		}
  		.page__companyinfo__wrapper__detailinner{
  			width: 100%;
  			margin: 0 auto;
  		}
  			.page__companyinfo__wrapper__detailinner__toph3{
  				text-align: center;
  				margin: 1.5em auto 1em;
  				color: #86bd42;
  				font-size: 18px;
  			}
  			.page__companyinfo__wrapper__detailinner__topp{
  				line-height: 2;
  			}
  			.page__companyinfo__wrapper__detailinner__detail{
  				width: 100%;
  				margin: 2em auto;
  				display: flex;
  				align-items: center;
  				justify-content: space-around;
  				flex-wrap: nowrap;
  				text-align: center;
  			}
  				.page__companyinfo__wrapper__detailinner__detail__h3{
  					padding: 1em;
  					background: #f0f0f0;
  					border-radius: 5px;
  					font-weight: bold;
  					width : 25% ; /* 未対応ブラウザ用フォールバック */
  					width : -webkit-calc(100% / 4) ;
  					width : calc(100% / 4) ;
  				}
  				.page__companyinfo__wrapper__detailinner__detail__div{
  					width : 20% ; /* 未対応ブラウザ用フォールバック */
  					width : -webkit-calc(100% / 5) ;
  					width : calc(100% / 5) ;
  				}
  					.page__companyinfo__wrapper__detailinner__detail__div img{
  						width: 100%;
  						height: auto;
  						margin: 0 auto;
  					}
  					.page__companyinfo__wrapper__detailinner__detail__div p{
  						width: 100%;
  						margin: 0 auto;
  					}
  				.page__companyinfo__wrapper__detailinner__detail__p{
  					padding: 1em;
  					background: #f0f0f0;
  					border-radius: 5px;
  					font-weight: bold;
  					width : 25% ; /* 未対応ブラウザ用フォールバック */
  					width : -webkit-calc(100% / 4) ;
  					width : calc(100% / 4) ;
  				}



/*会社概要*/
.main__container__service-wrapper__outline{
  width: 90%;
	max-width: 800px;
	margin: 2em auto 5em;
	line-height: 1.8;
}
  .main__container__service-wrapper__outline__inner{
    width: 100%;
	margin: 0 auto;
	padding: 1.5em 0;
    border-top: 2px solid #666;
	display: -webkit-box;
  	display: -ms-flexbox;
  	display: flex;
  	-webkit-box-orient: horizontal;
  	-webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
   	justify-content: space-between;
   	-webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .main__container__service-wrapper__outline section:last-child{
    border-bottom: 2px solid #666;
  }
    .main__container__service-wrapper__outline__inner h3{
      width: 100%;
			margin: 0 auto 1em;
			font-weight: bold;
			font-size: 16px;
			border: none;
			padding: 0;
    }
    .main__container__service-wrapper__outline__inner h1,
    .main__container__service-wrapper__outline__inner p{
      width: 100%;
			margin: 0 auto;
			padding: 0;
			border: none;
      color: #666;
      line-height: 2.2;
    }
  .top_company_morebutton{
    margin: 4em auto 8em;
    max-width: 300px;
  }
  





/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

}


/*media Queries 960
----------------------------------------------------*/

@media screen and (min-width: 960px) {

	.page__companyinfo__wrapper__namewrapper{
		margin: 3em auto 4.5em;
	}
		.page__companyinfo__wrapper__namewrapper__innerdiv h1{
  			font-size: 2.5rem;
  		}
  		.page__companyinfo__wrapper__namewrapper__innerdiv h3{
  			font-size: 1.3rem;
  		}
  		.page__companyinfo__wrapper__namewrapper p{
  			font-size: 4.5rem;
  		}
  		.page__companyinfo__wrapper__namewrapper h2{
  			font-size: 3rem;
  		}

  		.company__info__image_pc{
  			display: block;
  			width: 35%;
  		}
  		.company__info__image_sp{
  			display: none;
  		}
  		.page__companyinfo__wrapper__detailinner{
  			width: 45%;
  		}
  			.page__companyinfo__wrapper__detailinner__toph3{
  				margin: 0 auto 1em;
  				font-size: 24px;
  			}

  	.page__companyinfo__wrapper__detailwrapper{
  		margin: 0 auto 5em;
  	}
  

}


/*media Queries 1280
----------------------------------------------------*/

@media screen and (min-width: 1280px) {

}
</style>
