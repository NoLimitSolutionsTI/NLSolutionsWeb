import React, {useState} from "react";
import '@/styles/ContactPage/contactpage.scss'
import logo from '@/assets/logoNL-sin fondo-negro.png'
import { HeadProvider } from "react-head"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        telephone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://localhost:7141/api/NLWeb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Respuesta del servidor:", data);
                alert("Mensaje enviado con éxito");
            })
            .catch(error => console.error("Error:", error));
    };

    return(
        <>
            <HeadProvider>
                <title>NL Solutions TI | Contact </title>
                <meta name="description" content="Esta es la página de contacto de mi aplicación."/>
            </HeadProvider>
            <hr></hr>

            <section className={'container-sm'}>
                <div className={'title-contact'}>
                    <h3>Contáctanos</h3>
                </div>
            </section>

            <div className={'contact-container container-sm'}>
            <section className={'contact-logo-section container-sm'}>
                <img src={logo} alt="Logo" />
            </section>


            <section className=" contact-section contact-form-section container-sm">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h3>Envíanos un mensaje</h3>
                        <input type="text" className="form-control" placeholder="Nombres y Apellidos"
                               name="fullName" value={formData.fullName} onChange={handleChange} required/>
                        <input type="email" className="form-control" placeholder="Correo" name="email"
                               value={formData.email} onChange={handleChange} required/>
                        <input type="tel" className="form-control" placeholder="Numero de Telefono" name="telephone"
                               value={formData.telephone} onChange={handleChange} required pattern="[0-9]{9,}"/>

                        <textarea name="message" className="form-control" placeholder="Mensaje"
                                  value={formData.message} onChange={handleChange} required></textarea>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="is_agree" required/>
                            <label className="form-check-label" htmlFor="invalidCheck">
                                He leído y estoy de acuerdo con los términos y condiciones de la web.
                            </label>
                            <div className="invalid-feedback">
                                Debes aceptar los términos antes de enviar.
                            </div>
                        </div>
                        <div className="button-container">
                            <button className="btn btn-primary" type="submit" aria-label="Enviar formulario de contacto">Enviar</button>
                        </div>
                    </div>
                </form>
            </section>
            </div>
        </>
    )
}








