import anxios from "axios";


const ComponentTwo = () => {


    anxios.get('https://api.spacexdata.com/v4/crew ')
    .then((response) => { 
    console.log(response);
    })
    .catch((err) =>{
    console.log(err);
    });


    return(
        <>
        <h1>Component Two</h1>
        </>

    );


}
export default ComponentTwo