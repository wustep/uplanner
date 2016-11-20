module.exports = {
	
	sql_escape: function(str) { // From: http://stackoverflow.com/a/7760578
		return (str!==null) ? str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
			switch (char) {
				case "\0":
					return "\\0";
				case "\x08":
					return "\\b";
				case "\x09":
					return "\\t";
				case "\x1a":
					return "\\z";
				case "\n":
					return "\\n";
				case "\r":
					return "\\r";
				case "\"":
				case "'":
				case "\\":
				case "%":
					return "\\"+char; 
				default:
					break;
			}
		}) : null;
	}
}