import React, {Component, useState, useEffect} from 'react';

import MainHeader from '../../atoms/mainHeader';
import Menu from '../../organism/menu';
import ButtonActivityOutdoor from '../../atoms/buttonActivityOutdoor';
import Form from '../../organism/form';
import Rights from '../../molecules/Rights';
import PageStyle from '../styled/pageStyle';

// const ActivityOutdoor  = () => {

//     const [text, setText] = useState("strona");
//     //const [error, setError] = useState(" ");


//     const handleDateChange = (e) => { 
//         //e.preventDefault();
//         let random = e.target.value;
        
//         fetch(`http://numbersapi.com/${random}/year?json`)
//             // .then(res=>{
//             //     if(res.ok){
//             //         return res;
//             //     }throw Error(res.status)
//             // })

//             .then(res => res.json())

//             .then(objektJSON => setText({
//                 text: objektJSON.text
//             }))

//             .catch(err => console.log(err));        
        
//     }

   
//     return (
//         <>
//             <PageStyle>
//                 <Menu/>
//                 <MainHeader/>
//                 <Form/>
//                 <div>pusty div</div>
//                 <div>wprowadź rok:</div>
//                 <input  onChange={handleDateChange} type="text"/>
//                 <h3>POBRANE Z API</h3>
//                 <h4>{text}</h4>

//                 <p>Provide the age range of your child</p>
        
//                 {/* <select value={age} onChange={(e) => setAge(e.target.value)}>
//                     <option value="set age range">  set age range</option>
//                     <option value="0-2">0-2</option>
//                     <option value="3-6">3-6</option>
//                     <option value="7-13">7-13</option>
//                     <option value="14-17">14-17</option>
//                     <option value="over18">18</option>
//                 </select>

//                 <span>{age}</span>   */}


//                 <button onClick={handleDateChange}>zobacz zdanie</button>

//                 {/* <ButtonActivityOutdoor/>
//                 <Rights year="2021"/>             */}
//             </PageStyle>
//         </>
//     );
    
// };

// export default ActivityOutdoor;


//==================================

// class ActivityOutdoor extends Component {

//     state={
//         atr: "",
//         text:"strona",
//         error:''
//     }

//     // handleAtr=(e)=>{ 

//     //     const random = e.target.value;

//     //     fetch(`http://localhost:3004/atractive/`
//     //         .then(res=>{
//     //             if(res.ok){
//     //                 return res;
//     //             }throw Error(res.status)
//     //         })

//     //         .then(res => res.json())

//     //         .then(objektJSON => this.setState({
//     //             atr: objektJSON.atraction
//     //         }))

//     //         .catch(err => console.log(err))    
        
//     // }

//     handleDateChange=(e)=>{ 
//         e.preventDefault();
//         const random = e.target.value;
        
//         fetch(`http://numbersapi.com/${random}/year?json`)
//             .then(res=>        
//                 {
//                 if(res.ok){
//                     return res;
//                 }throw Error(res.status)
//                 }
//             )

//             .then(res => res.json())

//             .then(objektJSON => {
//                 console.log(objektJSON.text);
//                 this.setState({
//                 text: objektJSON.text
//                 })
//             })

//             .catch(err => console.log(err));              
//     }


//     render(){
//     return (
//         <>
//             <PageStyle>
//                 <Menu/>
//                 <MainHeader/>
//                 <Form/>
//                 <div>pusty div</div>
//                 <div>wprowadź rok:</div>
//                 <input  onChange={this.handleDateChange} type="text"/>
//                 <h3>POBRANE Z API</h3>
//                 <h4>{this.state.text}</h4>

//                 <p>Provide the age range of your child</p>


//                 <button onClick={this.handleDateChange}>zobacz zdanie</button>


//             </PageStyle>
//         </>
//     );
//     }
// };

// export default ActivityOutdoor;

//======================================

// class ActivityOutdoor extends Component {

//     state={
//         atraction:'tu będzie atrakcja'
//     }

//     // handleAtr=(e)=>{ 

//     //     const random = e.target.value;

//     //     fetch(`http://localhost:3004/atractive/`
//     //         .then(res=>{
//     //             if(res.ok){
//     //                 return res;
//     //             }throw Error(res.status)
//     //         })

//     //         .then(res => res.json())

//     //         .then(objektJSON => this.setState({
//     //             atr: objektJSON.atraction
//     //         }))

//     //         .catch(err => console.log(err))    
        
//     // }

//     handleDateChange=(e)=>{ 
        
        
//         fetch(`http://localhost:3004/attractions`)

//             .then(res => res.json())

//             .then(objektJSON => {
//                 console.log(objektJSON.atraction);
//                 this.setState({
//                     atraction: objektJSON.atraction
//                 })
//             })

//             .catch(err => console.log(err));              
//     }


//     render(){
//     return (
//         <>
//             <PageStyle>
//                 <Menu/>
//                 <MainHeader/>
//                 <Form/>
//                 <div>pusty div</div>
//                 <div>Pobierz atrakcję</div>
                
//                 <h3>POBRANE Z API:</h3>

//                 <h4>{this.state.atraction}</h4>

//                 <button onClick={this.handleDateChange}>pobierz</button>

                
//             </PageStyle>
//         </>
//     );
//     }
// };

// export default ActivityOutdoor;


//=====================================================================================const places = () => {
    const ActivityOutdoor = () => {

        const [places, setPlaces] = useState([]);
        const [city, setCity] = useState("PL");
      
        useEffect(() => {
      
          fetch(`http://localhost:3004/attractions`)
            .then((res) => res.json())
            .then((data) => {
              setPlaces(data); 
            })
            .catch((err) => console.log(err));
             
        }, [city]);
      
        return (
        <>
            <PageStyle>
            <Menu/>
            <MainHeader/>
          <div>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="Wrocław">Wrocław</option>
              <option value="Poznań">Poznań</option>
              <option value="Kraków">Kraków</option>
            </select>

            <ul>
               {places.map((el) => {
                        return (
                            <li key={el.id}>
                                <h3>{el.holidays}</h3>
                            </li>
                        );
                })}
            </ul>
          </div>
        </PageStyle>
        </>
        );
      };
      
export default ActivityOutdoor;