
import Sidebar from "../Components/Sidebar";
import React, { useState } from 'react';
function ExpensesForm() {

    const [accountType, setAccountType] = useState('');
    const [date, setDate] = useState('');
    const [siteName, setSiteName] = useState('');
    const [vendor, setVendor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [contractor, setContractor] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [otherVendorName, setOtherVendorName] = useState('NIL');
    const [otherContractorName, setOtherContractorName] = useState('NIL');
    const [machineTools, setMachineTools] = useState('');
    const [billCopy, setBillCopy] = useState(null); // Store file object, not its value

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData();
        formData.append('accountType', accountType);
        formData.append('date', date);
        formData.append('siteName', siteName);
        formData.append('vendor', vendor);
        formData.append('quantity', quantity);
        formData.append('contractor', contractor);
        formData.append('amount', amount);
        formData.append('category', category);
        formData.append('otherVendorName', otherVendorName);
        formData.append('otherContractorName', otherContractorName);
        formData.append('machineTools', machineTools);
        if (billCopy) {
            formData.append('billCopy', billCopy); // Append file object
        }

        fetch("http://93.127.194.86:8443/backendapi/dashboardForm/add", {
            method: "POST",
            body: formData
        }).then(() => {
            
            // Reset form fields after submission
            setAccountType('');
            setDate('');
            setSiteName('');
            setVendor('');
            setQuantity('');
            setBillCopy(null);
            setContractor('');
            setAmount('');
            setCategory('');
            setMachineTools('');
            
            console.log("New Data added");
        }).catch(error => {
            console.error("Error adding data:", error);
        });
    }

    const handleFileChange = (e) => {
        setBillCopy(e.target.files[0]); // Update state with selected file object
    }
    return (
        <div className=" flex ">
            <div className=''>
                <Sidebar></Sidebar>
            </div>
            <div className="bg-gray-100 min-h-[100vh] justify-center items-center ml-[300px]">
                <div className="bg-white p-8 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-4">Expanses Form</h2>
                    <form>
                        {/*<div className="mb-4">
                            <p className="block text-gray-700 font-bold mb-2">Account Type:</p>
                            <div value={accountType} >
                                <label htmlFor="option1" className="flex items-center mb-2">
                                    <input type="radio" id="option1" name="option" className="mr-2"
                                        value={accountType} onChange={(e) => setAccountType(e.target.value)} />
                                    Daily wage
                                </label>
                                <label htmlFor="option2" className="flex items-center">
                                    <input type="radio" id="option2" name="option" className="mr-2"
                                        value={accountType} onChange={(e) => setAccountType(e.target.value)} />
                                    Bill Payment
                                </label>
                            </div>
    </div>*/}

                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Account Type :</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option >Daily wage </option>
                                    <option >Bill Payment</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Select Date:</label>
                            <input type="date" id="date" name="date" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Site Name:</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={siteName} onChange={(e) => setSiteName(e.target.value)} >
                                    <option value="">Select...</option>
                                    <option >Alagarsamy - Ayyampatti</option>
                                    <option >Rafiq - Ashok Nagar</option>
                                    <option >Mahadevan - Valayapatti</option>
                                    <option>Muthukrishnan - Godhai Nagar</option>
                                    <option>Shanmugadurai - Kanthadai Street</option>
                                    <option>Nava India Sawmill - Madurai Road</option>
                                    <option>Auditor - Shop</option>
                                    <option>ESM - A.A.Nagar</option>
                                    <option>Muthupandi - Krishnankovil</option>
                                    <option>Saravanan - Dhanya Nagar</option>
                                    <option>Sivakumar - Latha hotel</option>
                                    <option>Namashivayam - Taluka Office</option>
                                    <option>Suresh - Kambathupatti</option>
                                    <option>Kandasamy - Ayyampatti</option>
                                    <option>Maheswari - Sivakasi</option>
                                    <option>Chandran - Valayapatti</option>
                                    <option>Ponpandi Tailor- Valayapatti</option>
                                    <option>Ramar - Krishnankovil</option>
                                    <option>KR Complex - Chinakadai Bazaar</option>
                                    <option>Sriram Pipes House  - Sivabalan</option>
                                    <option>Subburaj - Krishnankovil</option>
                                    <option>Indirajith - Kamapatti</option>
                                    <option>Meenakshiammal</option>
                                    <option>Muthuraj - Murambu</option>
                                    <option>Gengadharan - Sivakasi</option>
                                    <option>Prabha Hotel - Sivakasi</option>
                                    <option>Thambiraj - Krishnankovil</option>
                                    <option>Rajendran - NGGO Colony</option>
                                    <option>Ramadoss - Srivilliputhur</option>
                                    <option>AA Godown - Madurai Road</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Vendor:</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={vendor} onChange={(e) => setVendor(e.target.value)} >
                                    <option value="">Select...</option>
                                    <option >Muthiah Timbers and Tiles</option>
                                    <option >Sathuragiri Tiles</option>
                                    <option>Pannady Tiles</option>
                                    <option>Rajaganapathy Plywoods</option>
                                    <option>Sriram Pipes</option>
                                    <option>Sriram Electricals</option>
                                    <option>VA Traders</option>
                                    <option>SVS Bluemetals</option>
                                    <option>Venkateshwara Bluemetals</option>
                                    <option>Emarajan</option>
                                    <option>Thangam Cements</option>
                                    <option>Sudharshan Cement</option>
                                    <option>Bannari Amman Traders</option>
                                    <option>Bharat Traders</option>
                                    <option>Kathiresan Cements</option>
                                    <option>Madha Chamber Bricks</option>
                                    <option>Thangappanadar Paints</option>
                                    <option>Palchamy Sand</option>
                                    <option>Darling Bricks</option>
                                    <option>AA Earth movers</option>
                                    <option>APJ Bricks</option>
                                    <option>Mariappanadar Timber Depot</option>
                                    <option>Sivasakthi Gravels</option>
                                    <option>Kumar Sand</option>
                                    <option>Jayam Water Supply</option>
                                    <option>Vishvam Wood Planing</option>
                                    <option>Safi Traders</option>
                                    <option>Murugadoss SS Works</option>
                                    <option>Santhanam Borewells</option>
                                    <option>Sriram Wood Planing</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Quantity :</label>
                            <input type="text" id="text" name="text" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Quantity"
                                value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Contractor :</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={contractor} onChange={(e) => setContractor(e.target.value)} >
                                    <option value="">Select...</option>
                                    <option >Company Labour</option>
                                    <option >Periasamy Mason</option>
                                    <option>Muneeswaran Mason</option>
                                    <option>Innasi Mason</option>
                                    <option>Murugan Mason</option>
                                    <option>Kali Labour</option>
                                    <option>Santhanam Carpenter</option>
                                    <option>Bala Ganesh Carpenter</option>
                                    <option>Ganasekar Painter</option>
                                    <option>Murugan Painter</option>
                                    <option>Perumal Metal Works</option>
                                    <option>RK Grill</option>
                                    <option>Muthukrishnan Metal Works</option>
                                    <option>Muthukumar Tiles</option>
                                    <option>Murugan Centring</option>
                                    <option>Paramasivam Centring</option>
                                    <option>Kali Aluminium</option>
                                    <option>Moorthy Electrician</option>
                                    <option>Sathish Mason</option>
                                    <option>Rajagopal Electrician</option>
                                    <option>Karthik Electrician</option>
                                    <option>Senthil Wallcare</option>
                                    <option>Bihari Labour</option>
                                    <option>Kamatchi Asari Metal Works</option>
                                    <option>Paramathma Metal Works</option>
                                    <option>Gurusamy Pattiakal Mason</option>
                                    <option>Sabarimuthu Mason</option>
                                    <option>Pandi Labour</option>
                                    <option>Sathish Kumar Mason</option>
                                    <option>Velmurugan Mason</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Amount :</label>
                            <input type="text" id="text" name="text" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Amount"
                                value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Category :</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={category} onChange={(e) => setCategory(e.target.value)} >
                                    <option value="">Select...</option>
                                    <option >Cement</option>
                                    <option >Sand</option>
                                    <option>M Sand</option>
                                    <option>Bricks</option>
                                    <option>Bluemetals</option>
                                    <option>Gravel</option>
                                    <option>Wall Putty</option>
                                    <option>Paver Blocks</option>
                                    <option>Boulders</option>
                                    <option>Steel</option>
                                    <option>Paints</option>
                                    <option>Tiles</option>
                                    <option>Hardwares</option>
                                    <option>Interior</option>
                                    <option>Labour</option>
                                    <option>Electricals</option>
                                    <option>Plumbing</option>
                                    <option>Cudappah Slabs</option>
                                    <option>Excavation</option>
                                    <option>EB Charges</option>
                                    <option>Borewell</option>
                                    <option>Vehicle Rent</option>
                                    <option>Fencing Work</option>
                                    <option>Scrap Materials</option>
                                    <option>Site Expense</option>
                                    <option>Water</option>
                                    <option>Petrol Allowance</option>
                                    <option>Chemicals</option>
                                    <option>Wood Planing</option>
                                    <option>Tools Purchase</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-gray-700 font-bold mb-2">If others, Enter the vendor name :</label>
                            <input type="text" id="text" name="text" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Vendor Name"
                                value={otherVendorName} onChange={(e) => setOtherVendorName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="text" className="block text-gray-700 font-bold mb-2">If others, Enter the Contractor name :</label>
                            <input type="text" id="text" name="text" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Enter Contractor Name"
                                value={otherContractorName} onChange={(e) => setOtherContractorName(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dropdown" className="block text-gray-700 font-bold mb-2">Machine Tools :</label>
                            <div className="relative">
                                <select id="dropdown" name="dropdown" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={machineTools} onChange={(e) => setMachineTools(e.target.value)} >
                                    <option value="">Select...</option>
                                    <option >Cement</option>
                                    <option >Sand</option>
                                    <option>M Sand</option>
                                    <option>Bricks</option>
                                    <option>Bluemetals</option>
                                    <option>Gravel</option>
                                    <option>Wall Putty</option>
                                    <option>Paver Blocks</option>
                                    <option>Boulders</option>
                                    <option>Steel</option>
                                    <option>Paints</option>
                                    <option>Tiles</option>
                                    <option>Hardwares</option>
                                    <option>Interior</option>
                                    <option>Labour</option>
                                    <option>Electricals</option>
                                    <option>Plumbing</option>
                                    <option>Cudappah Slabs</option>
                                    <option>Excavation</option>
                                    <option>EB Charges</option>
                                    <option>Borewell</option>
                                    <option>Vehicle Rent</option>
                                    <option>Fencing Work</option>
                                    <option>Scrap Materials</option>
                                    <option>Site Expense</option>
                                    <option>Water</option>
                                    <option>Petrol Allowance</option>
                                    <option>Chemicals</option>
                                    <option>Wood Planing</option>
                                    <option>Tools Purchase</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 12l-8-8-2 2 10 10 10-10-2-2-8 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-gray-700 font-bold mb-2">Bill Copy:</label>
                            <input type="file" id="file" name="file" accept=".pdf, .jpg, .jpeg, .png" className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={handleFileChange} />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={handleClick}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ExpensesForm