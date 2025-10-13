import React, { useState } from "react";
import '@/styles/ContactPage/contactpage.scss'
import { HeadProvider } from "react-head"
import AOS from 'aos';
import Swal from "sweetalert2";
import { rutaImagenes } from "@/App";

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

    const API_URL = "https://nlwebbackend.onrender.com/api/NLWeb";
    const HEALTH_URL = "https://nlwebbackend.onrender.com/health";
    const MAIL_ENDPOINT = "https://nlsolutionsti.com/api/sendMail.php";

    const fetchWithTimeout = (input, init = {}, ms = 60000) => {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), ms);
        return fetch(input, { ...init, signal: controller.signal })
            .finally(() => clearTimeout(id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Enviando...',
            allowOutsideClick: false,
            allowEscapeKey: false,
            didOpen: () => Swal.showLoading()
        });

        try {

            // 3) Envía correo con tu PHP local (usando URLSearchParams como alternativa)
            let mailOk = false;
            try {
                // Opción alternativa: URLSearchParams
                const params = new URLSearchParams();
                params.append('fullName', formData.fullName);
                params.append('email', formData.email);
                params.append('telephone', formData.telephone);
                params.append('message', formData.message);

                const mailRes = await fetchWithTimeout(MAIL_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: params
                }, 15000);

                const mailJson = await mailRes.json().catch(() => ({}));
                mailOk = mailRes.ok && mailJson?.success === true;
                // eslint-disable-next-line no-unused-vars
            } catch (_) { mailOk = false; }

            // Verificar si el mensaje tiene mas de una palabra mayor a 3 caracteres
            const hasLongWords = formData.message.split(" ").filter(word => word.length > 3).length > 1;
            if (!hasLongWords) {
                await Swal.fire({
                    icon: 'error',
                    title: 'No pudimos enviar tu mensaje',
                    text: 'Ingresa un mensaje válido, detalla tu consulta.'
                });
            } else {
                // 1) Precalienta Render (no bloqueante)
                await fetchWithTimeout(HEALTH_URL, {}, 10000).catch(() => { });

                // 2) Guarda en tu API con timeout largo (60s)
                const saveRes = await fetchWithTimeout(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }, 60000);

                const ct = saveRes.headers.get("content-type") || "";
                const savePayload = saveRes.status !== 204
                    ? (ct.includes("application/json") ? await saveRes.json() : await saveRes.text())
                    : null;

                if (!saveRes.ok) {
                    const details =
                        (savePayload && typeof savePayload !== "string" && (
                            savePayload.message || savePayload.error ||
                            (savePayload.errors && Object.values(savePayload.errors).flat().join("\n"))
                        )) || (typeof savePayload === "string" ? savePayload : null);
                    throw new Error(details || `Error ${saveRes.status}`);
                }

                await Swal.fire({
                    icon: mailOk ? 'success' : 'warning',
                    title: mailOk ? '¡Mensaje enviado!' : 'Guardado OK',
                    text: mailOk
                        ? 'Se guardó y enviamos un correo de confirmación.'
                        : 'Se guardó, pero no pudimos enviar el correo de confirmación.'
                });
            }
        } catch (err) {
            await Swal.fire({
                icon: 'error',
                title: 'No pudimos enviar tu mensaje',
                text: err.name === 'AbortError'
                    ? 'El servidor está despertando y tardó más de lo esperado. Inténtalo de nuevo.'
                    : (err.message || 'Ocurrió un error inesperado.')
            });
        }
    };

    return (
        <>
            <HeadProvider>
                <title>NL Solutions TI | Contact </title>
                <meta name="description" content="Esta es la página de contacto de mi aplicación." />
            </HeadProvider>

            <section className={'container-sm'}>
                <div className={'title-contact'}>
                    <h3 data-aos="fade-up">Contáctanos</h3>
                </div>
            </section>

            <div className={'contact-container container-sm'}>
                <section className={'contact-logo-section container-sm'} data-aos="fade-up" data-aos-delay="100">
                    <img src={`${rutaImagenes}logoNL-sin fondo-negro.webp`} alt="Logo" />
                </section>
                <section className=" contact-section contact-form-section container-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3" data-aos="fade-up" data-aos-delay="200">
                            <h3>Envíanos un mensaje</h3>
                            <input type="text" className="form-control" placeholder="Nombres y Apellidos"
                                name="fullName" value={formData.fullName} onChange={handleChange} required />
                            <input type="email" className="form-control" placeholder="Correo" name="email"
                                value={formData.email} onChange={handleChange} required />
                            <input type="tel" className="form-control" placeholder="Numero de Telefono" name="telephone"
                                value={formData.telephone} onChange={handleChange} required pattern="[0-9]{9,}" />

                            <textarea name="message" className="form-control" placeholder="Mensaje"
                                value={formData.message} onChange={handleChange} required></textarea>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="is_agree" required />
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    He leído y estoy de acuerdo con los términos y condiciones de la web.
                                </label>
                                <div className="invalid-feedback">
                                    Debes aceptar los términos antes de enviar.
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="btn-details" type="submit" aria-label="Enviar formulario de contacto">Enviar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </>
    )
}








