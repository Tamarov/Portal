var topMenuFlag = 0;
var topMenuOnLineRadioFlag = topMenuMusicFlag = topMenuPlaylistFlag = 0;

function topMenu(){
	if(0 == topMenuFlag){
		document.getElementById("leftTopMenu").style.display = "block";
		topMenuFlag = 1;
	}else{
		document.getElementById("leftTopMenu").style.display = "none";
		topMenuFlag = 0;
	}
}
function topMenuOnLineRadio(){
	var radioImg = document.getElementById("left-menu-online-radio-icon");
	var radioText = document.getElementById("left-menu-online-radio-text");
	if(0 == topMenuOnLineRadioFlag){
		radioImg.style.backgroundImage = "url(./img/online-radio-on.png";
		radioText.style.color = "#646464";
		topMenuOnLineRadioFlag = 1;
		topMenuMusicFlag = topMenuPlaylistFlag = 1;
		topMenuMusic();
		topMenuPlaylist();
	}else{
		radioImg.style.backgroundImage = "";
		radioText.style.color = "";
		topMenuOnLineRadioFlag = 0;
	}	
}
function topMenuMusic(){
	var musicImg = document.getElementById("left-menu-music-icon");
	var musicText = document.getElementById("left-menu-music-text");
	if(0 == topMenuMusicFlag){
		musicImg.style.backgroundImage = "url(./img/music-on.png";
		musicText.style.color = "#646464";
		topMenuMusicFlag = 1;
		topMenuOnLineRadioFlag = topMenuPlaylistFlag = 1;
		topMenuOnLineRadio();
		topMenuPlaylist();
	}else{
		musicImg.style.backgroundImage = "";
		musicText.style.color = "";
		topMenuMusicFlag = 0;
	}	
}
function topMenuPlaylist(){
	var playlistImg = document.getElementById("left-menu-playlist-icon");
	var playlistText = document.getElementById("left-menu-playlist-text");
	if(0 == topMenuPlaylistFlag){
		playlistImg.style.backgroundImage = "url(./img/top-menu-playlist-on.png";
		playlistText.style.color = "#646464";
		topMenuPlaylistFlag = 1;
		topMenuOnLineRadioFlag = topMenuMusicFlag = 1;
		topMenuOnLineRadio();
		topMenuMusic();
	}else{
		playlistImg.style.backgroundImage = "";
		playlistText.style.color = "";
		topMenuPlaylistFlag = 0;
	}	
}