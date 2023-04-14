const audio = ['../backsound.mp3',]; //Just change this source to change the song
const audioNames = [audioEnchanted = new Audio(),];
for ( let i = 0; i < audio.length; i++ ) {
	audioNames[i].src = audio[i];
}
function audioPlay(name) { // play audio
    if ( name === 'Enchanted' ) {
        audioNames[0].play();
    }
}
function play() {
    audioPlay('Enchanted');
}

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if ( isMobile.any() ) {
    alert('Halo, pastikan udah hidupin volume suara ya');
}

let daynight = document.getElementById('daynight');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
let bg = document.getElementById('bg');
var rotation = 0;
let day = 'day';

sun.addEventListener('click', rotate);
moon.addEventListener('click', rotate);

function rotate() {
    if (text.innerHTML == "coba klik matahari nya deh, I guarantee you'll be amazed" || scene >= 45) {
        rotation = rotation + 0.5;
        daynight.style.transform = 'rotate(' + rotation + 'turn)';
        document.body.classList.toggle('dark-theme');
    }
    if (rotation % 1 == 0) day = 'day';
    else day = 'night';
}

function stars() {
    let count = 300;
    let scene = document.querySelector('.content');
    let i = 0;
    while (i < count) {
        let star = document.createElement('star');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        star.style.animationDuration = 15 + duration + 's';
        star.style.animationDelay = duration + 's';

        scene.appendChild(star);
        i++;
    }
}

function firefliesF() {
    let scene = document.querySelector('#fireflies');
    let count = 300;
    let i = 0;
    while (i < count) {
        let fireflies = document.createElement('fireflies');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 1;

        fireflies.style.left = x + 'px';
        fireflies.style.top = y + 'px';
        fireflies.style.width = 1 + size + 'px';
        fireflies.style.height = 1 + size + 'px';
        fireflies.style.animationDuration = 15 + duration + 's';
        fireflies.style.animationDelay = duration + 's';

        scene.appendChild(fireflies);
        i++;
    }
}

let content = document.getElementById('content');
let text = document.getElementById('text');
let magic = document.getElementById('magic');
let shoots = document.getElementById('shootingStar');
let btn = document.getElementById('btnWrap');
let cover = document.getElementById('cover');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let scene = -1;
let count = 0;
// let g1 = document.getElementById('g1');
content.addEventListener('click', function () {
    scene++;
    if (scene == 0) {
        cover.style.animation = 'fadeout 1s alternate forwards';
        play();
        console.log('Created by: Aflinxh. Follow me on Tiktok: @aflinxh');
    } else if (scene == 1) {
        text.innerHTML = 'kotanya kelihatan bagus banget ya';
        cover.style.zIndex = '-98';
        play();
    } else if (scene == 2) {
        text.innerHTML = 'colorful... penuh warna ';
        play();
    } else if (scene == 3) {
        text.innerHTML = 'yang warna-warni itu  nya, bagus banget ya';
        play();
    } else if (scene == 4) {
        text.innerHTML = 'gedung-gedung ini cerita nya sering kita  lihat kalau sore dan malam ';
        play();
    } else if (scene == 5) {
        text.innerHTML = 'emang gak mirip 100% sih, tapi ya ga jelek-jelek amatllah ya ,hehehee';
        play();
    } else if (scene == 6) {
        text.innerHTML = 'abstrak tapi bagus  bget, jadi aku mau tunjukin ke kamu';
        play();
    } else if (scene == 7) {
        text.innerHTML = 'coba deh, luangin waktu bentar buat ngeliatin ini';
        play();
    } else if (scene == 8) {
        text.innerHTML = 'suka gak?';
        play();
    } else if (scene == 9) {
        text.innerHTML = 'tapi ini akan jauh lebih cantik sewaktu malam hari';
        play();
    } else if (scene == 10) {
        text.innerHTML = 'jadi, mau  tunggu sampe malam ga?....';
        play();
    } else if (scene == 11) {
        text.innerHTML = 'HAHAHAH gak kok, bercanda... OTW langsung sulapin jadi malam aja mungkin';
        play();
    } else if (scene == 12) {
        text.innerHTML = 'sini sini, aku mau kasih kamu kekuatan buat muterin langit jadi gelap ';
        play();
    } else if (scene == 13) {
        text.innerHTML = "coba klik matahari nya deh, I guarantee you'll be amazed";
        play();
    } else if (scene == 14 && day == 'night') {
        play();
        bg.style.background = '#000';
        let count = 0;
        text.innerHTML = '';
        const actionInterval = setInterval(function () {
            if (count == 3) {
                clearInterval(actionInterval);
                text.innerHTML = 'gimana? bagus gak?';
            }
            count++;
        }, 500);
    } else if (scene >= 14 && scene <= 43 && day != 'night') {
        scene = 13;
        text.innerHTML = "coba klik matahari nya deh, I guarantee you'll be amazed";
        play();
    } else if (scene == 15) {
        text.innerHTML = 'Nahkan udah malam jadinya';
        text.style.transitionDelay = '0s';
        play();
    } else if (scene == 16) {
        text.innerHTML = 'Gedungnya nya bakal kelihatan makin bagus kan';
        play();
    } else if (scene == 17) {
        text.innerHTML = 'tapi keliatan nya masih biasa aja ya? ga ada specialnya ya ?Iyalah yang special cuman kamu .Hehehee Gpp kan becanda';
        play();
    } else if (scene == 18) {
        text.innerHTML = 'langit nya juga sepi bet ga ada bintang ,mendung X ya ?';
        play();
    } else if (scene == 19) {
        text.innerHTML = 'aku inget kamu pernah bilang kalo kamu suka Elsa, Gimana kalau Langitnya aku aksih bintang ,Kaya elsa ciptain Salju .aku juga bisa ciptain bintang loh';
        play();
    } else if (scene == 20) {
        text.innerHTML = 'jadi... let me show U something';
        play();
    } else if (scene == 21) {
        text.innerHTML = ' Are u ready?';
        play();
    } else if (scene == 22) {
        play();
        $('.fireworks').fireworks({
            sound: false,
            opacity: 1,
            width: '100%',
            height: '100%',
        });
        count = 3;
        const actionInterval = setInterval(function () {
            text.style.fontSize = '30px';
            if (count > 0) text.innerHTML = count;
            else if (count == 0) {
                text.innerHTML = '';
                text.style.fontSize = '18px';
                scene = 22;
                stars();
            } else if (count == -3) {
                $('.fireworks').remove();
                bg.style.background = 'var(--background-color)';
                bg.style.animation = 'bgcolor 1.5s linear';
                document.body.classList.add('star');
                text.style.top = '20%';
                scene = 22;
            } else if (count == -4) {
                text.style.animation = 'fade 2s linear';
                text.style.fontSize = '30px';
                text.innerHTML = ' UNTUK ZARITA';
                clearInterval(actionInterval);
                scene = 22;
            }
            count--;
            scene = 22;
        }, 1000);
        scene = 22;
    } else if (scene == 23 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'Zarita ,Semangat Magang Ya ,Dan semangat Puasanya';
        play();
    } else if (scene == 24 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'Aku mau kasih kamu hadiah ,Tapi Karena kemalaman aku ga nemu hadiahnya';
        play();
    } else if (scene == 25 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'Hadiahnya  aku kasih  bintang aja ya... Bintangnya Lebih Dari 100';
        // firefliesF();
        // play();
    } else if (scene == 26 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'beneran lebih dari 100, kalo gak percaya, hitung aja sendiri HAHA';
        play();
    } else if (scene == 27 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'dan untuk wish nya, buat aja sendiri aja ya cantik, wleee &#128541';
        play();
    } else if (scene == 28 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'tuh ada  bintang jatuh satu ,Make a wish Make A wish jangan lupa';
        shoots.style.display = 'block';
        shoots.innerHTML = '<span></span>';
        shoots.classList = 'shootingStar one';
        play();
    } else if (scene == 29 && count == -5) {
        text.innerHTML = 'kecepetan ya? wkwk Maaf';
        shoots.classList = 'shootingStar none';
        play();
    } else if (scene == 30) {
        text.innerHTML = 'oke deh, nih sekali lagi Tapi siap2 ya...';
        play();
    } else if (scene == 31) {
        text.innerHTML = 'tuhhh, buruan make a wish yang banyak';
        shoots.classList = 'shootingStar one';
        play();
    } else if (scene == 32) {
        text.innerHTML = 'WKWK kamu wish apa? Atau gak sempet?';
        btn.style.display = 'flex';
        play();
    } else if (scene == 33) {
        text.innerHTML = 'wkwk suruh siapa lama...';
        btn.style.display = 'none';
        play();
    } else if (scene == 34) {
        text.innerHTML = 'oke deh, aku kasih lagi, mau gak? Tapi kamu harus janji Kita baikan kan ? Kalau ketemu aku sapa aja gpp kok. Janji?';
        yes.innerHTML = 'Iya janji';
        no.innerHTML = 'Iya Kita Baikan ';
        btn.style.display = 'flex';
        play();
    } else if (scene == 35) {
        text.innerHTML = 'tuhhh aku spam-in bintang jatuh buat kamu hadiah dari aku ';
        btn.style.display = 'none';
        shoots.classList = 'shootingStar';
        shoots.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
        play();
    } else if (scene == 36) {
        text.innerHTML = 'biar kamu bisa make wishes sebanyak mungkinnn';
        play();
    } else if (scene == 37) {
        text.innerHTML = 'dan biar aku gak dikatain pelit &#128540 HAHA';
        play();
    } else if (scene == 38) {
        text.innerHTML = '+ 1 lagi...';
        play();
    } else if (scene == 39) {
        text.innerHTML = 'aku mau bilang';
        play();
    }else if (scene == 40) {
        text.innerHTML = "today , you become best version than Ur Past, and become the bravest version of you ,so far";
        play();
    } else if (scene == 41) {
        text.innerHTML = "and I am glad I  take part in ur story.. parts or even chapters..even though my desire is to be from Ur home";
        play();
    } else if (scene == 42) {
        text.innerHTML = ' About That we ,ll  see been ,hehehe ... and with these more tahn 100 stars,...';
        play();
    } else if (scene == 43) {
        text.innerHTML = 'I wish you...';
        firefliesF();
    } else if (scene == 44) {
        document.body.classList.add('fireflies');
        magic.style.display = 'block';
        magic.style.animation = 'fade 2s linear';
        document.querySelector('#fireflies').style.animation = 'fade 1s alternate forwards';
        text.style.animation = 'fade 1s linear';
        text.innerHTML = 'and here are the fireflies ,Jangan Lupa Blokirannya di lepas ya Zarita ,Please.';
        play();
    } else if (scene >= 45) {
        text.innerHTML = '';
        magic.style.display = 'none';
        play();
    }
});