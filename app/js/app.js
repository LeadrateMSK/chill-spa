import './easy-toggler.min.js'
import Swiper from 'swiper/bundle'

document.addEventListener('DOMContentLoaded', () => {
	"use strict"

	const swiper = new Swiper('.header__slider', {
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});


	const navbar = document.getElementById('navbar').classList;

	window.addEventListener('scroll', (e) => {
		if(pageYOffset > 300) navbar.add('navbar--scrolled');
		else navbar.remove('navbar--scrolled');
	})


})