"use strict";$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitError:function(){},submitSuccess:function(e,s){s.preventDefault();var t=$("input#name").val(),a=$("input#email").val(),c=$("textarea#message").val(),n=grecaptcha.getResponse(),r=t;r.indexOf(" ")>=0&&(r=t.split(" ").slice(0,-1).join(" ")),$.ajax({url:"mail.php",type:"POST",data:{recaptcha:n,name:t,email:a,message:c},cache:!1,success:function(){$("#success").html("<div class='alert alert-success'>"),$("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-success").append("<strong>Your message has been sent.</strong>"),$("#success > .alert-success").append("</div>"),grecaptcha.reset(),$("#contactForm").trigger("reset")},error:function(e){$("#success").html("<div class='alert alert-danger'>"),$("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"),$("#success > .alert-danger").append("<strong>"+e.responseJSON.message),$("#success > .alert-danger").append("</div>"),grecaptcha.reset()}})},filter:function(){return $(this).is(":visible")}}),$('a[data-toggle="tab"]').click(function(e){e.preventDefault(),$(this).tab("show")})}),$("#name").focus(function(){$("#success").html("")});