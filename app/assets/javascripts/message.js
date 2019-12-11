$(function(){
  function buildHTML(message){
    if (message.image) {
      var html = `<div class="chat_main__message_list__a">
        <div class="chat_main__message_list__a__name">
          <ul class="chat_main__message_list__a__name__list">
            <li class="chat_main__message_list__a__name__list__user_name">
              ${message.user_name}
            </li>
            <li class="chat_main__message_list__a__name__list__time">
              ${message.time}
            </li>
          </ul>
        </div>
        <div class="chat_main__message_list__a__text">
          <p class="chat_main__message_list__a__text__content">
            ${message.content}
          </p>
          <img class="chat_main__message_list__a__text__image" src=${message.image}>
      
        </div>
      </div>`
    } else {
      var html = `<div class="chat_main__message_list__a">
        <div class="chat_main__message_list__a__name">
          <ul class="chat_main__message_list__a__name__list">
            <li class="chat_main__message_list__a__name__list__user_name">
              ${message.user_name}
            </li>
            <li class="chat_main__message_list__a__name__list__time">
              ${message.time}
            </li>
          </ul>
         </div>
         <div class="chat_main__message_list__a__text">
           <p class="chat_main__message_list__a__text__content">
             ${message.content}
           </p>
      
         </div>
      </div>`
    }
    return html
  }

  $("#new_message").on("submit", function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $(".chat_main__message_list").append(html);
      $('#new_message')[0].reset();
      $('.chat_main__message_list').animate({ scrollTop: $('.chat_main__message_list')[0].scrollHeight});
      $(".chat_main__message_form__a__send").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
   });
  })
})
