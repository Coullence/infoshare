
$(document).ready(function(){
	//comments engine -->
	
	$('#comment_form').on('submit', function(event){
		event.preventDefault();
		 var form_data = $(this).serialize();
		$.ajax({
			url:"assets/php/add_comment.php",
			method:"POST",
			data:form_data,
			dataType:"JSON",
			success:function(data)
			{
			if(data.error != '')
			{
			$('#comment_form')[0].reset();
			$('#comment_message').html(data.error); 
		}
		}
		})
	});
	

	
	//end of comment engine


	load_comment();
	function load_comment()
	{
		$.ajax({
			url:"assets/fetch_comment.php",
			method:"POST",
			success:function(data)
			{
				$('#display_comment').html(data);
			}
		})
		//reply comment
		$(document).on('click','.reply', function(){
		var comment_id = $(this).attr("id"); 
		$('#comment_id').val(comment_id);
		$('#comment_name').focus();
	})
		//get latest post
		$.ajax({
			url:"assets/latest_post.php",
			method:"POST",
			success:function(data){
				$('#display_latest_post').html(data);
			}
		})
		//get latest work screenshot from database
		$.ajax({
			url:"assets/php/latest_Work.php",
			method:"POST",
			success:function(data){
				$('#display_latest_work').html(data);
			}
		})
		// get my work
		
		$.ajax({
			url:"assets/php/index.php",
			method:"POST",
			success:function(data)
			{
				$('#mywork').html(data);
			}
		})
		$.ajax({
			url:"all-my-work.php",
			method:"POST",
			success:function(data){
				$('#myWholeWork');
			}
		})
	}


});