import React from 'react';

function DataBuah() {
    return (
        <>
            <div style={{margin: 'auto', border: '1px solid #aaa', borderRadius: '10px', width: '40%', padding: '20px', backgroundColor: '#FFF'}}>
                <h1 style={{textAlign: 'center'}}>Form Pembelian Buah</h1>
                <form>
                <table className="table">
                    <tr>
                    <td width="200"><label style={{padding: '15px', fontWeight: 'bold'}}>Nama Pelanggan</label></td>
                    <td><input type="text" name="nama" style={{padding: '4px', border: '1px solid #aaa', borderRadius: '5px'}}></input></td>
                    </tr>
                    <tr>
                    <td><label style={{padding: '15px', fontWeight: 'bold'}}>Daftar Item</label></td>
                    <td>
                        <input type="checkbox" name="semangka"></input><label>Semangka</label><br></br>
                        <input type="checkbox" name="jeruk"></input><label>Jeruk</label><br></br>
                        <input type="checkbox" name="nanas"></input><label>Nanas</label><br></br>
                        <input type="checkbox" name="salak"></input><label>Salak</label><br></br>
                        <input type="checkbox" name="anggur"></input><label>Anggur</label>
                    </td>
                    </tr>
                    <tr>
                    <td><input type="submit" value="Kirim" style={{padding: '2px auto', borderColor: '#000', borderRadius:'100px'}}></input></td>
                    </tr>
                </table>
                </form>
            </div>
        </>
    );
  }

export default DataBuah