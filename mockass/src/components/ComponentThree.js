import anxios from "axios";


const ComponentThree = () => {

    anxios.get('https://api.spacexdata.com/v4/crew ')
    .then((response) => { 
        console.log(response);
    })
    .catch((err) =>{
        console.log(err);
    });

    return(
        <>
        <h1>Component Three</h1>
        </>

    );


}
export default ComponentThree