import React, {Component, useState} from 'react';

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

class ActivityOutdoor extends Component {

    

    state={
        text:"strona",
        error:''
    }
    handleDateChange=(e)=>{ 
        e.preventDefault();
        const random = e.target.value;
        
        fetch(`http://numbersapi.com/${random}/year?json`)
            .then(res=>{
                if(res.ok){
                    return res;
                }throw Error(res.status)
            })

            .then(res => res.json())

            .then(objektJSON => this.setState({
                text: objektJSON.text
            }))

            .catch(err => console.log(err));        
        
    }

    render(){
    return (
        <>
            <PageStyle>
                <Menu/>
                <MainHeader/>
                <Form/>
                <div>pusty div</div>
                <div>wprowadź rok:</div>
                <input  onChange={this.handleDateChange} type="text"/>
                <h3>POBRANE Z API</h3>
                <h4>{this.state.text}</h4>

                <p>Provide the age range of your child</p>
        
                {/* <select value={age} onChange={(e) => setAge(e.target.value)}>  // jak to przepisać na komponennt funkcyjny?
                    <option value="set age range">  set age range</option>
                    <option value="0-2">0-2</option>
                    <option value="3-6">3-6</option>
                    <option value="7-13">7-13</option>
                    <option value="14-17">14-17</option>
                    <option value="over18">18</option>
                </select>

                <span>{age}</span>   */}


                <button onClick={this.handleDateChange}>zobacz zdanie</button>

                {/* <ButtonActivityOutdoor/>
                <Rights year="2021"/>             */}
            </PageStyle>
        </>
    );
    }
};

export default ActivityOutdoor;