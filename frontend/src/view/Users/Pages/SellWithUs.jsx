import React from 'react';
import Navbar from '../../../Components/Users/Navbar/navbar';
import Footer from '../../../Components/Users/Footer/footer';
import axios from 'axios';

const SellWithUs = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [gstno, setGstno] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [prodtype, setProdtype] = React.useState('');
  const [pancard, setPancard] = React.useState('');
  const [shopaddr, setShopaddr] = React.useState('');

  const data={
    seller:[
      {
        name: name,
        email: email,
        gstno: gstno,
        mobile: mobile,
        prodtype: prodtype,
        pancard: pancard,
        shopaddr: shopaddr, 
      }
    ]
  }


  return (
    <>
        <Navbar/>
        <div>
            <div className='container'
            style={{marginTop: '70px', marginBottom: '100px',border: '1px solid #558a2e', padding: '20px', borderRadius: '10px'}}
            >
              <h1
              style={{textAlign: 'center', color: '#558a2e'}}
              >Sell With Us</h1>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    console.log(name, email, gstno, mobile);
                  }}
                >
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name='name'
                      value={name} onChange={(e) => setName(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name='email'
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Gst No</label>
                    <input
                      type="text"
                      className="form-control"
                      id="gstno"
                      name='gstno'
                      value={gstno} onChange={(e) => setGstno(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      name='mobile'
                      value={mobile} onChange={(e) => setMobile(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product Type</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prodtype"
                      name='prodtype'
                      value={prodtype} onChange={(e) => setProdtype(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pan Card</label>
                    <input
                      type="text"
                      className="form-control"
                      id="pancard"
                      name='pancard'
                      value={pancard} onChange={(e) => setPancard(e.target.value)}
                      style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Shop Address</label>
                    <textarea
                        className="form-control"
                        id="shopaddr"
                        rows={3}
                        defaultValue={""}
                        value={shopaddr} 
                        onChange={(e) => setShopaddr(e.target.value)}
                        style={{border: '1px solid #558a2e'}}
                    />
                    </div>
                    <button type="submit" className="btn btn-primary"
                    style={{backgroundColor: '#558a2e', border: 'none',textAlign: 'center',alignItems: 'center', alignContent: 'center', justifyContent: 'center', display: 'flex'}}
                    onClick={() => {
                      window.location = `mailto:20h51a6699@cmrcet.ac.in?subject=Sell With Us Request&body=Name: ${name} Email: ${email} Gst No: ${gstno} Mobile: ${mobile} Product Type: ${prodtype} Pan Card: ${pancard} Shop Address: ${shopaddr}`
                     }}> Submit </button>
              </form>
              </div>

        </div>
        <Footer/>
    </>
  )
}

export default SellWithUs
