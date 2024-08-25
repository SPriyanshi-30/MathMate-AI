import React, { useState } from 'react';
import { Chart } from 'react-google-charts';

const InteractiveVisualAids = () => {
    const [concept, setConcept] = useState('Addition');

    const data = {
        Addition: [
            ['Numbers', 'Result'],
            ['1 + 1', 2],
            ['2 + 3', 5],
            ['3 + 4', 7],
            ['4 + 5', 9],
        ],
        Subtraction: [
            ['Numbers', 'Result'],
            ['5 - 2', 3],
            ['8 - 3', 5],
            ['10 - 4', 6],
            ['7 - 5', 2],
        ],
        Multiplication: [
            ['Numbers', 'Result'],
            ['2 x 2', 4],
            ['3 x 3', 9],
            ['4 x 5', 20],
            ['6 x 7', 42],
        ],
        Division: [
            ['Numbers', 'Result'],
            ['6 ÷ 2', 3],
            ['9 ÷ 3', 3],
            ['12 ÷ 4', 3],
            ['20 ÷ 5', 4],
        ],
    };

    const options = {
        title: `${concept} Visual Aid`,
        hAxis: { title: 'Numbers' },
        vAxis: { title: 'Result' },
        legend: { position: 'none' },
        backgroundColor: 'transparent',
        colors: ['#72edf2', '#5151e5'],
    };

    return (
        <div>
            <h2>Interactive Visual Aids</h2>
            <p>Select a concept to visualize:</p>
            <select onChange={(e) => setConcept(e.target.value)} value={concept}>
                <option value="Addition">Addition</option>
                <option value="Subtraction">Subtraction</option>
                <option value="Multiplication">Multiplication</option>
                <option value="Division">Division</option>
            </select>
            <Chart
                chartType="ColumnChart"
                data={data[concept]}
                options={options}
                width={'100%'}
                height={'400px'}
            />
        </div>
    );
};

export default InteractiveVisualAids;
