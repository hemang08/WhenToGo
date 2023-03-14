
function cacl(){
    var out = document.getElementById("out").value.trim();
    var totalh = document.getElementById("totalh").value.trim();

    // try{
        var totalhour = totalh.split('H')[0];
        var miniute = totalh.split('H').length > 1 ? isNaN(parseInt(totalh.split('H')[1].split('M')[0])) ? 0 : parseInt(totalh.split('H')[1].split('M')[0]) : parseInt(totalh.split('H')[0].split('M')[0]);

        var totalminute = miniute + (parseInt(totalhour) * 60);
    

    var outhour =  parseInt(out.split(':')[0]);
    var outminute = parseInt(out.split(':')[1]);
    var abc = (outhour *60) +outminute;

    var remaining = 510 - totalminute +1;

    var lastHour = Math.floor(remaining/60);

    var lastMinute = remaining%60;
    
    

    outhour += 	lastHour;
    outminute += lastMinute;
    if(outminute>60){
        outhour++;
        outminute -=60;
    }


    var d = new Date();
    let hour = d.getHours() <12 ? d.getHours() : d.getHours() - 12;
    
    let totalminute1 = d.getMinutes();
    if(hour > outhour || (hour == outhour && totalminute1 > outminute) ){    
    Swal.fire({
        text: "You can leave, You already done with hours",
        imageUrl: 'https://i.redd.it/d4bezp9infx41.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
        backdrop: `
    rgba(0,0,123,0.4)`,
    allowOutsideClick : false
      })
    }
    else{
        if(outhour>12){
            outhour -=12;
        }

        Swal.fire({
            title: "Please  Wait Untill  \n"+ outhour+':'+outminute,
            // text: "Ubho ree \n"+ outhour+':'+outminute,
            imageUrl: 'https://www.indianfilmhistory.com:3002/media/files_i/1605699272863ddhfi8tcwg.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)`,
            allowOutsideClick : false
          })
    }

}