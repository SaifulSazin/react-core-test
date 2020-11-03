import { useEffect, useState } from 'react';
import './App.css';
// import logo from './logo.svg';

function App() {

    var students = ['Sakib','Hasan','Mizan','Romis','Sagur']

    var persone ={
        name: "Eva Rahaman",
        job: "singer"
    }

    const products = [
        {name: 'Photoshop', price: '99.99'},
        {name: 'Illustrator', price: '60.00'},
        {name: 'PDF', price: '6.00'},
        {name: 'Reder', price: '7.00'}
    ]

    return ( <div className = "App">
        <header className = "App-header" >

        <p style={{marginBottom:'-20px',color:'green'}}> Click increase and discrease </p>
            <Counter></Counter>


            <p style={{marginBottom:'-20px',color:'green'}}> Data load form server  </p>
            <Users></Users>

            <h4>Her Name is {persone.name} Her Job is {persone.job}.</h4>

            {/* normar data  */}
            <NameMan></NameMan>
            <NameMan></NameMan>

{/* Dynamic data  */}
            <h2>Dynamic Data using props</h2>
            <DynamicData name="Md Saiful" profession="Web Developer"> </DynamicData>
            <DynamicData name="Md Saifan" profession="Engineer"> </DynamicData>
            <DynamicData name="Sumiya" profession="House Wife"> </DynamicData>

            <h4>Pass object to components and access object</h4>
            <Products product={products[0]}> </Products>
            <Products product={products[1]}> </Products>
            <Products product={products[2]}> </Products>

            <h3>Create multiple components from an array of objects</h3>

            <p style={{marginBottom:'-20px',color:'orange'}}> Show dynamic data from Array </p>
            <ul>
                {
                students.map( student => <li>{ student }</li>)
                }

            </ul>

            <p style={{marginBottom:'-20px',color:'orange'}}> Show dynamic data from object </p>

            <ul>
                {
                products.map( product => <li>{ product.name }</li>)
                }
            </ul>


            <p style={{color:'orange'}}> Show dynamic multiple object data Importan</p>

            {
                products.map( singleProduct =>  <Products product={singleProduct}> </Products>)
            }

        </header> 
        </div >
    );
}

function NameMan(){
    const personStyle = {
        border: '2px solid #222',
        margin: '15px',
        padding: '20px',
        backgroundColor: '#333',
        width: '40%',
    }

    return (
    <div className="repateItem" style={personStyle}>
        <h4> Name : Skhakib All Hasan</h4>
        <h4>Web Developer</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
    </div>
    )
}


// Function for dyamic data
function DynamicData(props){

    return(
        <div className="singlerepate" style={{border:'1px solid #ccc', padding:'20px', margin:'20px', width:'40%',backgroundColor:'#333',}}>
            <h4>My Name: {props.name}</h4>
            <h5>My profession: {props.profession}</h5>
        </div>
    )

}

// Function for product

function Products(props){

    const productStyle = {
        width: '20%',
        backgroundColor: '#444',
        border: '1px solid #fff',
        color:'#fff',
        margin:'20px',
        padding:'30px',
        float:'left',
        display:'inline',
    }

    const {name, price} = props.product;
    return(
        <div className="singleProduct" style={productStyle}>
            <h5>{name}</h5>
            <h4>${price}</h4>
            <button style={{padding:'10px 20px',fontSize:'18px',}}>Buy Now</button>
        </div>


    )

}


// function for Counter 

function Counter(){

    const btnStyle = {

        padding:'8px 20px',
        fontSize: '18px',
        margin: '15px',
        color: '#222',
        backgroundColor:'orange',
        border: 'unset',

    }

    // Diclare state 

    const[count, setCount] = useState(10);

    // const handleIncrease = () => {
    //     const newCount = count +1;
    //     setCount(newCount);
    // }

    // const handleIncrease = () => setCount(count +1);
        
    return(
       
     <div className="singleCounter">   
            <h2>Counter: {count}</h2>
            <button onClick = {() => setCount(count +1)} style={btnStyle} > Increase</button>
            <button onClick = {() => setCount(count +1)} style={btnStyle}> Discrease</button>
    </div>

    )

}

// Dynamic user function 

function Users(){

 // Diclare state 
    const[users, setUser] = useState([]); 

    // Automatic call 
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=> res.json())
       .then(data => setUser(data));

    },[] )
    return(

        <div className="singleUser">
            <h3>Dynamic User : {setUser.length} </h3>
            <ul>
            {
                users.map(user => <li> {user.name} </li>)
            }
            </ul>
        </div>


    )
     
}



export default App;