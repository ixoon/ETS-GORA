import React from "react";
import MiniNavbar from "../components/miniNavbar";
import styles from './professors.module.css';
import Footer from "../components/footer";

const Professors = () => {
    return (
        <div>
           
            <div className={styles.professorsList}>
                <h1 className={styles.heading}>Наставни кадар</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableHeader}>Наставни предмет</th>
                            <th className={styles.tableHeader}>Име и презиме професора</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tableData}>Српски језик и књижевност</td>
                            <td className={styles.tableData}>Нуија Вечка, Џелал Фејза</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Енглески језик</td>
                            <td className={styles.tableData}>Џердин Мифтари, Хавзија Хајдари</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Математика</td>
                            <td className={styles.tableData}>Елмен Абидини, Туркан Кесаси</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Физика</td>
                            <td className={styles.tableData}>Абдула Сахтијари</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Географија</td>
                            <td className={styles.tableData}>Беким Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Биологија</td>
                            <td className={styles.tableData}>Дилавер Хочко</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Хемија</td>
                            <td className={styles.tableData}>Рамиза Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Информатика и рачунарство</td>
                            <td className={styles.tableData}>Суад Дестани</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Историја</td>
                            <td className={styles.tableData}>Мелдин Скендери</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Латински језик</td>
                            <td className={styles.tableData}>Дилавер Хочко</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Социјологија</td>
                            <td className={styles.tableData}>Измир Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Руски језик</td>
                            <td className={styles.tableData}>Шејап Аслани</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Психологија</td>
                            <td className={styles.tableData}>Измир Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Примењене науке</td>
                            <td className={styles.tableData}>Абдула Сахтијари</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Физичко васпитање</td>
                            <td className={styles.tableData}>Харун Зубери, Арсел Ибраими</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Музичка култура</td>
                            <td className={styles.tableData}>Селина Аслани-Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Ликовна култура</td>
                            <td className={styles.tableData}>Селина Аслани-Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Филозофија</td>
                            <td className={styles.tableData}>Измир Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Грађанско васпитање</td>
                            <td className={styles.tableData}>Селина Аслани-Шерифи</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Економија</td>
                            <td className={styles.tableData}>Вахид Шаћири</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Астрономија</td>
                            <td className={styles.tableData}>Абдула Сахтијари</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Језик медији и култура</td>
                            <td className={styles.tableData}>Измир Шерифи</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className={styles.heading}>Ваннаставни кадар</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableHeader}>Име и презиме</th>
                            <th className={styles.tableHeader}>Функција</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tableData}>Директор</td>
                            <td className={styles.tableData}>Авнија Вејсели</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Секретар</td>
                            <td className={styles.tableData}>Селма хххххххх</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Рачуноводство</td>
                            <td className={styles.tableData}>Шукрија Аслани</td>
                        </tr>
                        <tr>
                            <td className={styles.tableData}>Помоћно техничко особље</td>
                            <td className={styles.tableData}>Џелар Исаки, Расел хххххх, Еџемир Халити</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Professors;
