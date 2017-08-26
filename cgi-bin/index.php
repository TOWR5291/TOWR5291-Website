<?php 
            
class CSVparse 
  { 
  var $mappings = array(); 

  function parse_file($filename) 
    { 
    $id = fopen($filename, "r"); //open the file 
    $data = fgetcsv($id, filesize($filename)); /*This will get us the */ 
                                               /*main column names */ 

    if(!$this->mappings) 
       $this->mappings = $data; 

    while($data = fgetcsv($id, filesize($filename))) 
        { 
         if($data[0]) 
           { 
            foreach($data as $key => $value) 
               $converted_data[$this->mappings[$key]] = addslashes($value); 
            $table[] = $converted_data; /* put each line into */ 
             }                                 /* its own entry in    */ 
         }                                     /* the $table array    */ 
    fclose($id); //close file 
    return $table; 
    } 
  } 

$datacsv = new CSVparse;
$data = $datacsv->parse_file("data.csv");


//echo '<pre>';
//print_r($data);
//echo '</pre>';

//echo '<br>'.count($data);
$output1 = "";  
$output2 = "";
$numitems = count($data);

for ($x = 0; $x < ($numitems); $x++ ) {
    //$output1 .= "<div><a class='nav-members_link' href='index.php#members/member" . $x . "' onclick='hidedisplay();'><div class='nav-members__title'><span class='nav-members__name'>" . $data[$x]['fname'] .  " " . $data[$x]['lname'] . "</span><span class='nav-members__detail'>" . $data[$x]['role'] . "</span></div><img class='nav-members__image' src='img/" . $data[$x]['image'] . "small.png'><div class='nav-members__bot'></div></a></div>";

$output1 .= "                    <div>\r\n";
$output1 .= "						<a class='nav-members_link' href='index.php#members/member" . $x . "'>\r\n";
$output1 .= "							<div class='nav-members__title'>\r\n";
$output1 .= "								<span class='nav-members__name'>" . $data[$x]['fname'] .  " " . $data[$x]['lname'] . "</span>\r\n";
$output1 .= "								<span class='nav-members__detail'>" . $data[$x]['role'] . "</span>\r\n";
$output1 .= "							</div>\r\n";
$output1 .= "							<img class='nav-members__image' src='img/" . $data[$x]['image'] . "small.png' alt='" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "'>\r\n";
$output1 .= "							<div class='nav-members__bot'></div>\r\n";
$output1 .= "						</a>\r\n";
$output1 .= "					</div>\r\n";
    
    
    //$output2 .= "<div class='carousel__slide slide' data-anchor='member" . $x . "'><div class='container'><div class='member'><div class='member__title heading'><div class='heading__title parallax--big'>" . $data[$x]['role'] . "<span class='heading__number'>" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "</span></div><h2 class='heading__subtitle parallax'>" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "</h2></div><div class='member__image member__image--moved'><img src='img/" . $data[$x]['image'] . ".png' alt='Member'></div><div class='member__variations'><div class='grid'><div class='half'><div class='member__variation parallax'><h3>background</h3><p>" . $data[$x]['bio1'] . "</p></div></div><div class='half'><div class='member__variation parallax'><h3>team participation</h3><p>" . $data[$x]['bio2'] . "</p></div></div></div></div></div></div></div>";
    
    
$output2 .= "                <div class='carousel__slide slide' data-anchor='member" . $x . "'>\r\n";
$output2 .= "                    <div class='container'>\r\n";
$output2 .= "                        <div class='member'>\r\n";
$output2 .= "                            <div class='member__title heading'>\r\n";
$output2 .= "                                <div class='heading__title parallax--big'>" . $data[$x]['role'] . "\r\n";
$output2 .= "                                    <span class='heading__number'>" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "</span>\r\n";
$output2 .= "                                </div>\r\n";
$output2 .= "                                <h2 class='heading__subtitle parallax'>" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "</h2>\r\n";
$output2 .= "                            </div>\r\n";
$output2 .= "                            <div class='member__image'>\r\n";
$output2 .= "                                <img src='img/" . $data[$x]['image'] . ".png' alt='" . $data[$x]['fname'] . " " . $data[$x]['lname'] . "'>\r\n";
$output2 .= "                            </div>\r\n";
$output2 .= "                            <div class='member__variations'>\r\n";
$output2 .= "                                <div class='grid'>\r\n";
$output2 .= "                                    <div class='half'>\r\n";
$output2 .= "                                        <div class='member__variation parallax'>\r\n";
$output2 .= "                                            <h3>background</h3>\r\n";
$output2 .= "                                            <p>2015<br>" . $data[$x]['bio1'] . "</p>\r\n";
$output2 .= "                                        </div>\r\n";
$output2 .= "                                    </div>\r\n";
$output2 .= "                                    <div class='half'>\r\n";
$output2 .= "                                        <div class='member__variation parallax'>\r\n";
$output2 .= "                                            <h3>team participation</h3>\r\n";
$output2 .= "                                            <p>" . $data[$x]['bio2'] . "</p>\r\n";
$output2 .= "                                        </div>\r\n";
$output2 .= "                                    </div>\r\n";
$output2 .= "                                </div>\r\n";
$output2 .= "                            </div>\r\n";
$output2 .= "                        </div>\r\n";
$output2 .= "                    </div>\r\n";
$output2 .= "                </div>\r\n";
    
};

?>


<!DOCTYPE html>

<html lang="en" >
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <base href=".">

		<title>TOWR 5291 The Oxford Wildcats Robotics Website</title>
		<meta name="description" content="">

		<link rel="icon" type="image/png" href="http://www.mas-industries.com/modules/mas/assets/images/favicon-16.png?_v=22" sizes="16x16">
        <link rel="icon" type="image/png" href="http://www.mas-industries.com/modules/mas/assets/images/favicon-32.png?_v=22" sizes="32x32">
        <link rel="apple-touch-icon-precomposed" href="http://www.mas-industries.com/modules/mas/assets/images/favicon-152.png?_v=22">

		<link rel="stylesheet" href="css/main.css">

	</head>

	 <body class="page--home">
		<header class="header">
			<a class="logo" href="index.php"><img src="img/5291logo.png" alt="Logo"></a>

			<span class="nav-icon js-menu">
				<span class="nav-icon__line nav-icon__line--1"></span>
				<span class="nav-icon__line nav-icon__line--2"></span>
				<span class="nav-icon__line nav-icon__line--3"></span>
			</span>
		</header>

		<div class="nav center-vertically">
			<nav class="nav-main">
				<ul>
					<li class="nav-main__link--mobile"><a href="?members=1">members Showcase</a></li>
				</ul>
			</nav>

			<div class="nav-members">
				<div class="slider js-carousel-center" id="team-profile">                    
<?php 
echo $output1;            
?>
                </div>
			</div>
		</div>
     <main class="main" >
 	 <section class="home section page" data-anchor="home">
		<div class="home__step0"></div>
		<div class="home__step1">
			<div class="title-red">the oxford wildcat robotics 5291</div>
		</div>
		<div class="home__step2"></div>
		<div class="home__step3"></div>
		<div class="home__mobile-img">
			<img src="img/home_mobile.png" alt="5291">
		</div>
		<div class="home__step4 view">
			<div class="home__news-bg parallax--right"></div>

			<div class="home__content">
				<div class="home__browse parallax--left">
					<p class="title--bigger">
						building leaders<br>
                        promoting gracious professionalism
					</p>
					<span class="button--arrow js-down js-mobile-members">members showcase</span>					
				</div>
				<div class="home__news parallax--right">
					<div class="border-top--smaller">
						<div class="news-carousel">
                            <div>
                                <h3 class="p-title">
                                    5291 Launches Website
                                </h3>
                                <div class="p--smaller">
                                    <p>Our New Webiste</p>
								</div>
							</div>
                            <div>
                                <h3 class="p-title">
									FTC Team 5291 The Oxford Wildcat Robotics
								</h3>
								<div class="p--smaller">
									<p><strong>Reward 1</strong></p>
                                    <p>Show Picture of Trophy Here</p>
								</div>
                            </div>
                            <div>
                                <h3 class="p-title">
									FTC Team 5291 The Oxford Wildcat Robotics
								</h3>
								<div class="p--smaller">
									<p><strong>Reward 2</strong></p>
                                    <p>Show Picture of Trophy Here</p>
								</div>
							</div>
                            <div>
                                <h3 class="p-title">
									FTC Team 5291 The Oxford Wildcat Robotics
								</h3>
								<div class="p--smaller">
									<p><strong>Reward 3</strong></p>
                                    <p>Show Picture of Trophy Here</p>
								</div>
							</div>
                            <div>
                                <h3 class="p-title">
									FTC Team 5291 The Oxford Wildcat Robotics
								</h3>
								<div class="p--smaller">
									<p><strong>Reward 4</strong></p>
                                    <p>Show Picture of Trophy Here</p>
								</div>
							</div>                            
                        </div>                        	
                    </div>						
                </div>
            </div>
			<span class="arrow--down js-down"></span>
		</div>
	</section>

	<section class="members screen section screen--dark-gray js-slide-selector" data-anchor="members">
		<div class="carousel" id="member-image-profile">
<?php 
echo $output2;            
?>
		</div>
		<span class="arrow--down js-down"></span>
	</section>
	<section class="member-details section screen" data-anchor="members-details">
		<div class="member-details__title">
			<div class="container">
				<div class="heading">
					<div class="heading__title parallax--big">goals</div>
				</div>
			</div>
		</div>
		<div class="member-details__bottom">
			<div class="container">
				<div class="home__preloader">
					<img src="img/spinner.gif">
				</div>
                <div class="grid js-add-member-content">	
                    <div class="quarter">
                        <h4 class="p-title">Engineering Excellence</h4>
                        <p class="p--smaller">
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Gracious Professionalism</h4>
                        <p class="p--smaller">
                            Love working together</p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Empowering Leadership</h4>
                        <p class="p--smaller">
                            Learning Leadership Skills<br>
                            Being better listeners
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Promoting Teamwork</h4>
                        <p class="p--smaller">
                            Working as a team, within a team    
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Heling the community</h4>
                        <p class="p--smaller">
                            Going out into the community and supporting Oxford
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Training New Members</h4>
                        <p class="p--smaller">
                            Teach our young team members how to become seasoned robotics engineers
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Being Connected</h4>
                        <p class="p--smaller">
                            Learning the skills of networking to enhance professional skills    
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Support</h4>
                        <p class="p--smaller">
                            Supporting schools events and other members in the team
                        </p>
                    </div>
                </div>
			</div>
		</div>
		<span class="arrow--down js-down"></span>
	 </section>

     <section class="donations section screen" data-anchor="donations">
     <div class="carousel slide">
		<div class="donations-details__title">
			<div class="container">
                <div class="p-title">We are always looking for parts to help build our robots, these parts can either be parts directly fitted to the robot or tools to help us fabricate the parts.<br>
                    If you would like to help our team out you can order any of the parts shown on these slides and have them shipped to <br>
                    Christie Watson<br>
                    Oxford Middle School<br>
                    Oxford<br>
                    MI XXXXX
                </div>
                <div class="whole">
                    <img src="img/wants/belt.png" alt="Belt">
                </div>
                <div class="grid js-add-member-content">	

                    
                    <div class="quarter">
                        <h4 class="p-title">Tank Tread Belt</h4>
                        <p class="p--smaller">
                            Tank Tread Belt Specs
                        </p>
                    </div>
                     <div class="quarter">
                        <h4 class="p-title">Gracious Professionalism</h4>
                        <p class="p--smaller">
                            Love working together</p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Empowering Leadership</h4>
                        <p class="p--smaller">
                            Learning Leadership Skills<br>
                            Being better listeners
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Promoting Teamwork</h4>
                        <p class="p--smaller">
                            Working as a team, within a team    
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Heling the community</h4>
                        <p class="p--smaller">
                            Going out into the community and supporting Oxford
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Training New Members</h4>
                        <p class="p--smaller">
                            Teach our young team members how to become seasoned robotics engineers
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Being Connected</h4>
                        <p class="p--smaller">
                            Learning the skills of networking to enhance professional skills    
                        </p>
                    </div>
                    <div class="quarter">
                        <h4 class="p-title">Support</h4>
                        <p class="p--smaller">
                            Supporting schools events and other members in the team
                        </p>
                    </div>
                   
                </div>
			</div>
		</div>
		
		<span class="arrow--down js-down"></span>
     </div>
	</section>
         
    <div class="footer section screen" data-anchor="footer">
        <div class="member-details__title">

			<div class="container">
                <div class="third sponsor__image">
                    <img src="img/sponsors/bronerlogo.png" height="200px" alt="BRONER">
                </div>
                <div class="third sponsor__image">
                    <img src="img/sponsors/fordlogo.png" height="200px" alt="FORD">
                </div>
                <div class="third sponsor__image">
                    <img src="img/sponsors/precisionpipeline.svg" height="200px" alt="Precision Pipeline">
                </div>
                <div class="half sponsor__image">
                    <img src="img/sponsors/kcilogo.png" height="200px" alt="Koala T Construction">
                </div>
                <div class="half sponsor__image">
                    <img src="img/sponsors/torcFulllogo.png" height="200px" alt="TORC Robotics Oxford High School">
                </div>
			</div>
		</div>
        
    
        <footer class="footer__footer">

            <div class="footer__arrow arrow--up js-up"></div>
            <div class="container">
                <div class="grid">
                    <!-- <div class="half">
                        <a class="footer__button" href="http://www.mas-industries.com/uploads/mas-brochure.pdf" target="_blank">DOWNLOAD BROCHURE</a>
                    </div> -->

                    <div class="parallax--small">
                        <a class="footer__button" href="">Contact us</a>
                    </div>
                </div>
                <div class="footer__details">
                    <div class="footer__copy">
                        <a href="#home"><img src="img/5291logofooter.png" alt="5291"></a>
                        <span>© 2016 The Oxford Wildcat Robotics 5291</span>
                    </div>
                    <div class="footer__why">                        
                    </div>
                </div>
            </div>
        </footer>
    </div>

</main>


<script src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/jquery.fullpage.js"></script>
<script type="text/javascript" src="js/jquery.waitforimages.js"></script>
<script src="js/slick.min.js"></script>
         
<script>

    (function($,sr){
      // debouncing function from John Hann
      // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      var debounce = function (func, threshold, execAsap) {
          var timeout;
          return function debounced () {
              var obj = this, args = arguments;
              function delayed () {
                  if (!execAsap)
                      func.apply(obj, args);
                  timeout = null; 
              };

              if (timeout)
                  clearTimeout(timeout);
              else if (execAsap)
                  func.apply(obj, args);

              timeout = setTimeout(delayed, threshold || 100); 
          };
      }
        // smartresize 
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');
    
	var fullpage = false;
	var slides = $('.slide').length;
	var member_details_section_index = 3;

	setTimeout(function() {
		$('.home').waitForImages({
			finished: function() {
	        	$('body').addClass('home--loaded');
		    },
		    hasImgProperties: 'backgroundImage',
		    waitForAll: true
		});
	}, 3000);


	$(document).ready(function() {

		$(window).smartresize(function(){
			fullscreen();
		});

		fullscreen();

		$('.news-carousel').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 10000
		});

	});

	
	function fullscreen() {
		if ($(window).width() >= 1024) {
			if (!fullpage) {
				$('.main').fullpage({
					anchors: ['home', 'members', 'members-details', 'donations', 'footer'],
					verticalCentered: false,
					scrollingSpeed: 1000,
					easing: 'easeInOutQuad',
					css3: true,

					onSlideLeave: function( anchorLink, index, slideIndex, direction){
						$('.pdf').removeClass('pdf--active');
					},
                    
					afterSlideLoad: function(anchorLink, index, slideIndex, direction){

			        	if (anchorLink == 'members') {
			        		// Preloader
			        		$('.home__preloader').addClass('active');
		        		}
		        		$('.fp-slide.active').find('.member__image').addClass('member__image--moved');

					},
					onLeave: function(index, nextIndex, direction) {
                        console.log('===============');
                        console.log("direction:" + direction + " nextIndex: " + nextIndex + " index: " + index );
						/*$('.nav').removeClass('is-visible');
						$('.nav-icon').removeClass('nav-icon--close');
						$('.nav-main').removeClass('is-visible');*/

						//console.log('index: '+index+', nextindex: '+nextIndex);

						if(nextIndex == 2 || nextIndex == member_details_section_index) {
			                $('.pdf').addClass('pdf--active');
			            } else {
			            	$('.pdf').removeClass('pdf--active');
			            }

			            if(nextIndex == 2) {
			            	$('.member__image').addClass('member__image--moved');
			                // $('.member__image').addClass('member__image--moved');
			            }

			            if(nextIndex > 2 && nextIndex) {
			            	$('.fp-slide.active').find('.member__image').addClass('member__image--moved');
			                // $('.member__image').addClass('member__image--moved');
			            }

			            if(nextIndex == member_details_section_index || nextIndex == 1) {
			                $('.fp-slide.active').find('.member__image').removeClass('member__image--moved');
			                // $('.slide.active .member__image').removeClass('member__image--moved');
			            }

                        if ((direction == 'down') && (nextIndex == 5)) {
                            $('.footer.fp-section').find('.sponsor__image').removeClass('sponsor__image--moved');
                            console.log(" Removed class - sponsor__image--moved" );
		        		} else {
                            $('.footer.fp-section').find('.sponsor__image').addClass('sponsor__image--moved');
                            console.log(" Added class - sponsor__image--moved" );
                        }                        
                        
			        },

			        afterLoad: function(anchorLink, index) {
                        //console.log('===============');
                        //console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
			            if(index == 2) {
			                $('.slide.active .member__image').addClass('member__image--moved');
                            //console.log(" Added class - member__image--moved" );
			            }

			        }
				});
				fullpage = true;
			};
		} else {
			if (fullpage) {
				$.fn.fullpage.destroy('all');
				fullpage = false;
			} else {
                 $('.carousel').slick({
                    // Adding slick
                    onAfterChange: function(obj, current, next) {
                        var active = $('.carousel .slick-active');

                        // Preloader
                        $('.home__preloader').addClass('active');

                    }
                });
              
			}
		}
	}
</script>


         
<script>

	$(document).ready(function() {
        
        $('.nav-members_link').on('click', function() {
            $('.nav').toggleClass('is-visible');
            $('.nav-icon').toggleClass('nav-icon--close');
            $('.nav-main').toggleClass('is-visible');
        });
        
        $(".js-menu").click(function(a) {
            $(".nav").toggleClass("is-visible"), 
            $(".nav-icon").toggleClass("nav-icon--close"), 
            $(".nav-main").toggleClass("is-visible"), 
            $("html").toggleClass("no-scroll")
        }); 
        
        $(".js-down").click(function(a) {
            $(window).width() > 1024 ? $.fn.fullpage.moveSectionDown() : $("html, body").animate({
                scrollTop: $(".members").offset().top
            }, 700)
        }); 
        
        $(".js-up").click(function(a) {
            $.fn.fullpage.moveSectionUp()
        }); 

        $(".js-carousel-center").slick({
                slidesToShow: 6,
                draggable: !0,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 3000,
                focusOnSelect: !0,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1679,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 5
                    }
                }, {
                    breakpoint: 1279,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 400,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1
                    }
                }]
            });
	});
    
    function hidedisplay() {
        
        $('.nav-members_link').on('click', function() {
            $('.nav').toggleClass('is-visible');
            $('.nav-icon').toggleClass('nav-icon--close');
            $('.nav-main').toggleClass('is-visible');
        });
    }
    
</script>
         
</body>
</html>