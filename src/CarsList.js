import React, { useState } from 'react'
import './CarsList.css'

export default function CarsList() {

    const [data, setData] = useState([
        { sl: 1, company: 'Tata',             model: 'Punch',     sales: 202030, price: 6.20 },
        { sl: 2, company: 'Maruthi Suzuki',   model: 'Wagon R',   sales: 190855, price: 5.55 },
        { sl: 3, company: 'Maruthi Suzuki',   model: 'Ertiga',    sales: 190091, price: 8.70 },
        { sl: 4, company: 'Maruthi Suzuki',   model: 'Brezza',    sales: 188160, price: 8.35 },
        { sl: 5, company: 'Hyundai',          model: 'Creta',     sales: 186919, price: 11.11 },
        { sl: 6, company: 'Maruthi Suzuki',   model: 'Swift',     sales: 172808, price: 6.50 },
        { sl: 7, company: 'Maruthi Suzuki',   model: 'Baleno',    sales: 172094, price: 6.66 },
        { sl: 8, company: 'Maruthi Suzuki',   model: 'Dzire',     sales: 167988, price: 6.80 },
        { sl: 9, company: 'Mahindra',         model: 'Scorpio',   sales: 166364, price: 13.85 },
        { sl: 10, company: 'Tata',            model: 'Nexon',     sales: 161611, price: 8.15 }
    ]);

    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const sortData = (key) => {
        let sortedData = [...data];
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          sortedData.sort((a, b) => (a[key] > b[key] ? -1 : 1));
          setSortConfig({ key, direction: 'descending' });
        } else {
          sortedData.sort((a, b) => (a[key] < b[key] ? -1 : 1));
          setSortConfig({ key, direction: 'ascending' });
        }
        setData(sortedData);
      };

    return (
        <div>
            <table>
                <tr>
                    <th onClick={() => sortData('sl')}>Rank</th>
                    <th onClick={() => sortData('company')}>Company</th>
                    <th onClick={() => sortData('model')}>Model</th>
                    <th onClick={() => sortData('sales')}>Sales number</th>
                    <th onClick={() => sortData('price')}>Starting Ex-showroom price</th>
                </tr>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.sl}</td>
                            <td>{item.company}</td>
                            <td>{item.model}</td>
                            <td>{item.sales} <span> Units</span></td>
                            <td>{item.price} <span> Lakhs</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
