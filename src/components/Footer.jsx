import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { useState } from 'react'
import { AgCharts } from 'ag-charts-react';

// Enable all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function Footer() {

    
    const [chartOptions, setChartOptions] = useState({
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
    });

    




    return (
        <div className="footer">
            <h1>Footer</h1>
            <div className="graph-main-card" >
                <div className="header-bttns-container">
                    {/* <img src="" alt="" /> */}
                    <h3>Reading Progress</h3>
                    
                    <h3>Log Pages</h3>
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