
function getcsvfile () {
    var host = $(location).attr('origin');
    var url = host + "/data.csv";
    var output1 = "";
    var output2 = "";
    
    Papa.parse(url, {
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        header: true,
        download: true,        
        complete: function(results) {
            //insert each person into the spinner
            
            //var currentSlide = $('.js-carousel-center').slick('slickCurrentSlide');
            //$('.js-carousel-center').slick('slickRemove', 1);
            
            for (var x = 0; x < (results.data.length - 1); x++ ) {
//                results.data[x].fname;
//                results.data[x].lname;
//                results.data[x].bio1;
//                results.data[x].bio2;
//                results.data[x].email;
//                results.data[x].memberyears;
//                results.data[x].phone;
//                results.data[x].role;
//                results.data[x].image;
                output1 += "<div><a class='nav-members_link' href='#members/member" + x + "' onclick='hidedisplay();'><div class='nav-members__title'><span class='nav-members__name'>" + results.data[x].fname + " " + results.data[x].lname + "</span><span class='nav-members__detail'>" + results.data[x].role + "</span></div><img class='nav-members__image' src='img/" + results.data[x].image + "small.png'><div class='nav-members__bot'></div></a></div>";
                //$(".js-carousel-center").slick('slickAdd', output1);
                output2 += '<div class="carousel__slide slide" data-anchor="member' + x + '><div class="container"><div class="member"><div class="member__title heading"><div class="heading__title parallax--big">School Mentor<span class="heading__number">' + results.data[x].fname + ' ' + results.data[x].lname + '</span></div><h2 class="heading__subtitle parallax">' + results.data[x].fname + ' ' + results.data[x].lname + '</h2></div><div class="member__image member__image--moved"><img src="img/' + results.data[x].image + '.png" alt="Member"></div><div class="member__variations"><div class="grid"><div class="half"><div class="member__variation parallax"><h3>background</h3><p>' + results.data[x].bio1 + '</p></div></div><div class="half"><div class="member__variation parallax"><h3>team participation</h3><p>' + results.data[x].bio2 + '</p></div></div></div></div></div></div></div>';
            
            }
            document.getElementById('team-profile').innerHTML = output1;
            //document.getElementById('member-image-profile').innerHTML = output2;
            
            
              
            
             
              
        }

    })
        
}

