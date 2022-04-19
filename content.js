function nonAccentVietnamese(str) {
	str = str.toLowerCase();
	//     We can also use this instead of from line 11 to line 17
	//     str = str.replace(/\u00E0|\u00E1|\u1EA1|\u1EA3|\u00E3|\u00E2|\u1EA7|\u1EA5|\u1EAD|\u1EA9|\u1EAB|\u0103|\u1EB1|\u1EAF|\u1EB7|\u1EB3|\u1EB5/g, "a");
	//     str = str.replace(/\u00E8|\u00E9|\u1EB9|\u1EBB|\u1EBD|\u00EA|\u1EC1|\u1EBF|\u1EC7|\u1EC3|\u1EC5/g, "e");
	//     str = str.replace(/\u00EC|\u00ED|\u1ECB|\u1EC9|\u0129/g, "i");
	//     str = str.replace(/\u00F2|\u00F3|\u1ECD|\u1ECF|\u00F5|\u00F4|\u1ED3|\u1ED1|\u1ED9|\u1ED5|\u1ED7|\u01A1|\u1EDD|\u1EDB|\u1EE3|\u1EDF|\u1EE1/g, "o");
	//     str = str.replace(/\u00F9|\u00FA|\u1EE5|\u1EE7|\u0169|\u01B0|\u1EEB|\u1EE9|\u1EF1|\u1EED|\u1EEF/g, "u");
	//     str = str.replace(/\u1EF3|\u00FD|\u1EF5|\u1EF7|\u1EF9/g, "y");
	//     str = str.replace(/\u0111/g, "d");
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	// Some system encode vietnamese combining accent as individual utf-8 characters
	str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
	str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
	return str;
}

function toggleLikeValid(e) {
	var like = e.target;
	if (like.classList.contains("ngxnhtn-like-valid")) {
		like.classList.remove("ngxnhtn-like-valid");
		like.classList.add("ngxnhtn-like-invalid");
		like.innerHTML = "Invalid";
	} else {
		like.classList.remove("ngxnhtn-like-invalid");
		like.classList.add("ngxnhtn-like-valid");
		like.innerHTML = "Valid";
	}
}

function toggleCommentValid(e) {
	var comment = e.target;
	if (comment.classList.contains("ngxnhtn-comment-valid")) {
		comment.classList.remove("ngxnhtn-comment-valid");
		comment.classList.add("ngxnhtn-comment-invalid");
		comment.innerHTML = "Invalid";
	} else {
		comment.classList.remove("ngxnhtn-comment-invalid");
		comment.classList.add("ngxnhtn-comment-valid");
		comment.innerHTML = "Valid";
	}
}

function toggleShareValid(e) {
	var share = e.target;
	if (share.classList.contains("ngxnhtn-share-valid")) {
		share.classList.remove("ngxnhtn-share-valid");
		share.classList.add("ngxnhtn-share-invalid");
		share.innerHTML = "Invalid";
	} else {
		share.classList.remove("ngxnhtn-share-invalid");
		share.classList.add("ngxnhtn-share-valid");
		share.innerHTML = "Valid";
	}
}

function markLike() {
	var oldElement = document.getElementsByClassName("ngxnhtn-like");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var likeDOMList = document.getElementsByClassName("ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j");
	var validElement = document.createElement("a");
	validElement.innerHTML = "Valid";
	validElement.className = "ngxnhtn-like-valid ngxnhtn-like"
	var invalidElement = document.createElement("a");
	invalidElement.innerHTML = "Invalid";
	invalidElement.className = "ngxnhtn-like-invalid ngxnhtn-like";

	for (let i = 2; i < likeDOMList.length; i++) {
		var nameElement = likeDOMList[i].getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn iv3no6db gfeo3gy3 a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m")[0];
		var clone = validElement.cloneNode(true);
		nameElement.appendChild(clone);
		clone.addEventListener("click", toggleLikeValid, false);
	}
}

function countLike() {
	var oldElement = document.getElementsByClassName("ngxnhtn-like-count");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var likeCountElement = document.createElement("span");
	likeCountElement.className = "ngxnhtn-like-count ngxnhtn-like";
	var validElementList = document.getElementsByClassName("ngxnhtn-like-valid");
	for (let i = 0; i < validElementList.length; i++) {
		var tempValue = validElementList[i];
		var clone = likeCountElement.cloneNode(true);
		tempValue.after(clone);
		clone.innerHTML = `${i + 1} / ${validElementList.length}`;
	}
	return validElementList.length;
}

function markComment(commentOption) {
	var oldElement = document.getElementsByClassName("ngxnhtn-comment");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var commentList = document.getElementsByClassName("stjgntxs ni8dbmo4 l82x9zwi uo3d90p7 h905i5nu monazrh9")[0].getElementsByClassName("tw6a2znq sj5x9vvc d1544ag0 cxgpxx05");
	var validElement = document.createElement("a");
	validElement.innerHTML = "Valid";
	validElement.className = "ngxnhtn-comment-valid ngxnhtn-comment";
	var invalidElement = document.createElement("a");
	invalidElement.innerHTML = "Invalid";
	invalidElement.className = "ngxnhtn-comment-invalid ngxnhtn-comment";
	var reasonElement = document.createElement("span");
	reasonElement.className = "ngxnhtn-comment-reason ngxnhtn-comment";

	var commentedUser = [];

	for (let i = 1; i < commentList.length; i++) {
		var commentElement = commentList[i];

		var hrefElement = commentElement.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8")
		if (hrefElement.length == 1) {
			var href = hrefElement[0].href;
		} else if (hrefElement.length == 2) {
			var href = hrefElement[1].href;
		}
		if (href.indexOf("profile.php") === -1) {
			var uid = /(\.com\/)(.+)(\?comment\_id\=)/ig.exec(href)[2];
		} else {
			var uid = /(profile\.php\?id\=)(\d+)\&/ig.exec(href)[2];
		}
		var content = commentElement.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql")[0].innerText;

		if (commentedUser.indexOf(uid) !== -1) {
			var cloneInvalid = invalidElement.cloneNode(true);
			var cloneReason = reasonElement.cloneNode(true);
			cloneReason.innerHTML = "Duplicate user";
			commentElement.appendChild(cloneInvalid);
			commentElement.appendChild(cloneReason);
			cloneInvalid.addEventListener("click", toggleCommentValid, false);
			continue;
		} else {
			if (content === commentOption.content) {
				var cloneValid = validElement.cloneNode(true);
				commentElement.appendChild(cloneValid);
				cloneValid.addEventListener("click", toggleCommentValid, false);
				commentedUser.push(uid);
				continue;
			}
			if (commentOption.isCapitalIgnore && commentOption.isToneIgnore) {
				if (nonAccentVietnamese(content.toLowerCase()).indexOf(nonAccentVietnamese(commentOption.content.toLowerCase())) !== -1) {
					var cloneValid = validElement.cloneNode(true);
					commentElement.appendChild(cloneValid);
					cloneValid.addEventListener("click", toggleCommentValid, false);
					commentedUser.push(uid);
					continue;
				}
			}
			if (commentOption.isCapitalIgnore) {
				if (content.toLowerCase().indexOf(commentOption.content.toLowerCase()) !== -1) {
					var cloneValid = validElement.cloneNode(true);
					commentElement.appendChild(cloneValid);
					cloneValid.addEventListener("click", toggleCommentValid, false);
					commentedUser.push(uid);
					continue;
				}
			}
			var cloneInvalid = invalidElement.cloneNode(true);
			var cloneReason = reasonElement.cloneNode(true);
			cloneReason.innerHTML = "Not match";
			commentElement.appendChild(cloneInvalid);
			commentElement.appendChild(cloneReason);
			cloneInvalid.addEventListener("click", toggleCommentValid, false);
		}
	}
}

function commentCount() {
	var oldElement = document.getElementsByClassName("ngxnhtn-comment-count");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var commentCountElement = document.createElement("span");
	commentCountElement.className = "ngxnhtn-comment-count ngxnhtn-comment";
	var validElementList = document.getElementsByClassName("ngxnhtn-comment-valid");
	for (let i = 0; i < validElementList.length; i++) {
		var tempValue = validElementList[i];
		var clone = commentCountElement.cloneNode(true);
		tempValue.after(clone);
		clone.innerHTML = `${i + 1} / ${validElementList.length}`;
	}
	return validElementList.length;
}

function markShare() {
	var oldElement = document.getElementsByClassName("ngxnhtn-share");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var shareList = document.getElementsByClassName("l9j0dhe7 du4w35lb cjfnh4rs j83agx80 cbu4d94t lzcic4wl ni8dbmo4 stjgntxs oqq733wu cwj9ozl2 io0zqebd m5lcvass fbipl8qg nwvqtn77 nwpbqux9 iy3k6uwz e9a99x49 g8p4j16d bv25afu3 gc7gaz0o k4urcfbm")[0].getElementsByClassName("sjgh65i0");
	var validElement = document.createElement("a");
	validElement.innerHTML = "Valid";
	validElement.className = "ngxnhtn-share-valid ngxnhtn-share";
	var invalidElement = document.createElement("a");
	invalidElement.innerHTML = "Invalid";
	invalidElement.className = "ngxnhtn-share-invalid ngxnhtn-share";
	var reasonElement = document.createElement("span");
	reasonElement.className = "ngxnhtn-share-reason ngxnhtn-share";

	var sharedUser = [];

	for (let i = 0; i < shareList.length; i++) {
		var nameElement = shareList[i].getElementsByClassName("gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl aahdfvyu hzawbc8m")[0];
		var href = shareList[i].getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gpro0wi8 oo9gr5id lrazzd5p")[0].href;
		if (href.indexOf("profile.php") === -1) {
			var uid = /(\.com\/)(.+)(\?\_\_)/ig.exec(href)[2];
		} else {
			var uid = /(profile\.php\?id\=)(\d+)\&/ig.exec(href)[2];
		}
		var privacy = shareList[i].getElementsByClassName("a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh cyypbtt7 fwizqjfa")[0].getElementsByTagName("title")[0].innerHTML;

		if (sharedUser.indexOf(uid) !== -1) {
			var cloneInvalid = invalidElement.cloneNode(true);
			var cloneReason = reasonElement.cloneNode(true);
			cloneReason.innerHTML = "Duplicate user";
			nameElement.appendChild(cloneInvalid);
			nameElement.appendChild(cloneReason);
			cloneInvalid.addEventListener("click", toggleShareValid, false);
			continue;
		}

		if (privacy.indexOf("Public") !== -1) {
			var cloneValid = validElement.cloneNode(true);
			nameElement.appendChild(cloneValid);
			cloneValid.addEventListener("click", toggleShareValid, false);
			sharedUser.push(uid);
			continue;
		}

		var cloneInvalid = invalidElement.cloneNode(true);
		var cloneReason = reasonElement.cloneNode(true);
		cloneReason.innerHTML = "Not public";
		nameElement.appendChild(cloneInvalid);
		nameElement.appendChild(cloneReason);
		cloneInvalid.addEventListener("click", toggleShareValid, false);
	}
}

function countShare() {
	var oldElement = document.getElementsByClassName("ngxnhtn-share-count");
	var tempOldElement = Array.from(oldElement);
	for (let i = 0; i < tempOldElement.length; i++) {
		tempOldElement[i].remove();
	}

	var shareCountElement = document.createElement("span");
	shareCountElement.className = "ngxnhtn-share-count ngxnhtn-share";
	var validElementList = document.getElementsByClassName("ngxnhtn-share-valid");
	for (let i = 0; i < validElementList.length; i++) {
		var tempValue = validElementList[i];
		var clone = shareCountElement.cloneNode(true);
		tempValue.after(clone);
		clone.innerHTML = `${i + 1} / ${validElementList.length}`;
	}
	return validElementList.length;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action == "mark-like") {
		try {
			markLike();
			sendResponse({
				status: "success"
			});
		} catch (error) {
			sendResponse({
				status: "error"
			});
		}
	}
	if (request.action == "count-like") {
		try {
			var likeNumber = countLike();
			sendResponse({
				status: "success",
				count: likeNumber
			});
		} catch (error) {
			sendResponse({
				status: "error",
				count: 0
			});
		}
	}
	if (request.action == "mark-comment") {
		try {
			markComment(request.commentOption);
			sendResponse({
				status: "success"
			});
		} catch (error) {
			sendResponse({
				status: "error"
			});
		}
	}
	if (request.action == "count-comment") {
		try {
			var commentNumber = commentCount();
			sendResponse({
				status: "success",
				count: commentNumber
			});
		} catch (error) {
			sendResponse({
				status: "error",
				count: 0
			});
		}
	}
	if (request.action == "mark-share") {
		try {
			markShare();
			sendResponse({
				status: "success"
			});
		} catch (error) {
			sendResponse({
				status: "error"
			});
		}
	}
	if (request.action == "count-share") {
		try {
			var shareNumber = countShare();
			sendResponse({
				status: "success",
				count: shareNumber
			});
		} catch (error) {
			sendResponse({
				status: "error",
				count: 0
			});
		}
	}
})