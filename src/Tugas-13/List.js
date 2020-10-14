import React, {useState, useEffect} from 'react'
import axios from "axios"

const List = () => {
    const [dataHargaBuah, setdataHargaBuah] = useState(null);
    const [inputName, setInputName] =  useState({name: "", id: null});
    const [inputPrice, setInputPrice] =  useState({price: "", id: null});
    const [inputWeight, setInputWeight] =  useState({weight: "", id: null});

    useEffect( () => {
        if (dataHargaBuah === null){
            axios.get('http://backendexample.sanbercloud.com/api/fruits')
            .then(res => {
                let dataHargaBuah = res.data
                setdataHargaBuah(
                dataHargaBuah.map(el=> {
                    return {id: el.id, name: el.name, price: el.price,weight: el.weight} 
                })
                )      
            })
        }
    }, [dataHargaBuah])
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if ( inputName.id === null) {
            axios.post('http://backendexample.sanbercloud.com/api/fruits', { name: inputName.name, price: inputPrice.price, weight: inputWeight.weight })
            .then(res => {
                var data = res.data
                setdataHargaBuah([...dataHargaBuah, {id: data.id, name: data.name, price: data.price, weight: data.weight}])
                setInputName({id: null, name: ''})
                setInputPrice({id: null, price: ''})
                setInputWeight({id: null, weight: ''})
            })
        } else {
          axios.put(`http://backendexample.sanbercloud.com/api/fruits/${inputName.id}`, { name: inputName.name, price: inputPrice.price, weight: inputWeight.weight })
          .then(res => {
            var dataBuah = dataHargaBuah.map(x => {
              if (x.id === inputName.id){
                x.name = inputName.name
                x.price = inputPrice.price
                x.weight = inputWeight.weight
              }
              return x
            })
            setdataHargaBuah(dataBuah)
            setInputName({id: null, name: ''})
                setInputPrice({id: null, price: ''})
                setInputWeight({id: null, weight: ''})
          })
        }
    }

    const handleDelete = (event) =>{
        var idBuah= parseInt(event.target.value) 
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`)
        .then(res => {
            var dataBuah = dataHargaBuah.filter(x=> x.id !== idBuah)
            setdataHargaBuah(dataBuah)
        })
    }
    

    const handleEdit = (event) =>{
        let idBuah= parseInt(event.target.value);
        let buah = dataHargaBuah.find((x)=> x.id === idBuah)
    
        setInputName({id: idBuah, name: buah.name});
        setInputPrice({id: idBuah, price: buah.price});
        setInputWeight({id: idBuah, weight: buah.weight});
    }    

    const changeInputName = (event) =>{
        var value= event.target.value
        setInputName({...inputName, name: value})
    }
    
    const changeInputPrice = (event) =>{
        var value= event.target.value
        setInputPrice({...inputPrice, price: value})
    }

    const changeInputWeight = (event) =>{
        var value= event.target.value
        setInputWeight({...inputWeight, weight: value})
    }
    

    return (
        <>
            <div style={{border: '1px solid black', borderRadius: '10px', width: '50%', margin: '20px auto', padding: '10px', backgroundColor: '#FFF'}}>
            <h1 style={{color: '#4E6151'}}>Daftar Peserta Lomba</h1>
            <table style={{border: '1px solid black', width: '100%'}}>
                <thead>
                <tr style={{backgroundColor: '#72BDA3', color: '#3b322c'}}>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        dataHargaBuah !== null && (
                        dataHargaBuah.map((item, index)=>{
                            return (
                                <tr key={item.id} style={{border: '1px solid'}} className="warna-table">
                                    <td style={{textAlign: 'center'}}>{index+1}</td>
                                    <td style={{}}>{item.name}</td>
                                    <td style={{}}>Rp. {item.price}</td>
                                    <td style={{}}>{item.weight/1000} Kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button value={item.id} onClick={handleEdit}>Edit</button>
                                        <button value={item.id} onClick={handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}    
                </tbody>
            </table>
            <br></br>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td style={{width: '100px'}}><label>Nama</label></td>
                        <td style={{width: '300px'}}><input type="text" value={inputName.name} onChange={changeInputName} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Nama Buah'} /></td>
                    </tr>
                    <tr>
                        <td><label>Harga</label></td>
                        <td><input type="text" value={inputPrice.price} onChange={changeInputPrice} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Harga'} /></td>
                    </tr>
                    <tr>
                        <td><label>Berat</label></td>
                        <td><input type="text" value={inputWeight.weight} onChange={changeInputWeight} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Berat / gram'} /></td>
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

export default List