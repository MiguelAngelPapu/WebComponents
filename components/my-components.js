let pathName = new URL(import.meta.url).pathname.replace(".js", ".html")
let name = pathName.split("/").pop().replace(".html", "")

export default class myDiv extends HTMLElement{
    static async plantilla(){
        return await (await fetch(`${pathName}`)).text();
    }
    constructor(){
        super();        
        let shadowRoot = this.attachShadow({ mode: 'open' });
        Promise.resolve(myDiv.plantilla())
        .then(html=>{
            shadowRoot.innerHTML = html;
        })
    }
    // https://lenguajejs.com/webcomponents/componentes/atributos-webcomponent/
    static get observedAttributes() {
        return ["data-sede"]
    }
    attributeChangedCallback(name, old, now) {
        document.querySelector("#myH1").innerHTML = now;
        this.shadowRoot.children.mySede.innerHTML = now;
        console.log(`El atributo ${name} ha sido modificado de ${old} a ${now}.`);
    }
    
}
customElements.define(name, myDiv);