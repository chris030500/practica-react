import React, { useState } from 'react';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';

export default function Table() {
    const [tableData, setTableData] = useState([
        { name: "Christian", email: "chris@gmail.com", phone: 4424561230, age: 22, gender: "M", city: "Querétaro",},
        { name: "Brandon", email: "bran@gmail.com", phone: 4425621590, age: 35, gender: "M", city: "Guadalajara",},
        { name: "Monica", email: "mony@gmail.com", phone: 442852912, age: 17, gender: "F", city: "Querétaro"},
        { name: "Erick", email: "erick@gmail.com", phone: 4426543210, age: 20, gender: "M", city: "Durango"},
        { name: "Aurora", email: "au@gmail.com", phone: 4425621301, age: 25, gender: "F", city: "Oaxaca"},
        { name: "Alexis", email: "alexis@gmail.com", phone: 4425621590, age: 35, gender: "M", city: "Puebla"},
        { name: "Ricardo", email: "richi@gmail.com", phone: 442852912, age: 17, gender: "M", city: "Querétaro"},
        { name: "Andrea", email: "andy@gmail.com", phone: 4426543210, age: 20, gender: "F", city: "Chiapas"},
        { name: "Milton", email: "milton@gmail.com", phone: 4424561230, age: 23, gender: "M", city: "Merida"},
        { name: "Fernando", email: "fer@gmail.com", phone: 4425621590, age: 35, gender: "M", city: "Querétaro"},
        { name: "Monse", email: "monse@gmail.com", phone: 442852912, age: 17, gender: "F", city: "Mazatlan"},
        { name: "Flor", email: "flor@gmail.com", phone: 4426543210, age: 20, gender: "F", city: "Guadalajara"},
    ])
    const columns = [
        { title: "Nombre", field: "name" },
        { title: "Email", field: "email" },
        { title: "Telefono", field: "phone" },
        { title: "Edad", field: "age" },
        { title: "Genero", field: "gender" },
        { title: "Ciudad", field: "city" },
    ]
    return (
        <>
            <MaterialTable columns={columns} data={tableData}
                options={{
                searchFieldAlignment: "right", searchFieldVariant: "standard",
                paginationType: "stepped", 
                headerStyle: { background: "#CD5C5C",color:"#fff"}
                }}
                title="Personas"
            />
        </>
    ); 
}