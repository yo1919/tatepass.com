<template>
  <div>
  <!--SPヘッダーここから-->
  <header class="header-sp">
    <div class="header-sp__inner">
    <a class="header-sp__img-mail" href="/contact">
    	<img class="header-sp__img-mail" src="/mailicon.png" alt="お問い合わせはこちら">
    </a>
    <a class="sp_header_logo_a" href="/">
      <img class="header-sp__img-logo" src="/logo_tatepass.png" alt="株式会社tatepass">
    </a>
    <!--SPドロワーメニューここから-->
    <div class="drowermenu">
      <input type="checkbox" class="check" id="checked">
      <label class="menu-btn" for="checked">
        <span class="bar top"></span>
        <span class="bar middle"></span>
        <span class="bar bottom"></span>
        <span class="menu-btn__text">MENU</span>
      </label>
      <label class="close-menu" for="checked"></label>
      <nav class="drawer-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/service">Service</a></li>
          <li><a href="/company">Company</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    </div>
      <!--SPドロワーメニューここまで-->
  </header>
  <!--SPヘッダーここまで-->

    <!--PCヘッダーここから-->
    <header class="header-pc">
      <nav>
        <a class="pc_header_logo_a" href="/">
          <img src="/logo_tatepass.png" alt="株式会社tatepass">
        </a>
        <ul>
          <li><a href="/service">事業内容</a></li>
          <li><a href="/company">会社概要</a></li>
          <li class="header-pc-list-contact"><a href="/contact">お問い合わせ</a></li>
        </ul>
      </nav>
    </header>
    <!--PCヘッダーここまで-->
  </div>
</template>

<style>

/*ヘッダースクロールのやつ*/
/* 基本のスタイル */
   .header-sp.delighter {
      transition: all .3s ease-out;
      transform: translateX(-100%);
      opacity: 0;
   }
 
/* スタート時のスタイル */
   .header-sp.delighter.started {
      transform: none;
      opacity: 1;
   }
 
/* エンド時のスタイル */
   .header-sp.delighter.started.ended {
      border: solid red 10px;
   }
/*ここまで*/

.header-sp{
  width: 100%;
  height: 75px;
  background: #fff;
  z-index: 1000;
  padding: .5em 15px;
  margin: 20px auto 15px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
}
  .header-sp__inner{
    width: 90%;
    margin: 2em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-sp__img-mail{
    width: 10%;
    max-width: 38px;
    height: auto;
  }
  	.header-sp__img-mail{
  		width: 100%;
  	}
  .sp_header_logo_a{
    display: block;
    width: 30%;
  }
    .header-sp__img-logo{
      width: 100%;
      max-width: 150px;
      height: auto;
    }
.header-pc{
  display: none;
}

/*ドロワーメニュー用CSSここから*/
ul {
  margin: 0;
  padding: 0;
	list-style: none;
}

/* contents */
.contents {
    display: table;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: #f6bc60;
    /*box-shadow: 0 0 50px 0 rgba(0,0,0,.8);*/
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
}

.contents__inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

.contents__inner h1 {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 40px;
    font-family: Futura, "Century Gothic", "helvetica neue", arial, sans-serif !important;
    font-style: italic;
}

.contents__inner p {
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
}

.contents__inner p span {
    border-bottom: 1px solid #fff;
}

/* drawer menu */
.drawer-menu {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    width: 225px;
    height: 100vh;
    padding: 120px 0;
    background: #222;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .5s;
    transition-duration: .5s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transform-origin: right center;
    -ms-transform-origin: right center;
    transform-origin: right center;
    -webkit-transform: perspective(500px) rotateY(-90deg);
    transform: perspective(500px) rotateY(-90deg);
    opacity: 0;
}

.drawer-menu li {
    text-align: center;
}

.drawer-menu li a {
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    -webkit-transition: all .8s;
    transition: all .8s;
    text-decoration: none;
}

.drawer-menu li a:hover {
    color: #1a1e24;
    background: #fff;
}

/* checkbox */
.check {
    display: none;
}

/* menu button - label tag */
.menu-btn {
    position: relative;
    display: block;
    /*top: 40px;*/
    /*right: 40px;*/
    display: block;
    width: 40px;
    height: 40px;
    font-size: 10px;
    text-align: center;
    cursor: pointer;
    z-index: 3;
}

.bar {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 40px;
    height: 1px;
    background: #333;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
}

.bar.middle {
    top: 12.5px;
    opacity: 1;
}

.bar.bottom {
    top: 25px;
    -webkit-transform-origin: left bottom;
    -ms-transform-origin: left bottom;
    transform-origin: left bottom;
}

.menu-btn__text {
    position: absolute;
    bottom: -7px;
    left: 0;
    right: 0;
    margin: auto;
    color: #333;
    -webkit-transition: all .5s;
    transition: all .5s;
    display: block;
    visibility: visible;
    opacity: 1;
}

.menu-btn:hover .bar {
    background: #999;
}

.menu-btn:hover .menu-btn__text {
    color: #999;
}

.close-menu {
    position: fixed;
    top: 0;
    right: 225px;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0);
    cursor: url(http://theorthodoxworks.com/demo/images/cross.svg),auto;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    visibility: hidden;
    opacity: 0;
}

/* checked */
.check:checked ~ .drawer-menu {
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    opacity: 1;
    z-index: 2;
}

.check:checked ~ .contents {
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    -webkit-transform: translateX(-300px);
    -ms-transform: translateX(-300px);
    transform: translateX(-300px);
}

.check:checked ~ .menu-btn{
  /*position: fixed;*/
  /*right: 5%;*/
  /*top: 23px;*/
}

.check:checked ~ .menu-btn .menu-btn__text {
    visibility: hidden;
    opacity: 0;
}

.check:checked ~ .menu-btn .bar.top {
    width: 50px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: #FFF;
}

.check:checked ~ .menu-btn .bar.middle {
    opacity: 0;
}

.check:checked ~ .menu-btn .bar.bottom {
    width: 50px;
    top: 35px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background: #FFF;
}

.check:checked ~ .close-menu {
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
    background: rgba(0,0,0,.5);
    visibility: visible;
    opacity: 1;
    z-index: 3;
}
/*ドロワーメニュー用CSSここまで*/


/*media Queries 768
----------------------------------------------------*/

@media screen and (min-width: 768px) {

}


/*media Queries 960
----------------------------------------------------*/

@media screen and (min-width: 960px) {

  .header-sp{
    display: none;
  }
  .header-pc{
    display: block;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFF;
    z-index: 100;
    transition: all .3s;
    height: 75px;
  }
  .scroll-down{
    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.3);
  }
    .header-pc nav{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      width: 95%;
      margin: 0 auto;
      height: 75px;
      transition: all .3s;
    }
      .pc_header_logo_a{
        display: block;
        width: 15%;
        transition: all .3s;
      }
      .header-pc nav img{
        width: 100%;
        height: auto;
        transition: all .3s;
      }
        .header-pc nav ul{
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          width: 30%;
        }
          .header-pc nav ul li{

          }
            .header-pc nav ul li a{
              position: relative;
              display: inline-block;
              text-decoration: none;
              color: #333;
              transition: all .3s;
              font-size: 14px;
            }
            .header-pc nav ul li a.header-scroll-a{
              font-size: 12px;
            }
            .header-pc nav ul li a:hover{
              color: #86bd42;
            }
              .header-pc nav ul li a::after{
                position: absolute;
                bottom: -4px;
                left: 0;
                content: '';
                width: 100%;
                height: 2px;
                background: #86bd42;
                transform: scale(0, 1);
                transform-origin: right top;
                transition: transform .3s;
              }
              .header-pc nav ul li a:hover::after {
                transform-origin: left top;
                transform: scale(1, 1);
              }
          .header-pc nav ul li.header-pc-list-contact{
            
          }
}


/*media Queries 1280
----------------------------------------------------*/

@media screen and (min-width: 1280px) {

}
</style>