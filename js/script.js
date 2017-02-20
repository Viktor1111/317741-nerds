      var link = document.querySelector(".contacts-feedback");

      var popup = document.querySelector(".modal-content");
      var close = popup.querySelector(".modal-content-close");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
      });
        close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
      });

.friends-logo::before {
    position: absolute;
    top: 31px;
    content: url(../img/divide.png);
}
.friends-logo::after {
    position: absolute;
    top: 214px;
    content: url(../img/divide.png);
}
.column:before {
    position: absolute;
    top: 63px;
    content: url(../img/divide.png);
}