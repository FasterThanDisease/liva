import React from 'react'

export default function Supplierregistration({ state, setState }) {

    function handleChange(e) {
        const { value, name } = e.target
        setState(ps => ({ ...ps, [name]: value }))
    }
    return (
        <div className="row justify-content-start align-items-start">
            <div className="col-12">
                <span className='color1'>Unternehmens-Informationen</span>
            </div>
            <div className='col-12 mt-2'>
                <label>Name des Unternehmens</label>
                <input className='form-control form-control-sm' type='text' name='b_name' onChange={e => handleChange(e)} />
            </div>
            <div className=' col-12 col-md-6  mt-2 '>
                <label>E-Mail-Adresse</label>
                <input className='form-control form-control-sm' type='text' name='b_email' onChange={e => handleChange(e)} />
            </div>
            <div className=' col-12 col-md-6  mt-2 '>
                <label>Telefonnummer</label>
                <input className='form-control form-control-sm' type='text' name='b_phonenumber' onChange={e => handleChange(e)} />
            </div>
            <div className=' col-12 col-md-4  mt-2'>
                <label>Adresse</label>
                <input className='form-control form-control-sm' type='text' name='b_address' onChange={e => handleChange(e)} />
            </div>




            <div className=' col-12 col-md-4  mt-2'>
                <label>Postleitzahl</label>
                <input className='form-control form-control-sm' type='text' name='b_zip' onChange={e => handleChange(e)} />
            </div>

            <div className=' col-12 col-md-4  mt-2'>
                <label>Ort</label>
                <input className='form-control form-control-sm' type='text' name='b_city' onChange={e => handleChange(e)} />
            </div>


            <div className='col-12 mt-2'>
                <label>Unternehmensbeschreibung</label>
                <textarea className='form-control form-control-sm' name='b_description' style={{ minHeight: 100 }} onChange={e => handleChange(e)} />
            </div>

            <div className="col-12">
                <hr />
            </div>

            <div className='col-12'>
                <span className='color1'>Inhaber-Informationen</span>
            </div>

            <div className="col-12   mt-2">
                <label>Name</label>
                <input className='form-control form-control-sm' type='text' name='fname' onChange={e => handleChange(e)} />
            </div>

            <div className="col-12  mt-2">
                <label>E-Mail-Adresse</label>
                <input className='form-control form-control-sm' type='text' name='fname' onChange={e => handleChange(e)} />
            </div>



            <div className="col-12 col-md-4 mt-2">
                <label>Adresse</label>
                <input className='form-control form-control-sm' type='text' name='fadress' onChange={e => handleChange(e)} />
            </div>


            <div className="col-12 col-md-4 mt-2">
                <label>Postleitzahl</label>
                <input className='form-control form-control-sm' type='text' name='fzip' onChange={e => handleChange(e)} />
            </div>

            <div className="col-12 col-md-4 mt-2">
                <label>Ort</label>
                <input className='form-control form-control-sm' type='text' name='fcity' onChange={e => handleChange(e)} />
            </div>

            <div className="col-12">
                <hr />
            </div>

            <div className='col-12 mt-2'>
                <span className='color1'>Einverständnis</span>
            </div>

            <div className="col-12 mt-2">
                <div className="form-check ">
                    <input className="form-check-input " type="checkbox" id="inlineCheckbox1" checked={state.consent === 1 ? true : false} name='consent' onChange={(e) => setState(ps => ({ ...ps, consent: e.target.checked ? 1 : 0 }))} style={{ width: 20, height: 20 }} />
                    <label style={{ fontSize: 12 }} className=" form-check-label " htmlFor="inlineCheckbox1">Ich bestätige, dass diese Angaben über das Unternhemen, sowie zu meiner Person der Wahrheit entsprechen.</label>
                </div>
            </div>

        </div>
    )
}
