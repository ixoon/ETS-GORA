import React from 'react';
import styles from './schedule.module.css';

const Schedule = () => {
    return (
        <div className={styles.scheduleContainer}>
            <h2>Настава се изводи по следећој сатници:</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Час</th>
                        <th>Преподневна смена</th>
                        <th>Одмори</th>
                        <th>Послеподневна смена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. час</td>
                        <td>8:00 – 8:40</td>
                        <td>5 минута</td>
                        <td>13:15 – 13:55</td>
                    </tr>
                    <tr>
                        <td>2. час</td>
                        <td>8:45 – 9:25</td>
                        <td>20/15 минута</td>
                        <td>14:00 – 14:40</td>
                    </tr>
                    <tr>
                        <td>3. час</td>
                        <td>9:40 – 10:20</td>
                        <td>5 минута</td>
                        <td>15:05 – 15:50</td>
                    </tr>
                    <tr>
                        <td>4. час</td>
                        <td>10:25 – 11:05</td>
                        <td>10 минута</td>
                        <td>15:55 – 16:40</td>
                    </tr>
                    <tr>
                        <td>5. час</td>
                        <td>11:10 – 11:45</td>
                        <td>5 минута</td>
                        <td>16:50 – 17:35</td>
                    </tr>
                    <tr>
                        <td>6. час</td>
                        <td>11:50 – 12:25</td>
                        <td>5 минута</td>
                        <td>17:40 – 18:25</td>
                    </tr>
                    <tr>
                        <td>7. час</td>
                        <td>12:30 – 13:00</td>
                        <td>5 минута</td>
                        <td>18:30 – 19:15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;
