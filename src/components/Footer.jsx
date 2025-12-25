import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { useState } from 'react'
import { AgCharts } from 'ag-charts-react';
ModuleRegistry.registerModules([AllCommunityModule]);


function Footer() {
    const [chartOptions, setChartOptions] = useState({
        data: [
            { month: 'Jan', avgTemp: 2.2, pagesRead: 200000 },
            { month: 'Mar', avgTemp: 6.3, pagesRead: 100000 },
            { month: 'May', avgTemp: 16.2, pagesRead: 300000 },
            { month: 'Jul', avgTemp: 22.8, pagesRead: 220000 },
            { month: 'Sep', avgTemp: 14.5, pagesRead: 600000 },
            { month: 'Nov', avgTemp: 8.9, pagesRead: 550000 },
        ],
        series: [{ type: 'line', xKey: 'month', yKey: 'pagesRead' }],
    });

    return (
        <div className="footer">
            <h1>Footer</h1>
            <div className="graph-main-card" >
                <div className="header-bttns-container">
                    <div className='left-header'>
                    <img src="" alt="Reading Progess" />
                    <h3>Reading Progress</h3>
                    </div>
                    <div className='right-header'>
                        <button>Log Pages +</button>
                    </div>
                </div>
                <div className="page-counter-container">
                    <h3>Total Pages</h3>
                    <h3>Daily Average</h3>
                </div>
                <div className="graph-container">
                    <h3>Graph goes here</h3>
                </div>
            </div>
            <div>
                <AgCharts options={chartOptions} />
            </div>  
        </div>
    )
}

export default Footer; 