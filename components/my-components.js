// https://lenguajejs.com/javascript/peticiones-http/url/
let pathName = new URL(import.meta.url).pathname.replace(".js", ".html")
let name = pathName.split("/").pop().replace(".html", "")

export default class myDiv extends HTMLElement{
    static async plantilla(){
        // https://lenguajejs.com/javascript/peticiones-http/fetch/
        return await (await fetch(`${pathName}`)).text();
    }
    constructor(){
        super();        
        // https://lenguajejs.com/webcomponents/shadow-dom/que-es-shadow-dom/
        let shadowRoot = this.attachShadow({ mode: 'open' });

        // https://lenguajejs.com/javascript/asincronia/promise-api/
        Promise.resolve(myDiv.plantilla())
        .then(html=>{
            shadowRoot.innerHTML = html;
        })
    }
    
}
// https://lenguajejs.com/webcomponents/funcionalidad/registro-de-custom-elements/
customElements.define(name, myDiv);