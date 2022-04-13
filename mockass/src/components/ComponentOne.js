import anxios from "axios";


const ComponentOne = () => {


    anxios.get('https://api.spacexdata.com/v4/crew ')
    .then((response) => { 
        console.log(response);
    })
    .catch((err) =>{
        console.log(err);
    });

    
    return(
        <>
        <h1>Component One</h1>
        </>

    );


}
export default ComponentOne