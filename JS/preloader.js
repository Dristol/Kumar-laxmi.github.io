
/* Preloader */
#preloader {
	position: fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	background-color:#fff;/* change if the mask should be a color other than white */
	z-index:99; /* makes sure it stays on top */
}

#status {
	width:200px;
	height:200px;
	position:absolute;
	left:50%; /* centers the loading animation horizontally on the screen */
	top:50%; /* centers the loading animation vertically on the screen */
	background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkXciXd_bcjuWYuJTgHML765AeIo5zqaGJEWHkYz0Yq5j0PBB'); /* path to your loading animation */
	background-repeat:no-repeat;
	background-position:center;
	margin:-100px 0 0 -100px; /* is width and height divided by two */
}