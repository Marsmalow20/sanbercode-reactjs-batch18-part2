import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import {InputContext} from './InputContext'
import axios from "axios";

const FormBuah = () => {
    const [daftarPriceBuah, setdaftarPriceBuah] = useContext(BuahContext)
    const [inputForm, setInputForm] = useContext(InputContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        let indexForm = inputForm.id
        let inputName = inputForm.name
        let inputPrice = inputForm.price
        let inputWeight = inputForm.weight
        if (indexForm === null){
            axios.post('http://backendexample.sanbercloud.com/api/fruits', {name: inputName, price: inputPrice, weight: inputWeight})
            .then(
                res => {
                    let data = res.data
                    setdaftarPriceBuah([...daftarPriceBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
                    setInputForm({id: null, name: "", price: "", weight: 0})
                }
            )
        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${indexForm}`, {name: inputName, price: inputPrice, weight: inputWeight})
            .then(
                res => {
                    let dataBuah = daftarPriceBuah.map(
                        x => {
                            if (x.id === indexForm){
                                x.name = inputName
                                x.price = inputPrice
                                x.weight = inputWeight
                            }
                            return x
                        }
                    )
                    setdaftarPriceBuah(dataBuah)
                    setInputForm({id: null, name: "", price: "", weight: 0})
                }
            )
        }
    }

    const handleChangeName = (event) =>{
        setInputForm({...inputForm, name: event.target.value});
    }

    const handleChangeWeight = (event) =>{
        setInputForm({...inputForm, weight: event.target.value});
    }

    const handleChangePrice = (event) =>{
        setInputForm({...inputForm, price: event.target.value});
    }

    return (
        <>
            <div style={{border: '1px solid black', borderRadius: '10px', width: '50%', margin: '20px auto', padding: '10px', backgroundColor: '#FFF'}}>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <td style={{width: '100px'}}><label>Name</label></td>
                            <td style={{width: '300px'}}><input type="text" onChange={handleChangeName} value={inputForm.name}/></td>
                        </tr>
                        <tr>
                            <td style={{width: '100px'}}><label>Price</label></td>
                            <td style={{width: '300px'}}><input type="text" onChange={handleChangePrice} value={inputForm.price}/></td>
                        </tr>
                        <tr>
                            <td style={{width: '100px'}}><label>Weight</label></td>
                            <td style={{width: '300px'}}><input type="text" onChange={handleChangeWeight} value={inputForm.weight}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style={{textAlign: 'end', paddingTop: '10px'}}><input type="submit" value="Submit" /></td>
                        </tr>
                    </table>
                </form>   
            </div>
        </>
    )
}

export default FormBuah