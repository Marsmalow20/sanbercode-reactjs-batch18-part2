import React, {Component} from 'react'

class List extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
            ],
            inputNama : "",
            inputHarga: "",
            inputBerat: "",
            index: -1
        }

        this.handleChangeNama = this.handleChangeNama.bind(this);
        this.handleChangeHarga = this.handleChangeHarga.bind(this);
        this.handleChangeBerat = this.handleChangeBerat.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleEdit = this.handleEdit.bind(this)
    }

    handleChangeNama(event){
        this.setState({inputNama: event.target.value});
    }

    handleChangeHarga(event){
        this.setState({inputHarga: event.target.value});
    }

    handleChangeBerat(event){
        this.setState({inputBerat: event.target.value});
    }
      
    handleSubmit(event){
        event.preventDefault();
        let index = this.state.index;


        if ( index === -1) {
            this.setState({
                dataHargaBuah: [...this.state.dataHargaBuah, {nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat}],
                inputNama: "",
                inputHarga: "",
                inputBerat: ""
            })
        } else {
            this.state.dataHargaBuah[index] = {nama: this.state.inputNama, harga: this.state.inputHarga, berat: this.state.inputBerat};
            this.setState({
                dataHargaBuah: this.state.dataHargaBuah, 
                inputNama: "",
                inputHarga: "",
                inputBerat: ""
            })
        }

    }

    handleDelete = (event) => {
        let index =  event.target.value;
        this.state.dataHargaBuah.splice(index, 1);
        this.setState({dataHargaBuah: this.state.dataHargaBuah});
    }

    handleEdit = (event) => {
        let index = event.target.value;
        this.setState({inputNama: this.state.dataHargaBuah[index].nama, index})
        this.setState({inputHarga: this.state.dataHargaBuah[index].harga, index})
        this.setState({inputBerat: this.state.dataHargaBuah[index].berat, index})
    }
  
    render(){
        return(
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
                        this.state.dataHargaBuah.map((val, index)=>{
                            var number = index+1; 
                            return (                    
                                <tr key={number} style={{border: '1px solid'}} className="warna-table">
                                    <td style={{textAlign: 'center'}}>{index+1}</td>
                                    <td style={{}}>{val.nama}</td>
                                    <td style={{}}>Rp. {val.harga}</td>
                                    <td style={{}}>{val.berat/1000} Kg</td>
                                    <td style={{textAlign: 'center'}}>
                                        <button value={index} onClick={this.handleEdit}>Edit</button>
                                        <button value={index} onClick={this.handleDelete}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>
                            <td style={{width: '100px'}}><label>Nama</label></td>
                            <td style={{width: '300px'}}><input type="text" value={this.state.inputNama} onChange={this.handleChangeNama} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Nama Buah'} /></td>
                        </tr>
                        <tr>
                            <td><label>Harga</label></td>
                            <td><input type="text" value={this.state.inputHarga} onChange={this.handleChangeHarga} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Harga'} /></td>
                        </tr>
                        <tr>
                            <td><label>Berat</label></td>
                            <td><input type="text" value={this.state.inputBerat} onChange={this.handleChangeBerat} style={{width: '100%', border: '0px solid', borderBottom: '1px solid #72BDA3', padding: '10px'}} placeholder={'Berat / gram'} /></td>
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
}

export default List