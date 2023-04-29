import mydiv from "./components/my-components.js";

// https://lenguajejs.com/javascript/eventos/addeventlistener/
addEventListener("click", (e)=>{
    document.querySelector("my-components").dataset.sede = "Bucaramanga";
})