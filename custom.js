$(".my_btn").click(function(){
        $("#testimonial-info").html('<div class="testimonial-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <div class="col-md-6">
                            <div class="avatar">
                                <img src="assets/img/Avatar.png">
                            </div>
                            <div class="rateing">
                                <h6>Md Farhad</h6>
                                <img src="assets/img/rateing.png">
                            </div>
                        </div>
                    </div>');
    });
     $('a.smooth-scroll').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1000);
    e.preventDefault();
	});