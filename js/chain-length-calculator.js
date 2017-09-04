function center_distance(chaincalc){
    pitch = chaincalc.pitch.value
    N1 = chaincalc.drive_teeth.value
    N2 = chaincalc.driven_teeth.value
    nlinks = chaincalc.links.value
    length = chaincalc.length.value

    
    if (nlinks > 0) {
        length = nlinks * pitch
        chaincalc.length.value = nlinks * pitch
    } else {
        nlinks = length / pitch
        chaincalc.links.value = nlinks
    }
    
    console.log("pitch " + pitch);
    console.log("N1 " + N1);
    console.log("N2 " + N2);
    console.log("nlinks: " + nlinks);
    console.log("length: " + length);
    
    var a,b,c,d,e;
    a = pitch / 8;  
    b = 2 * nlinks - N1 - N2;  
    c = b*b;  
    d = 8/(Math.PI * Math.PI);  
    e =  N1 - N2 ;
    e = e*e;
    
    chaincalc.distance.value = Math.round(  a * (b + Math.sqrt(c - d * e ))  *1000)/1000;
    
    chaincalc.ratio.value = Math.round(  N2/N1  *100)/100;

    if(isNaN(chaincalc.distance.value) || chaincalc.distance.value == 0) {
        chaincalc.distance.value = "0";
    } 
    
    if(isNaN(chaincalc.ratio.value) || chaincalc.ratio.value == 0) {
        chaincalc.ratio.value = "0";
    } 
    
    if (chaincalc.ratio.value == Number.POSITIVE_INFINITY || chaincalc.ratio.value == Number.NEGATIVE_INFINITY)
    {
        chaincalc.ratio.value="0";
    }
}

//function chain_length(chaincalc, pitch, N1, N2, distance){
function chain_length(chaincalc){    
    pitch = chaincalc.pitch.value
    N1 = chaincalc.drive_teeth.value
    N2 = chaincalc.driven_teeth.value
    distance = chaincalc.distance.value
    console.log("pitch " + pitch);
    console.log("N1 " + N1);
    console.log("N2 " + N2);
    console.log("Distance: " + distance);
    
    var a,b,c;
    a = (N1-N2)/(2 * Math.PI);
    a = a * a;
    chaincalc.links.value = Math.round(  (2*distance/pitch+N1/2+N2/2+ a /(distance/pitch))  *100)/100;
    chaincalc.length.value = Math.round(  pitch * chaincalc.links.value  *100)/100;
    chaincalc.ratio.value = Math.round(  N2/N1  *100)/100;

    if(isNaN(chaincalc.links.value) || chaincalc.links.value == 0) {
        chaincalc.links.value = "0";
    } 
    
    if(isNaN(chaincalc.length.value) || chaincalc.length.value == 0) {
        chaincalc.length.value = "0";
    } 
    
    if(isNaN(chaincalc.ratio.value) || chaincalc.ratio.value == 0) {
        chaincalc.ratio.value = "0";
    } 
    
    if (chaincalc.links.value == Number.POSITIVE_INFINITY || chaincalc.links.value == Number.NEGATIVE_INFINITY)
    {
        chaincalc.links.value="0";
    }
    
    if (chaincalc.length.value == Number.POSITIVE_INFINITY || chaincalc.length.value == Number.NEGATIVE_INFINITY)
    {
        chaincalc.length.value="0";
    }
    
    if (chaincalc.ratio.value == Number.POSITIVE_INFINITY || chaincalc.ratio.value == Number.NEGATIVE_INFINITY)
    {
        chaincalc.ratio.value="0";
    }
}

// motor sprocket teeth checkbox code //

function copyMotorSprocket(bf) {
    if (bf.checked)
        var text1 = document.getElementById("Motor1").value;
    else text1='';
        document.getElementById("Motor2").value = text1;
}

// wheel/axle sprocket teeth checkbox code //

function copyAxleSprocket(bf) {
    if (bf.checked)
        var text1 = document.getElementById("Axle1").value;
    else text1='';
        document.getElementById("Axle2").value = text1;
}

// center to center distance checkbox code //

function copyTextValue(bf) {
    if(bf.checked)
        var text1 = document.getElementById("Name1").value;
    else text1='';
        document.getElementById("Name2").value = text1;
}

// button uncheck checbox code //

$(window).load(function(){
    $("#btn").click(function(){
        $(':checkbox').each(function () {
            $(this).removeAttr('checked');
            $('input[type="checkbox"]').prop('checked', false);
        })
    });
});

// reset uncheck checkbox code //

$(window).load(function(){
    $("#clr").click(function(){
        $(':checkbox').each(function () {
            $(this).removeAttr('checked');
            $('input[type="checkbox"]').prop('checked', false);
        })
    });
});

