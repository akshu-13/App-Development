import React, { useState } from 'react';
import './CheckoutAddress.css';
import { Link } from 'react-router-dom';

const CheckoutAddress = () => {
    
  const [addresses, setAddresses] = useState([
    {
      name: 'Aksharaa',
      address: 'Good Service!',
      mobile: '9003976877',
    type:"Customer"
    },
    {
      name: 'Aishu',
      address: 'Loved working with the photographers!',
      mobile: '9003976877',
    type:"Customer"
    },
   
  ]);
  const [selectedAddress, setSelectedAddress] = useState('Aishu');
  const [isFormVisible, setFormVisible] = useState(false);
  const [formMode, setFormMode] = useState('edit'); // 'edit' or 'add'
  const [currentAddress, setCurrentAddress] = useState({
    name: '',
    address: '',
    mobile: '',
   type:'',
  });

  const handleAddressSelect = (name) => {
    setSelectedAddress(name);
  };

  const handleEditClick = (address) => {
    setCurrentAddress(address);
    setFormMode('edit');
    setFormVisible(true);
  };
  
  const handleAddNewClick = () => {
    setCurrentAddress({
      name: '',
      address: '',
      mobile: '',
     type:'',
    });
    setFormMode('add');
    setFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress({ ...currentAddress, [name]: value });
  };

  const handleFormSubmit = () => {
    if (formMode === 'edit') {
      setAddresses(
        addresses.map((addr) =>
          addr.name === currentAddress.name ? currentAddress : addr
        )
      );
    } else if (formMode === 'add') {
      setAddresses([...addresses, currentAddress]);
    }
    setFormVisible(false);
  };

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <h2>Feedback</h2>
      </header>

      <div className="checkout-body">
        <div className="address-section">
          <h3>Let us know what you think!</h3>

          {addresses.map((address) => (
            <div
              key={address.name}
              className={`address-card ${selectedAddress === address.name ? 'selected' : ''}`}
              onClick={() => handleAddressSelect(address.name)} >
              <div className="address-header">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === address.name}
                  onChange={() => handleAddressSelect(address.name)}
                />
                <div>
                  <h4>{address.name}</h4>
                  <span className="address-type">{address.type}</span>
                </div>
              </div>
              <p>{address.address}</p>
              <p>Mobile: {address.mobile}</p>
              <div className="address-actions">
                <button className="edit-button" onClick={() => handleEditClick(address)}>
                  EDIT
                </button>
                <button className="remove-button">REMOVE</button>
              </div>
            </div>
          ))}

          <div className="add-new-address">
            <button className="add-new-button" onClick={handleAddNewClick}>
              + Add Feedback
            </button>
          </div>
        </div>
      </div>

      {isFormVisible && (
        <div className="address-modal">
          <div className="address-form">
            <h2>{formMode === 'edit' ? 'Edit' : 'Add New'} Feedback</h2>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={currentAddress.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Mobile No
              <input
                type="text"
                name="mobile"
                value={currentAddress.mobile}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Feedback
              <input
                type="text"
                name="address"
                value={currentAddress.address}
                onChange={handleInputChange}
              />
            </label>
           
            <label>
              Type
              <input
                type="text"
                name="type"
                value={currentAddress.type}
                onChange={handleInputChange}
              />
            </label>

            <button className="save-button" onClick={handleFormSubmit}>
              Upload
            </button>
            <button className="close-button" onClick={() => setFormVisible(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutAddress;
