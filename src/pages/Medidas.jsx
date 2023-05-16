import React from 'react'
import Container from '../components/layout/Container'
const Medidas = () => {
  return (
    <Container>
    <div className="medidas">
      <div className='medidasAnillos'>
      <h2>Medidas de Anillos</h2> 
      <p>- Una forma de conocer cual es tu talla de anillo es midiendo el diámetro interior de un anillo que te quede bien. Pones el anillo sobre una regla o midiéndolo con un metro y vas conocer el diámetro interior.</p>
      <p>- La otra manera es medir la circunferencia del dedo donde vas a usar el anillo con un metro de costura.Se recomienda tomar la medida tres o cuatro veces para evitar errores ya que el el tamaño del dedo puede variar durante el dia .Una vez que sabes la medida en cm, lo comparas con la siguiente tabla de equivalencias para conocer tu número.</p>

            <table className="table-danger">
                
                <tr>
                <td><strong> Talle </strong></td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td> 
                <td>18</td>  
                <td>19</td>
                <td>20</td>
                </tr>

                <tr>
                <td><strong>Medida del dedo (cm)</strong> </td>
                <td>5.2 cm</td>
                <td>5.3 cm</td>
                <td>5.4 cm</td>
                <td>5.5 cm</td>
                <td>5.6 cm</td>
                <td>5.7 cm</td>
                <td>5.8 cm</td>
                <td>5.9 cm</td> 
                <td>6.0 cm</td>  
                <td>6.1 cm</td>
                <td>6.2 cm</td>
                </tr>
            </table>
            </div>
            </div>
        </Container>
  )
}

export default Medidas