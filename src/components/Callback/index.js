function Callback(props){

    function handleClick(){
       props.callback((Math.ceil(Math.random() * 10))) 
    }
       return(
           <button onClick={handleClick}>Disparar el callback</button>
           )
       }
        

    export default Callback;