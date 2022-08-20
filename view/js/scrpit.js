const myJsonId = document.getElementsByClassName('myJsonId');
const myJsonArtist = document.getElementsByClassName('myJsonArtist');
const myJsonImage = document.getElementsByClassName('myJsonImage');
const myJsonMp3 = document.getElementsByClassName('myJsonMp3');
const myJsonName = document.getElementsByClassName('myJsonName');


const play_btn = document.getElementById('playBtn');
const myPlayerDiv = document.querySelector('#myPlayerDiv');
const myCurrentTimeDiv = document.querySelector('#myMusicTimeDiv');
const seekBar = document.querySelector('#mySeek');
const currentTime = document.querySelector('#myCurrentTime');
const musicDuration = document.querySelector('#myDurationSong');
const forwardBtn = document.querySelector('.myForward');
const backwardBtn = document.querySelector('.myBackWARD');
const myControlsDiv = document.querySelector('#myControlsDiv');
const play_music = document.getElementById("music_player");
const music_image = document.getElementById("music_image");
const albumName = document.getElementById("albumName");

var id = 0;
var rowNum = 0;

function playMusic(musicId, myRow) {


    globalThis.rowNum = myRow;
    globalThis.id = musicId;
    const mymusic = musicId;


    const formatTime = (time) => {
        let min = Math.floor(time / 60);
        if (min < 10) {
            min = `0${min}`;

        }
        let sec = Math.floor(time % 60);
        if (sec < 10) {
            sec = `0${sec}`;
        }
        return `${min} : ${sec}`;
    }


    if (!(play_btn.classList.contains('pause'))) {
        play_btn.classList.toggle('pause');
        // console.log(myJsonId[i]);
    }


    for (let i = 0; i < myJsonId.length; i++) {
        if (myJsonId[i].value == mymusic) {


            music_image.setAttribute("src", myJsonImage[i].value);
            play_music.setAttribute("src", myJsonMp3[i].value);

            seekBar.value = 0;
            currentTime.innerHTML = '00:00';


            setTimeout(() => {
                seekBar.max = play_music.duration;
                musicDuration.innerHTML = formatTime(play_music.duration);
            }, 300)


            seekBar.addEventListener('change', () => {
                play_music.currentTime = seekBar.value;
            })

            setInterval(() => {
                seekBar.value = play_music.currentTime;
                currentTime.innerHTML = formatTime(play_music.currentTime);
            }, 500)


            // forwardBtn.addEventListener('click', () => {
            //   musicId=i++;
            //   playMusic(musicId);
            // })

            backwardBtn.addEventListener('click', () => {


            })


        }

    }


    // music_image.setAttribute("src",imageDirection);
    albumName.style.display = "none";
    myPlayerDiv.style.visibility = "visible";
    myControlsDiv.style.visibility = "visible";
    myCurrentTimeDiv.style.visibility = "visible";
    // play_music.setAttribute("src",mp3Direction);
    // play_music.play();


}


function myBackward() {


    var number = parseInt(id);
    number--;
    if (number <= 1) {
        playMusic(rowNum, rowNum);

    } else if (number > 1) {

        playMusic(number, rowNum);

    }

}


function myForward() {

    console.log(rowNum);

    var number = parseInt(id);
    number++;
    if (rowNum >= number) {
        playMusic(number, rowNum);

    } else if (rowNum < number) {

        playMusic(1, rowNum);

    }

}


function myPlayBtn() {

    if (play_btn.classList.contains('pause')) {
        play_btn.classList.remove('pause');
        play_music.play();
    } else if (!(play_btn.classList.contains('pause'))) {
        play_btn.classList.add('pause');
        play_music.pause();
    }


    // play_btn.classList.toggle('pause');
    // console.log(myJsonMp3[i]);
    // play_btn.classList.toggle('pause');
    // console.log(typeof(musicId), musicId );

}


// dashboard admin design

const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
    var ctx = chart.getContext("2d");
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

$(document).ready(function () {
    $(".data-table").each(function (_, table) {
        $(table).DataTable();
    });
});









