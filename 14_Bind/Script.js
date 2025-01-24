class React{
    constructor(){
        this.library="React"
        this.server="https://localhost5:300";
        //requirement
        document.querySelector('button')
        .addEventListener('click',this.handleClick.bind(this))
    }
    handleClick(){
        console.log("button Clicked");
        console.log(this.server);  
    }
}
const app=new React()