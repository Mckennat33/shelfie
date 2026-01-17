import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';
import { useState } from 'react'
import { AgCharts } from 'ag-charts-react';
ModuleRegistry.registerModules([AllCommunityModule]);



function Footer() {
    const [pages, setPages] = useState(0)
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

    function handleLogPages(e) {
        // how many pages you read that day
        // adds it to state 
        e.preventDefault()
        setPages(pages)

        console.log(pages)
    }

    return (
        <div className="footer">
            <h1>Footer</h1>
            <div className='footer-main-container'>
                <div className="graph-main-card" >
                    <div className="header-bttns-container">
                        <div className='left-header'>
                            <img src="" alt="Reading Progess" />
                            <h3>Reading Progress</h3>
                        </div>
                        <div className='right-header'>
                            <form action="" onSubmit={(e) => handleLogPages(e)} >
                            <input type="number" onChange={(e) => {setPages(Number(e.target.value))}} />
                            <button>Log Pages +</button>
                            </form>
                            
                        </div>
                        
                    </div>
                        <h4>Pages:</h4><p>{pages}</p>
                    <div className="page-counter-container">
                        <h3>Total Pages</h3>
                        <h3>Daily Average</h3>
                    </div>
                    <div className="graph-container">
                        <h3>Graph goes here</h3>
                    </div>
                </div>
                <div className='reading-graph'>
                    <AgCharts options={chartOptions} />
                </div>  
            </div>
        </div>
    )
}

export default Footer; 