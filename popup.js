var logElement = document.getElementById("ngxnhtn-log");

document.getElementById("mark-like-btn").addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "mark-like"
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Like marked!";
            } else {
                logElement.innerHTML = "Error marking like!";
            }
        });
    });
})

document.getElementById("count-like-btn").addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "count-like"
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Like counted!";
                document.getElementById("like-amount").innerHTML = response.count;
            } else {
                logElement.innerHTML = "Error counting like!";
            }
        });
    });
})

document.getElementById("mark-comment-btn").addEventListener("click", function () {
    var isCapitalIgnore = document.getElementById("capital-comment-check").checked;
    var isToneIgnore = document.getElementById("tone-comment-check").checked;
    var content = document.getElementById("pattern-comment").value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "mark-comment",
            commentOption: {
                content: content,
                isCapitalIgnore: isCapitalIgnore,
                isToneIgnore: isToneIgnore
            }
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Comment marked!";
            } else {
                logElement.innerHTML = "Error marking comment!";
            }
        });
    });
})

document.getElementById("count-comment-btn").addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "count-comment"
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Comment counted!";
                document.getElementById("comment-amount").innerHTML = response.count;
            } else {
                logElement.innerHTML = "Error counting comment!";
            }
        });
    });
})

document.getElementById("mark-share-btn").addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "mark-share"
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Share marked!";
            } else {
                logElement.innerHTML = "Error marking share!";
            }
        });
    });
})

document.getElementById("count-share-btn").addEventListener("click", function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "count-share"
        }, function (response) {
            if (response.status == "success") {
                logElement.innerHTML = "Share counted!";
                document.getElementById("share-amount").innerHTML = response.count;
            } else {
                logElement.innerHTML = "Error counting share!";
            }
        });
    });
})