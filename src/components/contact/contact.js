import React from "react";
import './contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contact = () => {


    return (
        <section className="section-min-height" >
            <h1>kontakt</h1>
            <p className="align-center " >óráink online folynak, amúgy keress itt:</p>

            <table>
                <tr>
                    <td>telefon</td>
                    <td>+36305334023</td>
                </tr>
                <tr>
                    <td>email</td>
                    <td>email@gmail.com</td>
                </tr>
                <tr>
                    <td>fogadóórák</td>
                    <td>h-p 10-18</td>
                </tr>
            </table>

        </section>


    )

}

export default contact

