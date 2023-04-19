var requiredTime;

// function fetchGIF(type){
   
// }

function cacl() {
    var out = document.getElementById("out").value.trim().toUpperCase();
    var totalh = document.getElementById("totalh").value.trim().toUpperCase();

    var timeType = document.getElementById("TimeType").value;

    if(timeType == "1"){
        requiredTime = 270;
    }
    else if(timeType == "2"){
        requiredTime = 420;
    }
    else{
        requiredTime = 510;
    }



    try {
        var HourStringFromTotalHour = totalh.split('H');
        var totalhour = HourStringFromTotalHour[0].includes('M') ? 0 : parseInt(HourStringFromTotalHour[0]);
        totalhour = parseInt(totalhour) > 12 ? parseInt(totalhour) - 12 : totalhour; 
        var miniuteStringFromTotalHour = HourStringFromTotalHour[0].includes('M') ? HourStringFromTotalHour[0] : HourStringFromTotalHour[1];
        var miniute = miniuteStringFromTotalHour.includes('M') ? parseInt(miniuteStringFromTotalHour.split('M')[0]) : 0;

        var totalminute = miniute + (parseInt(totalhour) * 60);
    }
    catch {
        alert("Please enter valid format! check video below!")
        return;
    }
    if (isNaN(totalhour) || isNaN(totalminute)) {
        alert("Please enter valid format! check video below!")
        return;
    }


    var outhour = parseInt(out.split(':')[0]);
    outhour = outhour > 12 ? outhour - 12 : outhour;
    var outminute = parseInt(out.split(':')[1]);
    // var abc = (outhour * 60) + outminute;

    var remaining = requiredTime - totalminute + 1;
    if (remaining <= 0) {
        Goout();
        return;
    }

    var lastHour = Math.floor(remaining / 60);

    var lastMinute = remaining % 60;



    outhour += lastHour;
    outminute += lastMinute;
    if (outminute >= 60) {
        outhour++;
        outminute -= 60;
    }


    var d = new Date();
    let hour = d.getHours() < 12 ? d.getHours() : d.getHours() - 12;

    let totalminute1 = d.getMinutes();
    if (hour > outhour || (hour == outhour && totalminute1 > outminute)) {
        fetch(`https://g.tenor.com/v1/search?q=gohome&key=LIVDSRZULELA&limit=50`).then((res)=>{
            return res.json()
        }).then((data)=>{
            var obj = data.results[Math.ceil(Math.random()*49)];
            var str = obj.media[0].gif.url;
            Swal.fire({
                text: "You can leave, You already done with hours",
                imageUrl: str || 'https://i.redd.it/d4bezp9infx41.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                backdrop: `
        rgba(0,0,123,0.4)`,
                allowOutsideClick: false
            })
        })
      
    }
    else {
        if (outhour > 12) {
            outhour -= 12;
        }
        fetch(`https://g.tenor.com/v1/search?q=dontgo&key=LIVDSRZULELA&limit=50`).then((res)=>{
            return res.json()
        }).then((data)=>{
            var obj = data.results[Math.ceil(Math.random()*49)];
            var str = obj.media[0].gif.url;
            Swal.fire({
                title: "Please  Wait Untill  \n" + (outhour < 10 ? ("0" + outhour) : outhour) + ':' + (outminute < 10 ? ("0" + outminute) : outminute),
                // text: "Ubho ree \n"+ outhour+':'+outminute,
                imageUrl: str || './gallery/jaldi.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(./gallery/O9FG4W0.jpg)',
                backdrop: `
                rgba(218, 218, 233, 0.72)`,
                allowOutsideClick: false
            })
        });
        
    }

}


function Goout() {
    Swal.fire({
        text: "You can leave, You already done with hours",
        imageUrl: 'https://i.redd.it/d4bezp9infx41.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(./gallery/O9FG4W0.jpg)',
        backdrop: `
        rgba(218, 218, 233, 0.72)`,
        allowOutsideClick: false
    })
}