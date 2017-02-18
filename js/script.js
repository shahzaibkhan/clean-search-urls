	var replacementArray = {"&": "&amp;","<": "&lt;",">": "&gt;",'"': '&quot;',"'": '&#39;',"/": '&#x2F;'};

	function escapeHtml(string) {
		return String(string).replace(/[&<>"'\/]/g, function (s) {
		  return replacementArray[s];
		});
	}
  
	updateUrl = function() {

		var url = jQuery("#url-input").val();
		url = url.replace(/.*?[&?]url=/i, "");
		url = url.replace(/&.*/, "");
		url = decodeURIComponent(url);
		
		var escapedStr = escapeHtml(url);
		var httpFtpPattern=new RegExp("^(http:\/\/|https:\/\/|ftp:\/\/).*$");
		var disallowedCharPattern = new RegExp('[<>"]');
		
		if (httpFtpPattern.test(url) && !disallowedCharPattern.test(url)) {
			jQuery("#clean-link").show();
			jQuery("#clean-link").text(url);
			jQuery("#clean-link").attr("href",url);
			jQuery("#message-span").hide();
			jQuery(".cleanlinkwrap").show();
			
		} else {
			
			jQuery("#clean-link").hide();
			jQuery("#message-span").text("Sorry, URL Clean the url.");
			jQuery(".cleanlinkwrap").show();
			
		}
	}

