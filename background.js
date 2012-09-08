var orig_title = $('title').text();

function change_favicon (state) 
{
	if (state === 'active' || state === 'inactive') {
		var path = 'http://127.0.0.1/n23-32x32-[state].ico';
		var icon = path.replace('[state]', state);
		var link = document.createElement('link');
		$(link).attr({
			rel: 'icon',
			type: 'image/x-icon',
			href: icon
		});
		$('body').append(link);
	}else{
		console.log('change_favicon() input must be "active" or "inactive"');
	}
}

function title_alert (prepend) 
{
	$('title').text(prepend + ' ' + orig_title);
	$(window).focus(function(){$('title').text(orig_title);})
}

$.ajaxSetup({
    beforeSend: function(){change_favicon('active'); title_alert('(Querying...)');},
    success: function(){change_favicon('inactive'); title_alert('(DONE!)');}
});
