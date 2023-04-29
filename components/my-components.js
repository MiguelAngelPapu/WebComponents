let pathName = new URL(import.meta.url).pathname.replace(".js", ".html")
let name = pathName.split("/").pop().replace(".html", "")

export default class myDiv extends HTMLElement{
    static async plantilla(){
        return await (await fetch(`${pathName}`)).text();
    }
    constructor(){
        super();
        this.attachShadow({ mode: "open" });   
    }
    // https://lenguajejs.com/webcomponents/funcionalidad/eventos-en-webcomponents/
    handleEvent(event) {
        console.log(event.type);
        (event.type === "click") ? this.sendMessage()
        : (event.type === "mousemove") ? this.sendMove()
        : undefined
    }
    sendMessage() {
        alert("¡Has hecho click!");
    }
    sendMove(){
        alert("¡Has movido el puntero!");
    }
    connectedCallback() {
        Promise.resolve(myDiv.plantilla())
        .then(html=>{
            this.shadowRoot.innerHTML = html;
            this.button = this.shadowRoot.querySelector("#btn");
            this.button.addEventListener("click", this);
            this.button.addEventListener("mousemove", this);
        })
    }
}
customElements.define(name, myDiv);