import React, { useState, useEffect, useRef } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { CiSearch, CiLocationArrow1, CiLocationOn } from 'react-icons/ci';
import { useOnClickOutside } from '../hooks/useOutsideClick';
import { PiBuildingOfficeThin } from "react-icons/pi";


export const GET_SUPPLIER_LIST = gql`
  query Tenants($search : String!, $plz: String!, $limit: Int! , $offset: Int!, $tenantTypeId : Int ) {
  tenants(search: $search, plz: $plz , limit: $limit, offset: $offset , tenantTypeId: $tenantTypeId) {
        email
        name
        slug
        city
        country
        phone
        zipCode
        address
        tenantId
        timeZone
    }
  }
`;

export default function Searchbar() {
    const router = useRouter();
    const [search, setSearch] = useState({ search: '', location: '', limit: 5 });
    const menuRef = useRef();
    const [open, setOpen] = useState(false);
    const [triggerQuery, { data, loading }] = useLazyQuery(GET_SUPPLIER_LIST, { variables: { search: search.search, plz: search.location, limit: search.limit, offset: 0, tenantTypeId: null } });

    useOnClickOutside(menuRef, () => setOpen(false));

    console.log(data)

    useEffect(() => {
        const handler = setTimeout(() => {
            if (search.search.trim() !== "" || search.location.trim() !== "") {
                triggerQuery({
                    variables: {
                        search: search.search,
                        location: search.location,
                        limit: search.limit,
                    },
                });
            }
        }, 500);

        return () => clearTimeout(handler);
    }, [search, triggerQuery]);


    useEffect(() => {
        if (data && (search.search !== '' || search.location !== '')) {
            setOpen(true);
        }
        else {
            setOpen(false)
        }
    }, [data, search]);

    function handleChange(e) {
        const { name, value } = e.target;
        setSearch(ps => ({ ...ps, [name]: value }));
    }

    return (
        <div className="d-flex position-relative justify-content-start flex-column">
            <Searchi search={search} handleChange={handleChange} />
            {open && (
                <div ref={menuRef} className="position-absolute text-dark bg-white rounded rounded-5 popover2 grey-hover w-100" style={{ left: 0, zIndex: 9999999 }}>
                    <div className="col-12 d-flex flex-column align-items-start justify-content-center w-100 p-0">
                        {loading ? (
                            <span className="spinner spinner-border"></span>
                        ) : (
                            data?.tenants.length > 0 ? (
                                data.tenants.map((k, i) => (
                                    <div key={i} onClick={() => router.push(`/booking/${k.tenantId}/booking`)} className="d-flex flex-row justify-content-between border-bottom align-items-center pointer grey-hover py-2  w-100 p-0" style={{}}>
                                        <div className='d-flex justify-content-start align-items-center'>

                                            <div className='me-3'>
                                                <PiBuildingOfficeThin size={30} color='black' />
                                            </div>
                                            <span className=''>{k.name}</span>
                                        </div>

                                        <span className='me-2'>{k.zipCode} {k.city}</span>
                                    </div>
                                ))
                            ) : (
                                <span>Kein Anbieter gefunden</span>
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export function Searchi({ search, handleChange }) {

    const router = useRouter();
    return (
        <div className="">
            <div className="search-bar position-relative shadow shadow-md">
                <div className="search-icon"><CiSearch size={25} /></div>
                <input
                    type="text"
                    name="search"
                    value={search.search}
                    onChange={handleChange}
                    placeholder="Name"
                    inputMode="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    autoFocus={false}
                />
                <div className="search-icon"><CiLocationOn size={25} /></div>
                <input
                    type="text"
                    name="location"
                    value={search.location}
                    onChange={handleChange}
                    placeholder="Postleitzahl"
                    inputMode="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="none"
                    autoFocus={false}
                />
                <button className="search-button " onClick={() => router.push(`/booking?search=${search.search}&location=${search.location}`)}>
                    <div className="d-flex flex-row justify-content-center align-items-center">
                        <span className="me-2">Suche</span>
                        <div><CiLocationArrow1 size={25} /></div>
                    </div>
                </button>
            </div>
        </div>
    );
}
