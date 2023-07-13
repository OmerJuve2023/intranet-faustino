import '../App.css'
import React from "react";
import image from "../images/img001.jpg"

class LoginForm extends React.Component {
    render() {
        return (
            <div className="Formulario">
                <br/>
                <br/>
                <br/>
                <br/>
                <br style={{marginBottom: "4px"}}/>

                <table border="0" cellSpacing="2" cellPadding="2" width="100%">
                    <tbody>
                    <tr>
                        <td style={{textAlign: 'right'}}>usuario :</td>
                        <td>
                            <input name="txtUsuario" type="text" maxLength="10" id="txtUsuario"
                                   className="ControlText"/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{textAlign: 'right'}}>contraseña :</td>
                        <td>
                            <input name="txtContrasenia" type="password" maxLength="16" id="txtContrasenia"
                                   className="ControlText"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: 'right'}} className="style2">
                            <a id="lnkbtnRecordarContrasenia" className="Boton_activar_cuenta"
                               href="https://intranet.unjfsc.edu.pe/SolicitudContrasenia.aspx">Ha
                                olvidado su contraseña?</a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: 'center'}}>
                            <input type="submit" name="btnIniciarSesion" value="Iniciar sesión"
                                   id="btnIniciarSesion" className="Boton_basico"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" style={{textAlign: 'center'}}>
                            <span id="lblMensaje" style={{color: 'Red', textAlign: 'center'}}></span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class LoginPage extends React.Component {
    render() {
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
        );
    }
}

export default LoginPage;


