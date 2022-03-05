import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const url = "http://localhost:3080/api/v1/requests"
    const [data, setData] = useState({
        name: "",
        cin: "",
        dateDebut: "",
        dateFin: "",
        type: "Congé payé",
        cause: "",
        statut: "Planifée"
    })

    function submitForm (event){
        event.preventDefault();
        axios.post(url,{
            name: data.name,
            cin: data.cin,
            dateDebut: data.dateDebut,
            dateFin: data.dateFin,
            type: data.type,
            cause: data.cause,
            statut: data.statut
        })
        .then (res=>{
            console.log(res.data)
        })
        

    }

    function handle(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)

    }

    return (
        <form onSubmit={(event)=>submitForm(event)} >
            <div className="row">
                <div className="label1">
                    <label htmlform="nom">Nom et prénom</label>
                </div>
                <div className="placeH">
                    <input type="text" id="name" name="name" placeholder="Votre nom.." onChange={(event) => handle(event)} value={data.name} />
                </div>
            </div>
            <div className="row">
                <div className="label1">
                    <label htmlform="cin">Cin</label>
                </div>
                <div className="placeH">
                    <input type="text" id="cin" name="cin" placeholder="Cin.." onChange={(event) => handle(event)} value={data.cin} />
                </div>
            </div>
            <div className="row">
                <div className="label1">
                    <label htmlform="lname">Date de début</label>
                </div>
                <div className="placeH">
                    <input type="date" id="dateDebut" name="dateDebut" placeholder="Date de début.." onChange={(event) => handle(event)} value={data.dateDebut} />
                </div>
            </div>
            <div className="row">
                <div className="label1">
                    <label htmlform="lname">Date de fin</label>
                </div>
                <div className="placeH">
                    <input type="date" id="dateFin" name="dateFin" placeholder="Date de fin.." onChange={(event) => handle(event)} value={data.dateFin} />
                </div>
            </div>
            <div className="row">
                <div className="label1">
                    <label htmlform="type de congé">Type de congé</label>
                </div>
                <div className="placeH">
                    <select id="type" name="type" onChange={(event) => handle(event)} value={data.type} >
                        <option value="congé payé">Congé payé</option>
                        <option value="congé non payé">Congé non payé</option>
                        <option value="congé maladie">Congé maladie</option>
                        <option value="congé pour raisons familiales">Congé pour raisons familiales</option>
                        <option value="congé paternité">Congé paternité</option>
                        <option value="congé maternité">Congé maternité</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="label1">
                    <label htmlform="cause">Cause</label>
                </div>
                <div className="placeH">
                    <textarea id="cause" name="cause" placeholder="Write something.." onChange={(event) => handle(event)} value={data.cause} ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="label1">
                    <label htmlform="statut">Statut</label>
                </div>
                <div className="placeH">
                    <select id="statut" name="statut" onChange={(event) => handle(event)} value={data.statut} >
                        <option value="Planifée">Planifée</option>
                        <option value="Non planifée">Non planifée</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <button type='submit'>submit</button>
            </div>
        </form>
    );
}
export default Form;