function addingEventListener() {
    const input = document.getElementById("input");
    function clickAlert() {
      alert(" I Am Clicked!");
    }
    input.addEventListener("click", clickAlert);
}
