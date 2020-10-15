import React, {useContext} from "react"
import {BuahContext} from './BuahContext'
import {InputContext} from './InputContext'
import axios from "axios";

const ListBuah = () => {
    const [dataHargaBuah, setdataHargaBuah] = useContext(BuahContext)
    const [inputForm, setInputForm] = useContext(InputContext)

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(
            res => {
                let databuah = dataHargaBuah.filter(x => x.id !== idBuah)
                setdataHargaBuah(databuah)
            }
        )
    }

    const handleEdit = (event) => {
        let idBuah = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x => x.id === idBuah)
        setInputForm({id: idBuah,name: buah.name, price: buah.price, weight: buah.weight})
    }

    return(
        <>
            <div style={{border: '1px solid black', borderRadius: '10px', width: '50%', margin: '20px auto', padding: '10px', backgroundColor: '#FFF'}}>
                <h1 style={{color: '#4E6151'}}>Daftar Harga Buah</h1>
                <table style={{border: '1px solid black', width: '100%'}}>
                    <thead>
                    <tr style={{backgroundColor: '#72BDA3', color: '#3b322c'}}>
                        <th>No. </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah !== null && ( dataHargaBuah.map((item, index) => {
                            return (
                                <tr key={item.id} style={{border: '1px solid'}} className="warna-table">
                                    <td style={{textAlign: 'center'}}>{index+1}</td>
                                    <td style={{}}>{item.name}</td>
                                    <td style={{}}>{item.price}</td>
                                    <td style={{}}>{item.weight} kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button value={item.id} onClick={handleEdit}>Edit</button>
                                        <button value={item.id} onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
 
export default ListBuah