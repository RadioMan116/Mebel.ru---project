var _document = $(document);
var browser = {
	isRetinaDisplay: isRetinaDisplay(),
	isIe: msieversion(),
	isMobile: isMobile()
};
if (jQuery().matchHeight) {
	setTimeout(function () {
		(() => {
			$('.products__block .product-name').matchHeight();
		})();
	}, 300);
	setTimeout(function () {
		(() => {
			$('.common__block-product.product.col-4 .product-img').matchHeight();
		})();
	}, 300);
	setTimeout(function () {
		(() => {
			$('.common__block-product.product.col-4 .product-name').matchHeight();
		})();
	}, 300);
	setTimeout(function () {
		(() => {
			$('.new-four.lists.products.result.four .product-name').matchHeight();
		})();
	}, 300);
	setTimeout(function () {
		(() => {
			$('.news-list__main-content .top-sl .articles-block-img').matchHeight();
			$('.articles .top-sl h3').matchHeight();
		})();
	}, 600);
	setTimeout(function () {
		(() => {
			$('.solutions-land .solutions-land__info').matchHeight();
		})();
	}, 500);
};

function initSwiperHover() {
	(() => {
		let newCatalog = document.querySelector('.new-catalog');
		if (jQuery().matchHeight) {
			if (newCatalog) {
				(() => {
					$('.new-catalog .products__block-product').matchHeight({
						// byRow: false,
					});
					// setTimeout(function() {
					// 	$('.new-catalog .products__block-product').matchHeight({
					// 		// byRow: false,
					// 	});
					// }, 100);
				})();
				if ($(window).width() <= 991) {
					$(".col-3").not($(".products__block-product")).first().append($(".collections.new-collections")).append($(".sorting.new-sorting"));
				}
			}
		}
		let productCard = document.querySelector('.common__view.pc-756');
		if (jQuery().matchHeight) {
			if (productCard) {
				(() => {
					$('.new-four .common__block-product').matchHeight({
						// byRow: false,
					});
					// setTimeout(function() {
					// 	$('.new-four .common__block-product').matchHeight({
					// 		// byRow: false,
					// 	});
					// }, 100);
				})();
				if ($(window).width() <= 991) {
					$(".col-8").not($(".mob-756")).first().append($(".col-4").not($(".swiper-slide")).first());
				}
			}
		}
	})();
	let swiperHover = $(".new-four .swiper .swiper-container ");
	if ($(".new-four")) {
		swiperHover.each(function (index, el) {
			$(el).addClass("swiperHover-" + index);
			$(el).find('.swiper-pagination').addClass("js-pagination-hover js-pagination-hover-" + index);
			setTimeout(function () {
				var swiperHoverInit = new Swiper(".swiperHover-" + index, {
					spaceBetween: 20,
					slidesPerView: 1,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
				});
				$(el).mouseleave(function () {
					let firstPagination = $(el).find('.swiper-pagination-bullet');
					if (!$(firstPagination[0]).hasClass('active')) {
						swiperHoverInit.slideTo($(this).index(0));
					}
				});
				$(el).find('.js-pagination-hover').on("click", function (e) {
					document.location.assign($(this).attr('href'));
				});
				$(el).find('.swiper-pagination-bullet').hover(function () {
					swiperHoverInit.slideTo($(this).index());
				});
			}, 300);
		});
	}
}
initSwiperHover();
//use variable
const registerForm = $('#registration-form');
const registerFormNew = $('#registration-form-new');
const reviewForm = $('#review_form');
const writeUs = $('#write-to-us-form');
const bestOfferFuter = $('#best-offer-futer');
// const cheaperForm = $('#cheaper');
const serviceForm = $('#service-form');
const manufacturerPopup = $('#manufacturer-popup');
const creditPopup = $('#credit-popup');
const askdesigenrPopup = $('#askdesigenr-popup');
const loginForm = $('#login-form');
const commentForm = $('.comment_form');
const subscribeSsubform = $('#bx_subscribe_subform_sljzMT');
const sendusSenda = $('#sendus-form-senda');
const landForm = $('#form-land');
var onFileInputChange = function (e) {
	let input = e.target;
	let button = input.parentNode;
	let inputData = this.files[0];
	let fileName = '';
	var arName = this.name.split('_');
	var currentId = parseInt(arName.pop());
	var commonNamePart = this.name.replace('_' + currentId, '');
	var nextId = currentId + 1;
	var newInput = document.createElement("input");
	newInput.setAttribute('type', 'file');
	newInput.name = commonNamePart + '_' + nextId;
	newInput.id = 'file_' + nextId;
	newInput.classList.add("file__input", "js-file-webform");
	newInput.setAttribute('accept', input.getAttribute('accept'));
	this.parentNode.appendChild(newInput);
	newInput.addEventListener('change', onFileInputChange);
	let reader = new FileReader();
	reader.onload = (function (theFile) {
		return function (e) {
			var div = document.createElement('div');
			div.classList.add('file__field');
			div.id = 'file__field_' + currentId;
			if (!theFile.type.match('image.*')) {
				div.innerHTML = '<img title="' + theFile.name + '" src="/frontend/img/svg/iconpdf.svg" class="file-pdf" />';
				div.innerHTML += '<div class="file__text">' + theFile.name.substring(0, 5) + '...</div>';
			} else {
				div.innerHTML = '<img title="' + theFile.name + '" src="' + e.target.result + '" />';
			}
			div.innerHTML += '<div class="file__delete js-file__delete"></div>';
			document.getElementById('file__section').append(div);
		};
	})(inputData);
	reader.readAsDataURL(inputData);
};
document.addEventListener("click", function (e) {
	if (e.target.classList.contains("js-file__delete")) {
		let parentNode = e.target.parentNode;
		let elId = parentNode.id.replace('file__field_', '');
		parentNode.remove();
		let fileInputToDelete = document.getElementById('file_' + elId);
		if (fileInputToDelete) {
			fileInputToDelete.remove();
		}
	}
});
// Бренды в фильтре
setTimeout(function () {
	$(".js-filter__show-more-list").each(function () {
		var e, t = $(this),
			i = !1,
			s = 0,
			n = parseInt(t.data("hasCol"), 2),
			a = t.children(".js-filter__show-more-item"),
			r = t.closest(".js-filter__show-more-wrap").find(".js-filter__show-more-btn");
		a.each(function (e) {
			if (s += $(this).outerHeight(!0), 3 == e) {
				if (n) var i = s / n;
				else i = s;
				return t.css("max-height", i + "px"),
					void r.css("display", "inline-block");
			}
		}),
			r.click(function () {
				!1 === i && (i = !0, e = $(this).find('span').text()),
					t.toggleClass("active"),
					$(this).toggleClass("active"), "cкрыть" == $(this).find('span').text() ? $(this).find('span').text(e) : $(this).find('span').text("cкрыть");
			});
		let filterList = document.querySelectorAll('.js-filter__show-more-list');
		if (filterList) {
			filterList.forEach(el => {
				if (el.offsetHeight >= el.scrollHeight) {
					el.nextElementSibling.style.display = 'none';
				}
			});
		}
	});
	if ($(window).width() > 600) {
		$(".js-loop-more-list").each(function () {
			var e, t = $(this),
				i = !1,
				s = 0,
				n = parseInt(t.data("hasCol"), 2),
				a = t.children(".js-loop-more-item"),
				r = t.closest(".js-loop-more-wrap").find(".js-loop-more-btn span");
			a.each(function (e) {
				if (s += $(this).outerHeight(!0), 3 == e) {
					if (n) var i = s / n;
					else i = s;
					return t.css("max-height", i + "px"),
						void r.css("display", "inline-block");
				}
			}),
				r.click(function () {
					!1 === i && (i = !0, e = $(this).text()),
						t.toggleClass("active"),
						$(this).toggleClass("active"), "Скрыть" == $(this).text() ? $(this).text(e) : $(this).text("Скрыть");
				});
			let filterList = document.querySelectorAll('.js-loop-more-list');
			if (filterList) {
				filterList.forEach(el => {
					if (el.offsetHeight >= el.scrollHeight) {
						el.nextElementSibling.style.display = 'none';
					}
				});
			}
		});
	}
	if ($(window).width() <= 600) {
		$(".js-loop-more-list").each(function () {
			var e, t = $(this),
				i = !1,
				s = 0,
				n = parseInt(t.data("hasCol"), 2),
				a = t.children(".js-loop-more-item"),
				r = t.closest(".js-loop-more-wrap").find(".js-loop-more-btn span");
			a.each(function (e) {
				if (s += $(this).outerHeight(!0), 4 == e) {
					if (n) var i = s / n;
					else i = s;
					return t.css("max-height", i + "px"),
						void r.css("display", "inline-block");
				}
			}),
				r.click(function () {
					!1 === i && (i = !0, e = $(this).text()),
						t.toggleClass("active"),
						$(this).toggleClass("active"), "Скрыть" == $(this).text() ? $(this).text(e) : $(this).text("Скрыть");
				});
			let filterList = document.querySelectorAll('.js-loop-more-list');
			if (filterList) {
				filterList.forEach(el => {
					if (el.offsetHeight >= el.scrollHeight) {
						el.nextElementSibling.querySelector('span').style.display = 'none';
					}
				});
			}
		});
	}
}, 600);
(() => {
	let brandContent = document.querySelector('.content__wrapper .text');
	let salonContent = document.querySelector('.content__block__wrapper');
	let commonContent = document.querySelector('.common-desc');
	if (brandContent) {
		if (brandContent.offsetHeight >= brandContent.scrollHeight) {
			brandContent.querySelector('.read-full').style.display = 'none';
		}
	}
	if (salonContent) {
		if (salonContent.offsetHeight >= salonContent.scrollHeight) {
			salonContent.querySelector('.read-full').style.display = 'none';
		}
	}
	if (commonContent) {
		if (commonContent.offsetHeight >= commonContent.scrollHeight) {
			commonContent.querySelector('.read-full').style.display = 'none';
			commonContent.classList.add("show");
		}
	}
})();

function mailValid(e) {
	e.find('.mail-input').each(function () {
		$(this).rules('add', {
			required: true,
			email: true,
			messages: {
				required: 'Заполните поле',
				// email: 'Некорректный email',
				email: '',
			}
		});
	});
}

function phoneValid(e) {
	e.find('.phone-valid').each(function () {
		$(this).rules('add', {
			required: true,
			mobileRU: true,
			messages: {
				required: 'Заполните поле',
			}
		});
	});
}

function requiredInput(e) {
	e.find('.require-field').each(function () {
		$(this).rules('add', {
			required: true,
			messages: {
				required: 'Заполните поле',
			}
		});
	});
}
var url = $(this).attr('action');

function sendAjaxForm(url, data, thnxModal) {
	$.ajax(url, {
		method: 'post',
		data: data,
		success: function () {
			$.fancybox.close();
			$.fancybox.open({
				src: thnxModal,
				opts: {
					afterLoad: function () {
						let fancyboxSlide = document.querySelectorAll('.fancybox-slide');
						fancyboxSlide.forEach(function (element) {
							bodyScrollLock.disableBodyScroll(element);
						});
					},
					beforeClose: function () {
						bodyScrollLock.clearAllBodyScrollLocks();
					}
				}
			}, {
				autoFocus: false,
				touch: false,
			});
		}
	});
}
// if ($(window).width() > 600) {
(() => {
	let table = $('.table__item-span');
	if (jQuery().matchHeight) {
		if (table) {
			$('.table__left-item,.table__item-span').matchHeight({
				byRow: false,
			});
		}
	}
})();
// }
// function revForm() {
//   reviewForm.validate({
//     submitHandler: function () {
//       $('.btn').on('click', function () {
//         $.ajax(url, {
//           method: 'post',
//           // data: data,
//           processData: false,
//           contentType: false,
//           success: function () {
//             $.fancybox.close();
//             $.fancybox.open({
//               src: '#feedback',
//               opts: {
//                 afterLoad: function () {
//                   let fancyboxSlide = document.querySelectorAll('.fancybox-slide');
//                   fancyboxSlide.forEach(function (element) {
//                     bodyScrollLock.disableBodyScroll(element);
//                   });
//                 },
//                 beforeClose: function () {
//                   bodyScrollLock.clearAllBodyScrollLocks();
//                 }
//               }
//             }, {
//               autoFocus: false,
//               touch: false,
//             });
//           }
//         });
//       });
//     },
//   });
//   mailValid(reviewForm);
//   phoneValid(reviewForm);
//   requiredInput(reviewForm);
// }
// revForm();
function revForm() {
	reviewForm.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#feedback';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	mailValid(reviewForm);
	phoneValid(reviewForm);
	requiredInput(reviewForm);
}
revForm();
//Напишите нам модал
function letsWrite() {
	writeUs.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#feedback-write';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	phoneValid(writeUs);
	requiredInput(writeUs);
}
letsWrite();
//Лучшие предложения футеры
function theBestOfferFooter() {
	bestOfferFuter.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	phoneValid(bestOfferFuter);
	requiredInput(bestOfferFuter);
}
theBestOfferFooter();
// Универсальная форма
function themanufacturerPopup() {
	manufacturerPopup.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	mailValid(manufacturerPopup);
	phoneValid(manufacturerPopup);
	requiredInput(manufacturerPopup);
}
themanufacturerPopup();

function thecreditPopup() {
	creditPopup.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	mailValid(creditPopup);
	phoneValid(creditPopup);
	requiredInput(creditPopup);
}
thecreditPopup();

function theaskdesigenrPopup() {
	askdesigenrPopup.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	mailValid(askdesigenrPopup);
	phoneValid(askdesigenrPopup);
	requiredInput(askdesigenrPopup);
}
theaskdesigenrPopup();
//форму на сервисные стр
function theserviceForm() {
	serviceForm.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	// mailValid(serviceForm);
	phoneValid(serviceForm);
	requiredInput(serviceForm);
}
theserviceForm();
// Форма входа
function theloginForm() {
	loginForm.validate();
	/*
	loginForm.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	*/
	requiredInput(loginForm);
	mailValid(loginForm);
	// phoneValid(loginForm);
}
theloginForm();
// Форма в статьях
function thecommentForm() {
	commentForm.validate({});
	requiredInput(commentForm);
}
thecommentForm();
// Форма Акций
function thesubscribeSsubform() {
	subscribeSsubform.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	requiredInput(subscribeSsubform);
	mailValid(subscribeSsubform);
	// phoneValid(subscribeSsubform);
}
thesubscribeSsubform();
// Форма Задать Вопрос
function thesendusSenda() {
	sendusSenda.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			const thnxModal = '#subscribe-user';
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	mailValid(sendusSenda);
	phoneValid(sendusSenda);
	requiredInput(sendusSenda);
}
thesendusSenda();
//форма Landing
function thelandForm() {
	landForm.validate();
	// mailValid(landForm);
	phoneValid(landForm);
	requiredInput(landForm);
}
thelandForm();
// новая форма регистрации
function theregisterFormNew() {
	registerFormNew.validate({
		submitHandler: function (form) {
			const _form = $(form);
			const url = _form.attr('action');
			var data = _form.serialize();
			sendAjaxForm(url, data, thnxModal);
		},
	});
	phoneValid(registerFormNew);
	requiredInput(registerFormNew);
}
theregisterFormNew();
$(document).ready(function () {
	var swiperArticles = new Swiper('.articles .swiper-articles', {
		slidesPerView: 4,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.articles .swiper-button-next',
			prevEl: '.articles .swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			480: {
				slidesPerView: 1.2,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1250: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
	var swiperArticles2 = new Swiper('.swiper-reviews', {
		slidesPerView: 2,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.articles .swiper-button-next',
			prevEl: '.articles .swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			480: {
				slidesPerView: 1.2,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});
	var swiper = new Swiper('.shows .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			480: {
				slidesPerView: 1.4,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 2,
				spaceBetween: 20
			}
		}
	});
	var swiper99 = new Swiper('.swiper-brands-slide', {
		slidesPerView: 6,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.swiper-brands-slide .swiper-button-next',
			prevEl: '.swiper-brands-slide .swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			480: {
				slidesPerView: 2.2,
				watchSlidesVisibility: true,
				spaceBetween: 8,
				slidesPerColumn: 2
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2.5,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 3,
				spaceBetween: 8
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 4,
				spaceBetween: 8
			}
		}
	});
	var swiper99_2 = new Swiper('.swiper-brands-slide-two', {
		slidesPerView: 6,
		spaceBetween: 8,
		slidesPerColumn: 2,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.swiper-brands-slide-two .swiper-button-next',
			prevEl: '.swiper-brands-slide-two .swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			480: {
				slidesPerView: 2.1,
				watchSlidesVisibility: true,
				spaceBetween: 8,
				slidesPerColumn: 2
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2.5,
				watchSlidesVisibility: true,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 3,
				spaceBetween: 12
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 4,
				spaceBetween: 8
			},
			1250: {
				slidesPerView: 5,
				spaceBetween: 8
			}
		}
	});
});
_document.ready(function () {
	//   $('#name_user').on('keypress', function() {
	//     $(this).val($(this).val().replace(/ '\D [^0-9]'/, ''));
	// });
	//FANCYBOX
	function clearForm(form) {
		form.trigger('reset');
	}

	function clearField(form) {
		form.find('.input__item').removeClass('error');
	}

	function clearText(form) {
		form.find('.error').hide();
	}

	function disBtn(form) {
		form.find('.btn').attr('disabled', true);
	}
	$('[data-src]').fancybox({
		toolbar: false,
		smallBtn: true,
		touch: false,
		autoFocus: false,
		//modalwindow
		afterLoad: function () {
			var fancyboxSlide = document.querySelectorAll('.fancybox-slide');
			fancyboxSlide.forEach(function (element) {
				bodyScrollLock.disableBodyScroll(element);
			});
		},
		beforeClose: function () {
			clearForm($(this.src).find('.general-form'));
			clearField($(this.src).find('.general-form'));
			clearText($(this.src).find('.general-form'));
			disBtn($(this.src).find('.general-form'));
			if ($('.fancybox-slide').length == 1) {
				bodyScrollLock.clearAllBodyScrollLocks();
			}
		},
	});
	//mask
	// validate
	// $.validator.addMethod("mobileRU", function (phone_number, element) {
	// 	var ruPhone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	// 	return this.optional(element) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(ruPhone_number);
	// }, "Номер телефона указан не корректно!");
	$.validator.addMethod("mobileRU", function (phone_number, element) {
		var ruPhone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
		return this.optional(element) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test(ruPhone_number);
	}, "");
	//Отзыв о товаре модал
	//show-code-number
	$('.flex.phone-block').on('click', '.link-s', function () {
		if ($('.input__item-tel').hasClass('valid')) {
			$('.code-mob').fadeIn(300);
		} else { }
	});
	//disabled button
	$(document).on('change', '.checkbox-general', function () {
		let check = $(this).is(':checked');
		let btn = $(this).closest('.general-form').find('.btn');
		if (check) {
			btn.removeAttr('disabled');
		} else {
			btn.attr('disabled', true);
		}
	});
	$(document).on('change', '.check__checkbox', function () {
		let check = $(this).is(':checked');
		let btn = $(this).closest('form').find('.btn');
		let checkColor = $(this);
		if (check) {
			btn.removeAttr('disabled');
			checkColor.removeClass('red');
		} else {
			btn.attr('disabled', true);
			checkColor.addClass('red');
		}
	});
	//Показать все характеристики
	let showLink = $('.all-link');
	showLink.on('click', function (e) {
		e.preventDefault();
		$(this).closest('.common__specif').find('.table-item-hide').toggleClass('hide');
		if ($('.table-item-hide').hasClass('hide')) {
			showLink.html('Показать все параметры');
		} else {
			showLink.html("Скрыть все параметры");
		}
	});
	//   function clearField(form){
	//     form.find('.input-field').removeClass('error');
	//   }
	//   // send form
	//  $('form').on('submit', function(){
	//    //отправка
	//    clearForm($(this));
	//  })
	//click check
	$('.input__item').on('focus', function () {
		if ($(this).hasClass('error')) {
			$(this).closest('.focused').addClass('non-border');
		} else {
			$(this).closest('.focused').addClass('have-border');
		}
	});
	$('.input__item').on('focusout', function () {
		$(this).closest('.focused').removeClass('have-border');
	});
	// validate
	/*
		registerForm.validate({

			submitHandler: function () {
				if (registerForm.valid()) {
					registerForm.trigger('reset');
					$.fancybox.open({
						src: '#checkmail',
						type: 'inline',
						opts: {
							afterLoad: function () {
								var fancyboxSlide = document.querySelectorAll('.fancybox-slide');
								fancyboxSlide.forEach(function (element) {
									bodyScrollLock.disableBodyScroll(element);
								});
							},
							beforeClose: function () {
								if ($('.fancybox-slide').length == 1) {
									bodyScrollLock.clearAllBodyScrollLocks();
								}
							},
						}
					}, {
						touch: false,
					});
				}
			},
		});
	*/
	registerForm.validate({});
	mailValid(registerForm);
	phoneValid(registerForm);
	registerForm.find('[name="REGISTER[PASSWORD]"]').each(function () {
		$(this).rules('add', {
			required: true,
			minlength: 6,
			messages: {
				required: 'Заполните поле',
				minlength: 'Пароль должен содержать не менее 6 символов',
			}
		});
	});
	registerForm.find('[name="REGISTER[CONFIRM_PASSWORD]"]').each(function () {
		$(this).rules('add', {
			required: true,
			minlength: 6,
			equalTo: '[name="REGISTER[PASSWORD]"]',
			messages: {
				required: 'Заполните поле',
				minlength: 'Пароль должен содержать не менее 6 символов',
				equalTo: 'Пароли не совпадают',
			}
		});
	});
	registerForm.find('.code-mobile').each(function () {
		$(this).rules('add', {
			required: true,
			messages: {
				required: 'Заполните поле',
			}
		});
	});
	var cStars = function (starsBlock, nowPos) {
		// У всех убираем active
		starsBlock.find('.stars-item').removeClass('star-hover');
		for (var i = 0; nowPos + 1 > i; i++) {
			starsBlock.find('.stars-item').eq(i).toggleClass('star-hover');
		}
	};
	$('.stars-star').on('click', '.stars-item', function () {
		const indx = $(this).index();
		const starsBlock = $(this).parent();
		cStars(starsBlock, indx);
	});
	$('.basic-equipment__toggle').on('click', function () {
		$('.basic-equipment__left').toggleClass('active');
	});
	if ($(window).width() < 991) {
		// var swiperView = new Swiper('.swiper-view', {
		// 	slidesPerView: 3,
		// 	spaceBetween: 8,
		// 	slideVisibleClass: 'none',
		// 	breakpoints: {
		// 		// when window width is <= 320px
		// 		320: {
		// 			slidesPerView: 1,
		// 			spaceBetween: 0
		// 		},
		// 		// when window width is <= 480px
		// 		500: {
		// 			slidesPerView: 1,
		// 			spaceBetween: 20
		// 		},
		// 		600: {
		// 			slidesPerView: 2,
		// 			spaceBetween: 20
		// 		},
		// 		// when window width is <= 640px
		// 		756: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 8
		// 		},
		// 		// when window width is <= 640px
		// 		991: {
		// 			slidesPerView: 3,
		// 			spaceBetween: 8
		// 		}
		// 	}
		// });
		$('ul.crumbs__ul').scrollLeft(1000);
		(() => {
			let headerPresented = document.querySelector('.header__center-presented');
			if (headerPresented) {
				let headerCenterCatalotList = document.querySelector('.header__center-catalot__list li');
				headerCenterCatalotList.append(headerPresented);
			}
		})();
		(() => {
			let listTwo = document.querySelector('.lists.two');
			if (listTwo) {
				let item = document.querySelectorAll('.lists-item.two-item');
				item.forEach((el) => {
					let atrebut = el.querySelector('.atrebut');
					let price = el.querySelector('.product-price');
					price.append(atrebut);
				});
			}
		})();
	}
	if ($(window).width() < 601) {
		$(".catalog-desc__show").click(function () {
			$(this).toggleClass("active");
			$(this).parent().toggleClass("active");
		});
	}
	if ($(window).width() <= 991) {
		$(".js-filter__mob-btn").click(function () {
			$(this).toggleClass("active");
			$(this).parent().toggleClass("active");
			$(".js-filters__wrapper").toggleClass("active");
		});
		$(".js-filter__caption").click(function () {
			$(this).toggleClass("active");
		});
		$(".js-filter__subtitle").click(function () {
			$(this).toggleClass("active");
		});
		var newCategory = new Swiper('.new-category .swiper-container', {
			slidesPerView: "auto",
			spaceBetween: 4,
			freeMode: true,
			// freeModeSticky: true,
			// loop: true,
			// navigation: {
			// 	nextEl: '.reviews-land .swiper-button-next',
			// 	prevEl: '.reviews-land .swiper-button-prev',
			// },
			// pagination: {
			// 	el: '.reviews-land .swiper-pagination',
			// },
			breakpoints: {
				// when window width is <= 320px
				// 320: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 8
				// },
				// when window width is <= 480px
				// 500: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 8
				// },
				// 600: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 8
				// },
				// when window width is <= 640px
				// 756: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20
				// },
				// when window width is <= 640px
				// 991: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20
				// }
			}
		});
	}
	$('.content__block .photo__block .right .img img').hover(function () {
		var img = $(this).attr('src');
		$('.content__block .photo__block .left img').prop('src', img);
	});
	$('.read-full').on('click', function () {
		$('.content__block').toggleClass('show-p');
	});
	$('.read-full').on('click', function () {
		$('.description-brand__text').toggleClass('show-p');
	});
	$('.read-full').on('click', function () {
		$('.common-desc').toggleClass('show-p');
	});
	$('.show-all').on('click', function () {
		$(this).parent().parent().toggleClass('show');
	});
	var swiper_tabs = new Swiper('.swiper-tabs', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		history: {
			key: 'slide',
		},
	});
	var swiper_banner = new Swiper('.banner-container', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var about_project_slider = new Swiper('.about-project-slider', {
		loop: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	var swiper = new Swiper('.swiper-articles1', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: false,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
	initSliders();

	function initSliders() {
		let inputFocus = document.querySelector('.search-place__field');
		if (inputFocus) {
			setTimeout(function () {
				inputFocus.focus();
			}, 600);
		}
		var swiper = new Swiper('.swiper-articles2', {
			on: {
				init: function () {
					hideOverlay();
					console.log('init');
					if (inputFocus) {
						setTimeout(function () {
							inputFocus.focus();
						}, 300);
					}
				},
			},
			slidesPerView: 3,
			spaceBetween: 14,
			loop: false,
			navigation: {
				nextEl: '.swiper-articles2 .swiper-button-next',
				prevEl: '.swiper-articles2 .swiper-button-prev',
			},
			breakpoints: {
				// when window width is <= 320px
				320: {
					slidesPerView: 1,
					spaceBetween: 8
				},
				// when window width is <= 480px
				500: {
					slidesPerView: 1,
					spaceBetween: 8,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
					},
				},
				600: {
					slidesPerView: 1,
					spaceBetween: 8
				},
				// when window width is <= 640px
				756: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is <= 640px
				991: {
					slidesPerView: 2,
					spaceBetween: 20
				}
			}
		});
		var swiper12 = new Swiper('.product-corusel', {
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
			},
		});
	}
	var swiperComments = new Swiper('.swiper-comments', {
		slidesPerView: 4,
		spaceBetween: 20,
		slideVisibleClass: 'none',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is <= 640px
			1250: {
				slidesPerView: 3,
				spaceBetween: 22
			}
		}
	});
	var swiperSales = new Swiper('.swiper-sales', {
		pagination: {
			el: '.swiper-pagination',
		},
	});
	$('.fancybox-img').on('click', function () {
		setTimeout(function () {
			$('button.fancybox-button.fancybox-button--thumbs').trigger('click');
		}, 100);
	});
	$('#filter_open').on('click', function () {
		$('.filters__form').toggleClass('show-i');
	});
	$("a[data-scroll]").on('click', function () {
		var btn = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $('div' + btn).offset().top - 100
		}, 1000);
		return false;
	});
	$('.filters__form__tabs .tabs-tab').on('click', function () {
		var tab_id = $(this).attr('data-tab');
		$('.filters__form__tabs .tabs-tab').removeClass('active');
		$('.tab-filter').removeClass('active');
		$('.tab-filter').addClass('none');
		$(this).addClass('active');
		$("#" + tab_id + "s").removeClass('none').addClass('active');
	});
	// $(window).resize(function () {
	//   swiperUpdate();
	// });
	function hideOverlay() {
		$('#overlay').hide();
	}
});

function isRetinaDisplay() {
	if (window.matchMedia) {
		var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
		return mq && mq.matches || window.devicePixelRatio > 1;
	}
};

function msieversion() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ");
	if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
		return true;
	} else {
		return false;
	}
};

function isMobile() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
};
var swiper_list_2 = new Swiper('.two-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});
// grid toggler
_document.on('blur', '.input-block input', function () {
	if ($(this).val() !== '') {
		$(this).parent().addClass('not-empty').removeClass('empty').removeClass('focused');
	} else {
		$(this).parent().addClass('empty').removeClass('not-empty').removeClass('focused');
	}
});
$('.input-block input').focus(function () {
	$(this).parent().addClass('focused');
});
_document.on('click', '[js-show-grid]', function () {
	$(this).toggleClass('is-active');
	$('.demo-grid').fadeToggle();
});
_document.on('click', '#burger', function () {
	$('body').toggleClass('menu-open');
});
_document.on('click', '.tab', function () {
	$('.tab').removeClass('active');
	$(this).addClass('active');
});
// LAZY LOAD
//////////
function initLazyLoad() {
	var $lazy = _document.find('[js-lazy]');
	if ($lazy.length === 0) {
		ieFixPictures();
		return;
	}
	var fadeTimeout = 250;
	$lazy.Lazy({
		threshold: 400,
		//Amount of pixels below the viewport, in which all images gets loaded before the user sees them.
		enableThrottle: true,
		throttle: 100,
		scrollDirection: 'vertical',
		// effect: 'fadeIn',
		// effectTime: fadeTimeout,
		// visibleOnly: true,
		onError: function onError(element) {
			console.log('error loading ' + element.data('src'));
			try {
				element.attr('src', element.data('src'));
			} catch (e) {
				console.log('eroor appending src', e);
			}
		},
		beforeLoad: function beforeLoad(element) { // element.attr('style', '')
		},
		afterLoad: function afterLoad(element) {
			animateLazy(element);
		},
		onFinishedAll: function onFinishedAll() {
			ieFixPictures();
		}
	});

	function ieFixPictures() {
		if (browser.isIe) {
			// ie pollyfils
			picturefill();
			window.fitie.init();
		}
	}
} ////////////////////////////////
$(window).on("load", function () {
	$('#barba-wrapper').addClass('is-preloaded');
	// preloaderDone();
	initLazyLoad();
	(() => {
		let reviewsAbout = document.querySelector('.reviews-about');
		if (reviewsAbout) {
			reviewsAbout.querySelectorAll('.articles-block-user__top').forEach(el => {
				if (el.querySelector('.midle-p').offsetHeight >= el.querySelector('.midle-p').scrollHeight) {
					el.classList.add("show");
					if (el.querySelector('.show-all')) {
						el.querySelector('.show-all').style.display = 'none';
					}
				}
			});
		}
	})();
});
$('.sidebar__dropdown > span').on('click', function () {
	$(this).parent().toggleClass('open');
	$(this).siblings().slideToggle();
});
$('.has-child > span:not(.quantity)').on('click', function () {
	$(this).parent().toggleClass('open');
	$(this).siblings('ul').slideToggle();
});
$('.show-other-comments').on('click', function () {
	let val = $(this).attr('value');
	if ($(this).text() == 'Скрыть комментарии') {
		$(this).text('Показать ' + val + ' комментарии');
	} else {
		$(this).text('Скрыть комментарии');
	}
	$(this).parent().siblings('.additional-comments').slideToggle();
});
_document.ready(function () {
	var mySwiper = new Swiper('.news-article__slider', {
		loop: false,
		// centeredSlides: true,
		// slidesPerView: 4,
		// initialSlide: 2,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
		},
		slidesPerView: "auto",
		spaceBetween: 20,
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			500: {
				slidesPerView: 1,
				initialSlide: 0
			},
			756: {
				slidesPerView: 2
			}
		}
	});
	var mySwiper1 = new Swiper('.news-article__items-slider', {
		loop: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		slidesPerView: 4,
		spaceBetween: 20,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			756: {
				slidesPerView: 3,
				spaceBetween: 8
			}
		}
	});
	var mySwiper2 = new Swiper('.more-articles__items', {
		loop: false,
		slidesPerView: 4,
		spaceBetween: 20,
		autoplay: false,
		breakpoints: {
			515: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			755: {
				slidesPerView: 2,
				spaceBetween: 8
			},
			990: {
				slidesPerView: 3,
				// spaceBetween: 8
			}
		},
		navigation: {
			nextEl: '.more-articles__items .swiper-button-next',
			prevEl: '.more-articles__items .swiper-button-prev',
		},
	});
	$('.banner__wrapper .swiper-button-next').removeClass('swiper-button-disabled');
	let overlay = $('#overlay');
	/*
	$(".intro-filter, .header__center-search, #search").on("click", function () {
		$(overlay).fadeIn(300);
		bodyScrollLock.disableBodyScroll(overlay);

		if (jQuery().matchHeight) {

			setTimeout(function () {
				(() => {
					$('.products__block .product-name').matchHeight();
					$('.new-four.lists.products.result.four .product-name').matchHeight();
				})();
			}, 400);
		}

		$('.search-place__field').focus();
	});
	*/
	$("body").on("click", ".overlay-logo__close", function (e) {
		e.preventDefault();
		bodyScrollLock.clearAllBodyScrollLocks();
		$(overlay).hide();
		$('#search-fld').trigger('reset');;
	});
	$('html').on('keydown', function (e) {
		if (e.keyCode == 27) {
			if ($(overlay).css('display') == 'block') {
				$(overlay).hide();
				bodyScrollLock.clearAllBodyScrollLocks();
			}
		}
	});
	// (() => {
	// 	let inputCopy = document.querySelector('#link-product');
	// 	if (inputCopy) {
	// 		inputCopy.parentNode.addEventListener('click', () => {
	// 			let value = inputCopy.value
	// 			navigator.clipboard.writeText(value);
	// 		})
	// 	}
	// })();
});
// _document.on('click', 'a.all-link', function () {
//   event.preventDefault();
//   $('.common__specif').addClass('active-table');
// });
$('[ajax-modal]').on('click', function () {
	var modalCode = $(this).attr('ajax-modal');
	var ajaxUrl = '/ajax/webforms.php?code=' + modalCode;
	var entityId = $(this).attr('data-entity-id') || $('.js-entity-id').attr('data-entity-id') || $('[data-product-id]').attr('data-product-id');
	if (entityId) {
		ajaxUrl += '&entity_id=' + entityId;
	}
	$.get(ajaxUrl, function (response) {
		$('body').append(response);
	});
});
_document.on('submit', '.js-ajax-form', function () {
	var form = this;
	var formData = new FormData(form);
	$.ajax({
		url: form.action,
		method: form.method,
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			if ($('.js-popup-wrapper').length > 0) {
				$('.js-popup-wrapper').html(response);
			} else {
				$('body').append(response);
				form.reset();
			}
		}
	});
	return false;
});
$('[popup], .not_cl').on('click', function () {
	let popupAttr = $(this).attr('popup');
	$('.' + popupAttr).addClass('open');
	input_update();
});
_document.on('click', '.popup-close', function () {
	$('.popup').removeClass('open');
	$(this).parents('.js-ajax-modal').remove();
});
_document.on('click', function (e) {
	if (!$(e.target).is('.popup *, .popup-btn, [ajax-popup], [ajax-popup] *, [popup], [popup] *, .not_cl, .not_cl *')) {
		$('.popup').removeClass('open');
		if ($('.js-ajax-modal')) {
			$('.js-ajax-modal').remove();
		}
	}
});

function input_update() {
	var $input = $(".input");

	function inputActive() {
		$input.find("input").focus(function () {
			$(this).parents(".input").toggleClass("input-active");
		});
		$input.find("input").focusout(function () {
			$(this).parents(".input").toggleClass("input-active");
		});
		$input.find("textarea").focus(function () {
			$(this).parents(".input").toggleClass("input-active");
		});
		$input.find("textarea").focusout(function () {
			$(this).parents(".input").toggleClass("input-active");
		});
	}

	function inputFilled() {
		var $i = $input.find("input");
		var $ta = $input.find("textarea");
		$i.keyup(function () {
			$t = $(this);
			if ($t.val().length >= 2) {
				$t.parents(".input").addClass("input-filled");
			} else {
				$t.parents(".input").removeClass("input-filled");
			}
		});
		$ta.keyup(function () {
			$t = $(this);
			if ($t.val().length >= 2) {
				$t.parents(".input").addClass("input-filled");
			} else {
				$t.parents(".input").removeClass("input-filled");
			}
		});
	}
	var $input = $(".input");
	for (let i = 0; i < $input.length; i++) {
		var $t = $input.eq(i).find('input, textarea');
		if ($t.val().length >= 2) {
			$t.parents(".input").addClass("input-filled");
		}
	}
	if ($input.length >= 2) {
		inputActive();
		inputFilled();
	}
	inputActive();
	inputFilled();
}
input_update();

function initSelectric() {
	$('select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false,
	});
}

function initSalonList() {
	// var $sContainThumb = $('.gallery-thumbss'),
	// 	$sContain = $('.gallery-topp'),
	// 	$this,
	// 	$this1;
	// $sContain.each(function () {
	// 	var $thumbs = $(".gallery-thumbs" + $(this).data("id"));
	// 	$this1 = new Swiper($thumbs, {
	// 		spaceBetween: 12,
	// 		slidesPerView: 5,
	// 		freeMode: true,
	// 		direction: 'vertical',
	// 		watchSlidesVisibility: true,
	// 		watchSlidesProgress: true,
	// 		touchRatio: 0
	// 	});
	// 	console.log($this)
	// 	console.log($this1)
	// 	if ($this) {
	// 		$this = new Swiper(this, {
	// 			spaceBetween: 25,
	// 			thumbs: {
	// 				swiper: $this1
	// 			},
	// 			breakpoints: {
	// 				// when window width is <= 320px
	// 				320: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 0
	// 				},
	// 				// when window width is <= 640px
	// 				756: {
	// 					slidesPerView: 1,
	// 					spaceBetween: 0
	// 				}
	// 			}
	// 		});
	// 	}
	// });
	let sContain = document.querySelectorAll('.gallery-topp');
	let sContainThumb = document.querySelectorAll('.gallery-thumbss');
	if (sContain.length === sContainThumb.length) {
		sContain.forEach((element, index) => {
			element.classList.add("instance-" + index);
			sContainThumb.forEach((element2, index2) => {
				element2.classList.add("instanceThumbs-" + index2);
			});
			var galleryThumbs = new Swiper(".instanceThumbs-" + index, {
				spaceBetween: 12,
				slidesPerView: 5,
				freeMode: true,
				direction: 'vertical',
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				touchRatio: 0
			});
			var galleryTop = new Swiper(".instance-" + index, {
				spaceBetween: 25,
				thumbs: {
					swiper: galleryThumbs,
				},
				breakpoints: {
					// when window width is <= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 0
					},
					// when window width is <= 640px
					756: {
						slidesPerView: 1,
						spaceBetween: 0
					}
				}
			});
		});
	}
};
var $keypress0 = $("#file-upload");
if ($keypress0.length > 0) {
	(function () {
		function Init() {
			var fileSelect = document.getElementById('file-upload'),
				fileDrag = document.getElementById('file-drag'),
				submitButton = document.getElementById('submit-button');
			fileSelect.addEventListener('change', fileSelectHandler, false);
			// Is XHR2 available?
			var xhr = new XMLHttpRequest();
			if (xhr.upload) {
				// File Drop
				fileDrag.addEventListener('dragover', fileDragHover, false);
				fileDrag.addEventListener('dragleave', fileDragHover, false);
				fileDrag.addEventListener('drop', fileSelectHandler, false);
			}
		}

		function fileDragHover(e) {
			var fileDrag = document.getElementById('file-drag');
			e.stopPropagation();
			e.preventDefault();
		}

		function fileSelectHandler(e) {
			// Fetch FileList object
			var files = e.target.files || e.dataTransfer.files;
			// Cancel event and hover styling
			fileDragHover(e);
			// Process all File objects
			for (var i = 0, f; f = files[i]; i++) {
				parseFile(f);
				uploadFile(f);
			}
		}

		function output(msg) {
			var m = document.getElementById('messages');
			m.innerHTML = msg;
		}

		function parseFile(file) {
			output('<div class="file-name_">' + encodeURI(file.name) + '</div>');
		}
		/*
		function uploadFile(file) {

			var xhr = new XMLHttpRequest(),
				fileInput = document.getElementById('class-roster-file'),
				fileSizeLimit = 1024; // In MB
			if (xhr.upload) {
				// Check if file is less than x MB
				if (file.size <= fileSizeLimit * 1024 * 1024) {
					// File received / failed
					xhr.onreadystatechange = function (e) {
						if (xhr.readyState == 4) {
							// Everything is good!

							// progress.className = (xhr.status == 200 ? "success" : "failure");
							// document.location.reload(true);
						}
					};

					// Start upload
					xhr.open('POST', document.getElementById('file-upload-form').action, true);
					xhr.setRequestHeader('X-File-Name', file.name);
					xhr.setRequestHeader('X-File-Size', file.size);
					xhr.setRequestHeader('Content-Type', 'multipart/form-data');
					xhr.send(file);
				} else {
					output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
				}
			}
		}
		*/
		// Check for the various File API support.
		if (window.File && window.FileList && window.FileReader) {
			Init();
		} else {
			document.getElementById('file-drag').style.display = 'none';
		}
	})();
}

function initSalonPage() {
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 12,
		slidesPerView: 5,
		freeMode: true,
		direction: 'vertical',
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		touchRatio: 0
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		thumbs: {
			swiper: galleryThumbs
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});
	if ($(window).width() <= 991) {
		if ($('.gallery-thumbs .common__gallery__right-thumb').length === 1) {
			$('.gallery-thumbs .common__gallery__right-thumb').hide();
		}
	}
};
$('.add-phone').click(function () {
	let copy_block = $('.copy-block').html();
	$('.add-phone-block').append('<div class="lk__left-flex">' + copy_block + '</div>');
});
$('.close-message').click(function () {
	$(this).parent('.message').hide();
});
$(document).on('click', '.more__detall ul li.share a, a.share', function (e) {
	event.preventDefault();
	var copytext = $(this).attr('href');
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val(copytext).select();
	document.execCommand("copy");
	$temp.remove();
	$(this).append('<span class="tooltip">Ссылка скопирована</span>');
	setTimeout(function () {
		$('.tooltip').remove();
	}, 1500);
});
(() => {
	let sharingPopup = document.querySelector('.sharing');
	if (sharingPopup) {
		let sharingButton = sharingPopup.querySelector('.sharing__button');
		let sharingContainer = sharingPopup.querySelector('.sharing__container');
		sharingButton.addEventListener('click', (e) => {
			e.preventDefault();
			sharingContainer.classList.toggle('active');
			// sharingContainer.addEventListener('click', (e) => {
			// 	e.stopPropagation();
			// })
			document.addEventListener('click', function (event) {
				var isClickInside = sharingPopup.contains(event.target);
				if (!isClickInside) {
					sharingContainer.classList.remove('active');
				}
			});
		});
	}
})();

function initNoUiSlider() {
	if ($('#input-price-keypress-0').length > 0) {
		var stepsSlider = document.getElementById('price');
		var input0 = document.getElementById('input-price-keypress-0');
		var input1 = document.getElementById('input-price-keypress-1');
		var inputs = [input0, input1];
		var minVal = parseInt(input0.value);
		var maxVal = parseInt(input1.value);
		noUiSlider.create(stepsSlider, {
			start: [minVal, maxVal],
			connect: true,
			step: 1,
			range: {
				'min': [minVal],
				'max': [maxVal]
			},
		});
		stepsSlider.noUiSlider.on('update', function (values, handle, unencoded) {
			inputs[handle].value = parseInt(unencoded[handle]);
		});
		stepsSlider.noUiSlider.on('end', function (values, handle, unencoded) {
			$('#catalogFilter').submit();
		});
	}
};
_document.on('click', '.popup.being-finalized-popup  .btn.btn-red', function (e) {
	$(this).parents('.popup__wrapper').children('.popup-close').trigger('click');
});
_document.on('click', '.show__all', function (e) {
	$('.tab-filter.active').toggleClass('show__all_');
});
_document.on('click', '.popup__close', function (e) {
	$('.popup-close').trigger('click');
});
$('.category-toggle-top').on('click', '.tab-1:not(.active)', function () {
	$(this).addClass('active').siblings().removeClass('active').closest('.category-toggle').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

function MaskedPhone() {
	const inputPhones = document.querySelectorAll('.mask-validate');
	inputPhones.forEach(function (element) {
		var phoneMask = IMask(element, {
			mask: '+{7}(000)000-00-00'
		});
	});
}
MaskedPhone();
initSlid();

function initSlid() {
	if ($(window).width() <= 756) {
		// var slide16 = document.querySelector('.second-main-slide');
		// if (slide16) {
		// 	var swiperMainPageSecond = new Swiper(slide16, {
		// 		observer: true,
		// 		observeParents: true,
		// 		slidesPerView: 1,
		// 		spaceBetween: 8,
		// 		slideVisibleClass: 'none',
		// 		loop: false,
		// 		breakpoints: {
		// 			756: {
		// 				slidesPerView: 3,
		// 				spaceBetween: 8,
		// 			},
		// 			480: {
		// 				slidesPerView: 1,
		// 				spaceBetween: 8,
		// 			},
		// 			320: {
		// 				slidesPerView: 2,
		// 				spaceBetween: 8,
		// 			},
		// 		}
		// 	});
		// 	// slide16.swiper.update()
		// }
		if (jQuery().matchHeight) {
			setTimeout(function () {
				(() => {
					$('.products__block .product-title').matchHeight();
					$('.products__block .product-img').matchHeight();
				})();
			}, 300);
		}
	}
}
$('[data-scroll-to-block]').click(function (e) {
	e.preventDefault();
	$('html, body').stop().animate({
		scrollTop: $(this.getAttribute('href')).offset().top - 30 + 'px'
	});
});
if ($(window).width() <= 600) {
	var swiperBrand = document.querySelector('.photo__block.swiper-container');
	if (swiperBrand) {
		var swiperBrandSlider = new Swiper(swiperBrand, {
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 8,
			slideVisibleClass: 'none',
			loop: false,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
		});
	}
}
if ($(window).width() <= 1250) {
	var swiperMainPage = new Swiper('.slide-main-page', {
		observer: true,
		observeParents: true,
		watchOverflow: true,
		slidesPerView: 'auto',
		slideVisibleClass: 'none',
		spaceBetween: 10,
		breakpoints: {
			1250: {
				slidesPerView: 6,
			},
			// 1024: {
			// 	slidesPerView: 7,
			// },
			// 991: {
			// 	slidesPerView: 5,
			// },
			756: {
				slidesPerView: 2.5,
			},
			589: {
				slidesPerView: 2,
			},
			// 320: {
			// 	slidesPerView: 2.5,
			// },
		}
	});
}
$(window).resize(function () {
	initSlid();
});
var about_land_slide = new Swiper('.about-land .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.about-land .swiper-button-next',
		prevEl: '.about-land .swiper-button-prev',
	},
	pagination: {
		el: '.about-land .swiper-pagination',
	},
	breakpoints: {
		// when window width is <= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 8
		},
		// when window width is <= 480px
		500: {
			slidesPerView: 1,
			spaceBetween: 8
		},
		600: {
			slidesPerView: 1,
			spaceBetween: 8
		},
		// when window width is <= 640px
		756: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is <= 640px
		991: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		1650: {
			slidesPerView: 2,
			spaceBetween: 20
		}
	}
});
var reviews_land_slide = new Swiper('.reviews-land .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.reviews-land .swiper-button-next',
		prevEl: '.reviews-land .swiper-button-prev',
	},
	pagination: {
		el: '.reviews-land .swiper-pagination',
	},
	breakpoints: {
		// when window width is <= 320px
		// 320: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 480px
		// 500: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// 600: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 640px
		// 756: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20
		// },
		// when window width is <= 640px
		// 991: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20
		// }
	}
});
var land_slider_slide = new Swiper('.land-slider .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: '.land-slider .swiper-button-next',
		prevEl: '.land-slider .swiper-button-prev',
	},
	pagination: {
		el: '.land-slider .swiper-pagination',
	},
	breakpoints: {
		// when window width is <= 320px
		// 320: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 480px
		// 500: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// 600: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 640px
		// 756: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20
		// },
		// when window width is <= 640px
		// 991: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20
		// }
	}
});
var productReviews = new Swiper('.product-reviews .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 100,
	// effect: "fade",
	navigation: {
		nextEl: '.product-reviews .swiper-button-next',
		prevEl: '.product-reviews .swiper-button-prev',
	},
	breakpoints: {
		// when window width is <= 320px
		// 320: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 480px
		// 500: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// 600: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 8
		// },
		// when window width is <= 640px
		900: {
			slidesPerView: 1.2,
			spaceBetween: 8,
			// effect: false,
		},
		// when window width is <= 640px
		// 991: {
		// 	slidesPerView: 3,
		// 	spaceBetween: 20
		// }
	}
});
var about_land_slide = new Swiper('.news-article .news-article__carousel', {
	slidesPerView: 3,
	observer: true,
	observeParents: true,
	watchOverflow: true,
	spaceBetween: 24,
	slideVisibleClass: 'none',
	navigation: {
		nextEl: '.news-article__carousel .swiper-button-next',
		prevEl: '.news-article__carousel .swiper-button-prev',
	},
	pagination: {
		el: '.news-article__carousel .swiper-pagination',
	},
	breakpoints: {
		// when window width is <= 320px
		320: {
			slidesPerView: 1.9,
			spaceBetween: 8
		},
		// when window width is <= 480px
		500: {
			slidesPerView: 1.9,
			spaceBetween: 8
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 8
		},
		// when window width is <= 640px
		756: {
			slidesPerView: 2,
			// spaceBetween: 20
		},
		// when window width is <= 640px
		991: {
			slidesPerView: 2,
			// spaceBetween: 20
		},
		1250: {
			slidesPerView: 2,
			// spaceBetween: 20
		}
	}
});
var designersThumbs = new Swiper('.designers .designers-thumbs', {
	spaceBetween: 30,
	slidesPerView: 5,
	direction: 'horizontal',
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	// navigation: {
	// 	nextEl: '.designers .swiper-button-next',
	// 	prevEl: '.designers .swiper-button-prev',
	// },
	// freeMode: true,
	// watchSlidesVisibility: true,
	// watchSlidesProgress: true,
	breakpoints: {
		// when window width is <= 320px
		320: {
			slidesPerView: 4,
			spaceBetween: 8
		},
		// when window width is <= 480px
		500: {
			slidesPerView: 4,
			spaceBetween: 8
		},
		600: {
			slidesPerView: 4,
			spaceBetween: 8
		},
		// when window width is <= 640px
		991: {
			slidesPerView: 4,
			spaceBetween: 0
		}
	}
});
var designersTop = new Swiper('.designers .designers-top', {
	spaceBetween: 0,
	thumbs: {
		swiper: designersThumbs
	},
	navigation: {
		nextEl: '.designers .swiper-button-next',
		prevEl: '.designers .swiper-button-prev',
	},
});
// .land-brand slider
(() => {
	if (document.querySelector('.land-brand')) {
		var land_brand = new Swiper('.land-brand .swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 8,
			freeMode: true,
			navigation: {
				nextEl: '.land-brand .swiper-button-next',
				prevEl: '.land-brand .swiper-button-prev',
			},
			// breakpoints: {
			// 	// when window width is <= 320px
			// 	480: {
			// 		slidesPerView: 2.2,
			// 		watchSlidesVisibility: true,
			// 		spaceBetween: 8,
			// 		slidesPerColumn: 2
			// 	},
			// 	// when window width is <= 480px
			// 	500: {
			// 		slidesPerView: 2.5,
			// 		watchSlidesVisibility: true,
			// 		spaceBetween: 8
			// 	},
			// 	600: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 8
			// 	},
			// 	// when window width is <= 640px
			// 	756: {
			// 		slidesPerView: 3,
			// 		spaceBetween: 8
			// 	},
			// 	// when window width is <= 640px
			// 	991: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 8
			// 	}
			// }
		});
		if ($('.land-brand .swiper-slide').length <= 6) {
			$('.land-brand  .swiper-button-prev').hide();
			$('.land-brand  .swiper-button-next').hide();
		}
	}
})();
if ($(window).width() <= 1250) {
	var solutions_land_slide = new Swiper('.solutions-land .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 0,
		navigation: {
			nextEl: '.solutions-land .swiper-button-next',
			prevEl: '.solutions-land .swiper-button-prev',
		},
		pagination: {
			el: '.solutions-land .swiper-pagination',
		},
		breakpoints: {
			// when window width is <= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			// when window width is <= 480px
			500: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			600: {
				slidesPerView: 1,
				spaceBetween: 8
			},
			// when window width is <= 640px
			756: {
				slidesPerView: 1,
				spaceBetween: 0
			},
			// when window width is <= 640px
			991: {
				slidesPerView: 2,
				spaceBetween: 0
			}
		}
	});
}
initSalonList();
initSelectric();
initSalonPage();
if ($(window).width() > 756) {
	if ((jQuery().masonry)) {
		setTimeout(function () {
			$('.tags__inner').masonry({
				// options
				itemSelector: '.tags__item',
				columnWidth: 0
			});
		}, 700);
	};
	(() => {
		let newsGallery = document.querySelectorAll(".news-gallery");
		if (newsGallery) {
			newsGallery.forEach(el => {
				let button = el.querySelector(".news-gallery__button");
				let buttonNext = el.querySelector(".news-gallery__button .swiper-button-next");
				let buttonPrev = el.querySelector(".news-gallery__button .swiper-button-prev");
				let slides = el.querySelectorAll(".news-gallery .swiper-slide.absolute");
				var startTime = 30;
				var currentTime = 0;
				var myTimer;
				var myTimerSpeed = 1000; // 1 sec
				resetTimer();

				function resetTimer() {
					stopTimer();
					currentTime = startTime;
				}

				function startTimer() {
					if (currentTime <= 0) {
						resetTimer();
						startTimer();
					} else {
						myTimer = setInterval(timerTick, myTimerSpeed);
					}
				}

				function stopTimer() {
					clearInterval(myTimer);
				}

				function timerTick() {
					currentTime--;
					if (currentTime == 0) {
						stopTimer();
						plusSlide();
					}
				}
				let slideIndex = 1;
				// showSlides(slideIndex);
				/* Функция увеличивает индекс на 1, показывает следующй слайд*/
				function plusSlide() {
					showSlides(slideIndex += 1);
				}
				/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
				function minusSlide() {
					showSlides(slideIndex -= 1);
				}
				/* Устанавливает текущий слайд */
				function currentSlide(n) {
					showSlides(slideIndex = n);
				}
				/* Основная функция слайдера */
				function showSlides(n) {
					let i;
					// let paginationDots = ;
					if (n >= slides.length) {
						slideIndex = 0;
					}
					if (n < 0) {
						slideIndex = slides.length - 1;
					}
					for (i = 0; i < slides.length; i++) {
						// slides[i];
						slides[i].classList.remove('swiper-slide-active');
					}
					// for (i = 0; i < paginationDots.length; i++) {
					// 	paginationDots[i].className = paginationDots[i].className.replace(" swiper-pagination-bullet-active", "");
					//
					// console.log(slideIndex)
					slides[slideIndex - 1];
					slides[slideIndex].classList.add('swiper-slide-active');
					restartprogressBar();
					resetTimer();
					startTimer();
					tippy.hideAll({});
					click();
					// paginationDots[slideIndex - 1].className += " swiper-pagination-bullet-active";
				}

				function close() { }

				function click() {
					// $('[aria-expanded="true"]').attr('aria-expanded', 'false').find('[data-tippy-root').remove();
					$(el).find(".swiper-slide-active").children('.news-gallery__item').click();
				}
				buttonNext.addEventListener('click', () => {
					plusSlide();
				});
				buttonPrev.addEventListener('click', () => {
					minusSlide();
				});
				$(el).on('click', '.news-gallery__item', function (e) {
					restartprogressBar();
					$(button).addClass("active");
					$(this).parent().addClass('swiper-slide-active').siblings().removeClass('swiper-slide-active');
					resetTimer();
					startTimer();
					let index = $('.news-gallery__item').index(this);
					slideIndex = index;
				});
				$(el).on('click', '.news-gallery__close ', function () {
					stopTimer();
					$(button).removeClass("active");
					$(slides).removeClass("swiper-slide-active");
					tippy.hideAll({});
				});
				document.addEventListener('click', function (event) {
					if (!el.contains(event.target)) {
						stopTimer();
						$(button).removeClass("active");
						$(slides).removeClass("swiper-slide-active");
						[...el.querySelectorAll('[data-tippy-root]')].forEach(node => {
							if (node._tippy) {
								node._tippy.hide();
							}
						});
					} else { }
				});

				function restartprogressBar() {
					var progressBar = el.querySelector('.progress');
					progressBar.classList.remove('animation');
					progressBar.offsetWidth = progressBar.offsetWidth;
					progressBar.classList.add('animation');
				};
				$(el).find($('.news-gallery__item')).each(function (i, item) {
					$('<div class = "tooltip-close"></div>').prependTo($(this).find('.products__block-product'));
					var tooltip = new tippy(item, {
						arrow: true,
						placement: 'auto', // top, right, bottom, left
						trigger: 'click',
						// maxWidth: 300, //px or string
						interactive: true,
						// leave these as they are
						// followCursor: true,
						allowHTML: true,
						hideOnClick: false,
						theme: 'light',
						appendTo: () => this,
						// ignoreAttributes: true,
						content: item.querySelector('.news-gallery__card'),
						onShow(instance) {
							tippy.hideAll({ exclude: instance });
						},
						onCreate: function (_constructor) {
							_constructor.popper.querySelector('.tooltip-close').addEventListener('click', function () {
								tooltip.hide();
								_constructor.reference.setAttribute('aria-expanded', 'false');
							});
						}
					});
				});
			});
		}
	})();
}
if ($(window).width() <= 756) {
	(() => {
		let newsGallery = document.querySelectorAll(".news-gallery");
		if (newsGallery) {
			newsGallery.forEach((el, i) => {
				let clone = el.querySelector('.news-gallery__container').cloneNode(true);
				clone.classList.add("clone");
				el.append(clone);
				$(el.querySelector('.clone')).wrap(`<div class="popup__content modal news-gallery-popup" id="popup-clone-${i}"><div class="new-four lists products result four">`);
				$(el.querySelectorAll('.news-gallery__item')).attr("data-fancybox", "").attr("data-src", `#popup-clone-${i}`);
				let swiper = el.querySelector('.clone');
				// let pagination = swiper.querySelector('.swiper-pagination');
				// let nextEl = swiper.querySelector('.swiper-button-next');
				// let prevEl = swiper.querySelector('.swiper-button-prev');
				let swiperTwo = swiper.querySelectorAll('.gallery-topp');
				$(el).on('click', '.news-gallery__item', function () {
					$(el.querySelector('.popup')).addClass('open');
					// clone.wrap('<div class="popup js-ajax-modal open"><div class="popup__wrapper js-popup-wrapper">')
					var gallerySwiper = new Swiper(swiper, {
						spaceBetween: 0,
						slidesPerView: 1,
						pagination: {
							el: '.clone .swiper-pagination',
							clickable: true,
						},
						// navigation: {
						// 	nextEl: nextEl,
						// 	prevEl:prevEl,
						// },
					});
					swiperTwo.forEach(element => {
						let paginationTwo = element.querySelector('.swiper-pagination.hover');
						var swiper_list_2 = new Swiper(element, {
							slidesPerView: 1,
							pagination: {
								el: paginationTwo,
								clickable: true,
							},
						});
					});
				});
			});
		}
	})();
	var advantages_land_slide = new Swiper('.advantages-land .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 20,
		// freeMode: true,
		pagination: {
			el: '.advantages-land .swiper-pagination',
		},
	});
}
// if ((jQuery().tooltipster)) {
// 	var $tooltip = $('.js-tooltip');
// 	$tooltip.tooltipster({
// 		contentCloning: false,
// 		trigger: 'click',
// 		zIndex: 9999999
// 	});
// };
(() => {
	let dropMenu = document.querySelector(".js-dropdown-menu");
	if (dropMenu) {
		dropMenu.addEventListener("click", function () {
			this.classList.toggle("active");
			document.body.classList.toggle('menu-show');
			$('ul.tabs__caption').on('mouseover', 'li:not(.active)', function () {
				$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});
		});
	}
})();
(() => {
	let lk__new = document.querySelector(".lk-new");
	if (lk__new) {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
			$(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	}
})();
$('.header-mobile .burger').click(function (e) {
	e.stopPropagation();
	$(this).parents(".header-mobile").toggleClass("active");
	$(".header-mobile").find('.menu__submenu.show').removeClass('show');
	if ($("body").hasClass('menu-show menu-open')) {
		$("body").removeClass('menu-show menu-open');
		return;
	}
	$("body").addClass('menu-show menu-open');
});
$('.header-mobile .js-menu__open').on('click', function (e) {
	e.stopPropagation();
	var $subMenu = $(this).next('.menu__submenu').first();
	$subMenu.toggleClass('show');
	return false;
});
$(".js-menu__back").click(function () {
	$(this).parents('.menu__submenu').first().removeClass('show');
});
jQuery(function ($) {
	if ($(window).width() > 991) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".js-dropdown-menu"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.removeClass("active"); // скрываем его
				if ($("body").hasClass('menu-show')) {
					$("body").removeClass('menu-show');
					return;
				}
			}
		});
	}
});
(() => {
	const nac = document.querySelector('.js-nac__link');
	if (nac) {
		nac.querySelectorAll("li").forEach(el => {
			el.addEventListener('click', (() => {
				nac.querySelector("li.active").classList.remove("active");
				el.classList.add("active");
				nac.classList.toggle('active');
			}), false);
		});
	}
})();
if (document.querySelector('[data-aos]')) {
	AOS.init({
		disable: function () {
			var maxWidth = 756;
			return window.innerWidth < maxWidth;
		}
	});
}
$('[data-toggle-class]').click(function (e) {
	// $(this).toggleClass('active');
	let selfActive = $(this).hasClass("active") ? true : false;
	if (!selfActive) {
		$(this).addClass('active').siblings("[data-show]").find("[data-show-item]").slideDown({
			start: function () {
				$(this).css({
					display: "flex"
				});
			}
		});
	} else {
		$(this).removeClass('active').siblings("[data-show]").find("[data-show-item]").slideUp();
	}
});
$('.land-design__text').each((i, e) => {
	if ($(e).text().length > 500) {
		$(e).addClass("active");
		$(e).find('.land-design__more').show().click(() => {
			$(e).toggleClass('active');
		});
	}
});
$('.new-four .more__detall').each(function (i, el) {
	// let html = el.querySelector('.more__detall-popup').outerHTML;
	$('<div class = "tooltip-close"></div>').prependTo($(el).find('.more__detall-popup'));
	var tooltip = new tippy(el, {
		arrow: true,
		placement: 'top', // top, right, bottom, left
		// trigger: 'click',
		interactive: true,
		hideOnClick: true,
		allowHTML: true,
		theme: 'light',
		appendTo: () => el.closest('.swiper'),
		content: el.querySelector('.more__detall-popup'),
		onCreate: function (_constructor) {
			if (_constructor.popper.querySelector('.tooltip-close')) {
				_constructor.popper.querySelector('.tooltip-close').addEventListener('click', function () {
					tooltip.hide();
					_constructor.reference.setAttribute('aria-expanded', 'false');
				});
			}
		}
	});
});
tippy(".info-tooltip", {
	arrow: true,
	placement: 'top', // top, right, bottom, left
	trigger: 'click',
	maxWidth: 'none',
	interactive: true,
	// leave these as they are
	// followCursor: true,
	allowHTML: true,
	hideOnClick: true,
	theme: 'light',
	appendTo: () => document.body,
	// ignoreAttributes: true,
	content: document.querySelector('.service')
});
$('.common__more .more__detall').each(function (i, el) {
	$('<div class = "tooltip-close"></div>').prependTo($(el).find('.more__detall-popup'));
	var tooltip = new tippy(el, {
		arrow: true,
		placement: 'top', // top, right, bottom, left
		// trigger: 'click',
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		hideOnClick: true,
		theme: 'light',
		appendTo: () => document.body,
		// ignoreAttributes: true,
		content: el.querySelector('.more__detall-popup'),
		onCreate: function (_constructor) {
			if (_constructor.popper.querySelector('.tooltip-close')) {
				_constructor.popper.querySelector('.tooltip-close').addEventListener('click', function () {
					tooltip.hide();
					_constructor.reference.setAttribute('aria-expanded', 'false');
				});
			}
		}
	});
});
$('.lk-tooltip').each(function (i, el) {
	$('<div class = "tooltip-close"></div>').prependTo($(el).find('.lk-tooltip__content'));
	var tooltip = new tippy(el, {
		arrow: true,
		placement: 'top', // top, right, bottom, left
		// trigger: 'click',
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		hideOnClick: true,
		theme: 'light',
		appendTo: () => document.querySelector('.lk-new'),
		// ignoreAttributes: true,
		content: el.querySelector('.lk-tooltip__content'),
		onCreate: function (_constructor) {
			if (_constructor.popper.querySelector('.tooltip-close')) {
				_constructor.popper.querySelector('.tooltip-close').addEventListener('click', function () {
					tooltip.hide();
					_constructor.reference.setAttribute('aria-expanded', 'false');
				});
			}
		}
	});
});
$('.lk-new-drop').each(function (i, el) {
	$('<div class = "tooltip-close"></div>').prependTo($(el).find('.more__detall-popup'));
	var tooltip = new tippy(el, {
		arrow: true,
		placement: 'bottom', // top, right, bottom, left
		// trigger: 'click',
		interactive: true,
		// leave these as they are
		// followCursor: true,
		allowHTML: true,
		hideOnClick: true,
		theme: 'light',
		appendTo: () => document.querySelector('.lk-new'),
		// ignoreAttributes: true,
		content: el.querySelector('.lk-new-drop__popup'),
		onCreate: function (_constructor) {
			if (_constructor.popper.querySelector('.tooltip-close')) {
				_constructor.popper.querySelector('.tooltip-close').addEventListener('click', function () {
					tooltip.hide();
					_constructor.reference.setAttribute('aria-expanded', 'false');
				});
			}
		}
	});
});
if (document.querySelector('.lk-new')) {
	$('meta[name="viewport"]').prop('content', 'width=1366');
}
